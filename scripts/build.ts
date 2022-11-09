import { exec } from "node:child_process";

const PACAKGE = "https://registry.npmjs.org/prisma/latest";
const IMAGE_BASE = "https://hub.docker.com/v2/namespaces/jacoblincool/repositories/node-prisma-alpine/tags/";

const BUILD_COMMAND = (version: string) =>
    `docker buildx build --build-arg PRISMA_VERSION=${version} --platform linux/amd64,linux/arm64 -t jacoblincool/node-prisma-alpine:${version} --push .`;

const VERSION = process.argv[2];

main();

async function main() {
    const version: string = await fetch(PACAKGE)
        .then((res) => res.json())
        .then((json) => json.version);
    console.log(`Latest Prisma Version: ${version}`);

    const desired_ver = VERSION || version;
    const has_tag = await fetch(`${IMAGE_BASE}${desired_ver}`, {
        method: "HEAD",
    }).then((res) => res.ok);
    console.log(`Has Tag ${desired_ver}: ${has_tag}`);

    if (!has_tag) {
        console.log(`Building ${desired_ver} ...`);
        const { stdout, stderr } = exec(BUILD_COMMAND(desired_ver));
        stdout?.pipe(process.stdout);
        stderr?.pipe(process.stderr);
    }
}
