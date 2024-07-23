/**
 * Count the correct string length of a string with emoji and other multi-byte characters
 * @param string The string to count the grapheme length
 * @returns The number of graphemes in the string
 */
function countGrapheme(string: string): number {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
  return [...segmenter.segment(string)].length;
}

export { countGrapheme };
