FROM --platform=$BUILDPLATFORM rust:alpine as preparation

ARG PRISMA_VERSION
WORKDIR /work
RUN apk --no-cache add git
RUN git clone --depth=1 --branch=${PRISMA_VERSION} https://github.com/prisma/prisma-engines.git /prisma
RUN cd /prisma && cargo fetch

FROM rust:alpine as prisma-builder

ENV RUSTFLAGS="-C target-feature=-crt-static"
RUN apk --no-cache add openssl direnv git musl-dev openssl-dev build-base perl protoc
COPY --from=preparation /prisma /prisma
COPY --from=preparation /usr/local/cargo /usr/local/cargo
RUN cd /prisma && cargo build --release --offline

FROM node:lts-alpine as production

RUN apk --no-cache add openssl

COPY --from=prisma-builder \
    /prisma/target/release/query-engine \
    /prisma/target/release/migration-engine \
    /prisma/target/release/introspection-engine \
    /prisma/target/release/prisma-fmt \
    /tmp/prisma-engines/
ENV PRISMA_QUERY_ENGINE_BINARY=/tmp/prisma-engines/query-engine \
    PRISMA_MIGRATION_ENGINE_BINARY=/tmp/prisma-engines/migration-engine \
    PRISMA_INTROSPECTION_ENGINE_BINARY=/tmp/prisma-engines/introspection-engine \
    PRISMA_FMT_BINARY=/tmp/prisma-engines/prisma-fmt \
    PRISMA_CLI_QUERY_ENGINE_TYPE=binary \
    PRISMA_CLIENT_ENGINE_TYPE=binary
