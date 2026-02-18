// scripts/update-buckholt-icons.mjs
import fs from "node:fs";
import path from "node:path";

const ICON_CATALOGUE_URL =
  "https://buck.88mph.design/styles/iconography/icon-catalogue/";

async function main() {
  const res = await fetch(ICON_CATALOGUE_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${ICON_CATALOGUE_URL}: ${res.status}`);
  }

  const html = await res.text();

  const rowMatches = [...html.matchAll(/<tr[\s\S]*?>[\s\S]*?<\/tr>/gi)];
  if (!rowMatches.length) {
    throw new Error("No <tr> rows found. Page structure may have changed.");
  }

  const icons = [];

  for (const match of rowMatches) {
    const row = match[0];

    // Extract icon name
    const nameMatch = row.match(
      /<td[^>]*class=["'][^"']*icon_name[^"']*["'][^>]*>(.*?)<\/td>/i
    );
    if (!nameMatch) continue;

    const name = nameMatch[1]
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();

    // Extract first <i> inside .icon-block
    const iconMatch = row.match(
      /<span[^>]*class=["'][^"']*icon-block[^"']*["'][^>]*>[\s\S]*?<i[^>]*class=["']([^"']+)["'][^>]*>/i
    );
    if (!iconMatch) continue;

    const iconClass = iconMatch[1].toLowerCase().trim();

    icons.push({
      name,
      iconClass,
    });
  }

  // Deduplicate
  const deduped = [];
  const seen = new Set();

  for (const icon of icons) {
    if (seen.has(icon.iconClass)) continue;
    seen.add(icon.iconClass);
    deduped.push(icon);
  }

  // Sort alphabetically
  deduped.sort((a, b) => a.name.localeCompare(b.name));

  const outPath = path.resolve("src/lib/icons/buckholt-icons.ts");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const file = `/* AUTO-GENERATED FILE. DO NOT EDIT.
Generated from: ${ICON_CATALOGUE_URL}
*/

export type BuckholtIcon = {
  name: string;
  iconClass: string;
};

export const BUCKHOLT_ICONS: BuckholtIcon[] = ${JSON.stringify(
    deduped,
    null,
    2
  )} as const;

export const BUCKHOLT_ICON_OPTIONS: string[] = [
  "",
  ...BUCKHOLT_ICONS.map((i) => i.iconClass),
];
`;

  fs.writeFileSync(outPath, file, "utf8");
  console.log(`Wrote ${deduped.length} icons to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
