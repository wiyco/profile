import { MarkdownRenderer } from "@/components/renderers/MarkdownRenderer";

const md = `
# Markdown Examples

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

### Newlines

#### Line breaks

Roses are red,
Violets are blue.

#### Paragraphs

I am a paragraph.

I am another paragraph.

---

### Emphasis

*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
_You **can** combine them_

---

### Lists

#### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

#### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

---

### Mixed Lists

1. First ordered list item
2. Another item
   * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.
- Unordered list
  1. With ordered sub-list
  2. With ordered sub-list
  - And unordered sub-list

---

### Images

Unoptimized image:

![Clownfish](https://res.cloudinary.com/dzxz47rs3/image/upload/v1714952234/wiyco.dev/archive/_thumbnail/diving.webp)

Optimized image:

![Icon](/android-chrome-512x512.png)

---

### Iframes

Youtube video iframe:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Il0S8BoucSA?si=LZoFoRN8OioIBvw5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

YouTube music playlist iframe (title includes "music"):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=RnI5mKs7TqrDWX3E&amp;list=PLZTlYKHxqtEy4C6C1MLS6p00501znqBSg" title="YouTube music player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Youtube short (auto-embed):

\`https://youtube.com/shorts/fWBdoAXYeg4?si=FzCrAF5nWY5ear7V\`

https://youtube.com/shorts/fWBdoAXYeg4?si=FzCrAF5nWY5ear7V

Youtube video (auto-embed):

\`https://www.youtube.com/watch?v=3KtWfp0UopM\`

https://www.youtube.com/watch?v=3KtWfp0UopM

\`https://youtu.be/3KtWfp0UopM?si=-FWWbsXXGNPn6ArE\`

https://youtu.be/3KtWfp0UopM?si=-FWWbsXXGNPn6ArE

---

### Links

[GitHub](https://github.com)

https://github.com

[GitHub](https://github.com)
[YouTube](https://youtu.be/3KtWfp0UopM?si=-FWWbsXXGNPn6ArE)

---

### Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

---

### Inline code

I think you should use an \`<addr>\` element here instead.

---

### Code blocks

\`\`\`js
function foo() {
  console.log("bar");
}
\`\`\`

---

## Below are now supported!! (4/30/2024)

Need to use [remark-gfm](https://github.com/remarkjs/remark-gfm).
Add \`remarkGfm\` to \`remarkPlugins\` prop of \`ReactMarkdown\` component.

\`\`\`js
<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
\`\`\`

---

### Tables

| Syntax | Description |
| ----------- | :-----------: |
| Header | Title |
| Paragraph | Text |

---

### Task Lists

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

### Strikethrough

~~The world is flat.~~

---

### Emoji

:smile:
:+1:

---

### Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.
`;

export default function Page() {
  return (
    <div className="default-wrap mx-auto max-w-screen-md">
      <h1>
        <span>Markdown</span>
      </h1>
      <MarkdownRenderer>{md}</MarkdownRenderer>
    </div>
  );
}
