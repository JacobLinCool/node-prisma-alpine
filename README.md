# Node-Prisma-Alpine Images

This repository provides `node:lts-alpine` + `prisma` images for `amd64` and `arm64` architectures.

You can simply pull the image from [`jacoblincool/node-prisma-alpine:<prisma-version>`](https://hub.docker.com/r/jacoblincool/node-prisma-alpine) ([supported tags](https://hub.docker.com/r/jacoblincool/node-prisma-alpine/tags?ordering=name)).

Check out [Dockerfile](Dockerfile) for more details.

## Prebuilt Images

<!-- TAGS -->
- 4.9.0 (72.5 MB) - `docker pull jacoblincool/node-prisma-alpine:4.9.0`
- 4.8.0 (72.2 MB) - `docker pull jacoblincool/node-prisma-alpine:4.8.0`
- 4.7.1 (92.9 MB) - `docker pull jacoblincool/node-prisma-alpine:4.7.1`
- 4.7.0 (92.9 MB) - `docker pull jacoblincool/node-prisma-alpine:4.7.0`
- 4.6.1 (93.0 MB) - `docker pull jacoblincool/node-prisma-alpine:4.6.1`
- 4.6.0 (93.0 MB) - `docker pull jacoblincool/node-prisma-alpine:4.6.0`
- 4.5.0 (93.2 MB) - `docker pull jacoblincool/node-prisma-alpine:4.5.0`
- 4.4.0 (96.7 MB) - `docker pull jacoblincool/node-prisma-alpine:4.4.0`
- 4.10.1 (73.3 MB) - `docker pull jacoblincool/node-prisma-alpine:4.10.1`
- 4.10.0 (73.3 MB) - `docker pull jacoblincool/node-prisma-alpine:4.10.0`
<!-- /TAGS -->

## Build Script

You can use the build script to build the image for a specific version of `prisma`.

```sh
# First, install the dependencies
pnpm i

# Then, run the build script
pnpm build

# If you want to build a specific version of prisma, you can run
pnpm build 4.6.0 # this will build the image for prisma 4.6.0
```
