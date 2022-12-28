import fs from "fs";
import { list_tags, replace } from "./utils";

const README = __dirname + "/../README.md";

main();

async function main() {
    const tags = await list_tags();
    const content = fs.readFileSync(README, "utf-8");
    const new_content = replace(
        content,
        "tags",
        tags.map((tag) => `- ${tag.name} (${(tag.size / (1 << 20)).toFixed(1)} MB) - \`docker pull jacoblincool/node-prisma-alpine:${tag.name}\``).join("\n")
    );
    fs.writeFileSync(README, new_content);
}
