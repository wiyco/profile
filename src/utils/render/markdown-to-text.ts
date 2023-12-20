/**
 * This code is taken from `remove-markdown` 🐢
 * @link https://github.com/stiang/remove-markdown
 */
function markdownToText(markdown: string, maxLength: number = 200) {
  // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
  markdown = markdown.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, "");

  // Remove HTML tags
  markdown = markdown
    .replace(/<[^>]*>/g, "")
    // Remove setext-style headers
    .replace(/^[=-]{2,}\s*$/g, "")
    // Remove footnotes?
    .replace(/\[\^.+?\](: .*?$)?/g, "")
    .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
    // Remove images
    .replace(/!\[(.*?)\][[(].*?[\])]/g, "$1")
    // Remove inline links
    .replace(/\[([^\]]*?)\][[(].*?[\])]/g, "$1")
    // Remove blockquotes
    .replace(/^(\n)?\s{0,3}>\s?/gm, "$1")
    // Remove reference-style links?
    .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
    // Remove atx-style headers
    .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6")
    // Remove * emphasis
    .replace(/([*]+)(\S)(.*?\S)??\1/g, "$2$3")
    // Remove _ emphasis. Unlike *, _ emphasis gets rendered only if
    //   1. Either there is a whitespace character before opening _ and after closing _.
    //   2. Or _ is at the start/end of the string.
    .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5")
    // Remove code blocks
    .replace(/(`{3,})(.*?)\1/gm, "$2")
    // Remove inline code
    .replace(/`(.+?)`/g, "$1")
    // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
    .replace(/\n{2,}/g, "\n\n")
    // Remove newlines in a paragraph
    .replace(/(\S+)\n\s*(\S+)/g, "$1 $2")
    // Replace strike through
    .replace(/~(.*?)~/g, "$1");

  // Replace a newline with a space
  markdown = markdown.replace(/\n/g, " ");

  return markdown.slice(0, maxLength) + (markdown.length > maxLength ? "..." : "");
}

export { markdownToText };
