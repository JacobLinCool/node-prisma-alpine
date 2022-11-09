# Node-Prisma-Alpine Images

This repository provides `node:lts-alpine` + `prisma` images for `amd64` and `arm64` architectures.

You can simply pull the image from [`jacoblincool/node-prisma-alpine:<prisma-version>`](https://hub.docker.com/r/jacoblincool/node-prisma-alpine) ([supported tags](https://hub.docker.com/r/jacoblincool/node-prisma-alpine/tags)).

Check out [Dockerfile](Dockerfile) for more details.

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
