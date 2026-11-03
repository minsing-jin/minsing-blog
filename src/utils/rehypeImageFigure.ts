type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

/**
 * Turns `![alt](src "caption")` written alone in a paragraph into
 * `<figure><img alt><figcaption>caption</figcaption></figure>`.
 * The alt stays a screen-reader description; only an explicit Markdown title
 * becomes a visible caption, so untitled images render as before.
 */
export function rehypeImageFigure() {
  const walk = (node: HastNode) => {
    node.children?.forEach((child, index, siblings) => {
      const content =
        child.type === "element" && child.tagName === "p"
          ? child.children?.filter(c => c.type !== "text" || c.value?.trim())
          : undefined;
      const image = content?.length === 1 ? content[0] : undefined;
      const caption =
        image?.tagName === "img" ? String(image.properties?.title ?? "").trim() : "";

      if (!image || !caption) {
        walk(child);
        return;
      }

      delete image.properties!.title;
      siblings[index] = {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          image,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: caption }],
          },
        ],
      };
    });
  };

  return (tree: HastNode) => walk(tree);
}
