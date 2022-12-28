export async function list_tags(): Promise<{ name: string; size: number; active: boolean }[]> {
    const data: { results: { name: string; full_size: number; tag_status: string }[] } = await fetch(
        "https://hub.docker.com/v2/namespaces/jacoblincool/repositories/node-prisma-alpine/tags?page_size=100&ordering=name"
    ).then((res) => res.json());

    return data.results.map(({ name, full_size, tag_status }) => ({ name, size: full_size, active: tag_status === "active" }));
}

export function replace(content: string, anchor: string, replacement: string): string {
    const ANCHOR = anchor.toUpperCase();
    const anchor_regex = new RegExp(`<!-- ${ANCHOR} -->.*<!-- /${ANCHOR} -->`, "sgi");
    return content.replace(anchor_regex, `<!-- ${ANCHOR} -->\n${replacement}\n<!-- /${ANCHOR} -->`);
}
