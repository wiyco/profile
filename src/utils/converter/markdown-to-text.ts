import { countGrapheme } from "@/utils/count-grapheme";

/**
 * Part of this code is taken from `remove-markdown` 🐢
 * @link https://github.com/stiang/remove-markdown
 */
function markdownToText(markdown: string, maxLength: number = 250) {
  // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
  markdown = markdown.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, "");

  markdown = markdown
    // Strip list leaders
    // .replace(/^([\s\t]*)([*\-+]|\d+\.)\s+/gm, "$1")
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove setext-style headers
    .replace(/^[=-]{2,}\s*$/g, "")
    // Remove footnotes?
    .replace(/\[\^.+?\](: .*?$)?/g, "")
    .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
    // Remove images
    .replace(/!\[(.*?)\][[(].*?[\])]/g, "$1")
    // Remove inline links (use `$2` to replace with URL)
    .replace(/\[([^\]]*?)\][[(].*?[\])]/g, "$1")
    // Remove blockquotes
    .replace(/^(\n)?\s{0,3}>\s?/gm, "$1")
    // Remove reference-style links?
    .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
    // Remove atx-style headers
    // .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6")
    // Remove * emphasis
    .replace(/([*]+)(\S)(.*?\S)??\1/g, "$2$3")
    // Remove _ emphasis. Unlike *, _ emphasis gets rendered only if
    //   1. Either there is a whitespace character before opening _ and after closing _.
    //   2. Or _ is at the start/end of the string.
    .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5")
    // Remove code blocks
    .replace(/(\n{0,}`{3,}.*)(.*?)\2/gm, "$2")
    // Remove inline code
    .replace(/`(.+?)`/g, "$1")
    // Replace three or more newlines with two newline
    .replace(/\n{3,}/g, "\n\n")
    // Replace a newline with a space if it doesn't have a space before it or after it (i.e. it's not a paragraph)
    //   This cannot exclude lists, code blocks, blockquotes, etc. because they can be in the same line.
    // .replace(/([^\s])\n([^\s])/g, "$1 $2")
    // Remove newlines in a paragraph
    // .replace(/(\S+)\n\s*(\S+)/g, "$1 $2")
    // Replace strike through
    .replace(/~(.*?)~/g, "$1")
    // Replace beginning newlines of URLs with a space
    .replace(/\n{1,}(https?:\/\/)/g, " $1");

  return markdown.substring(0, maxLength) + (countGrapheme(markdown) > maxLength ? "..." : "");
}

export { markdownToText };
