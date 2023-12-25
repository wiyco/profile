import { MarkdownRenderer } from "@/components/renderers/MarkdownRenderer";

const md = `
# Markdown Examples

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

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

![Turtle](https://www.dropbox.com/s/r1iqamfpv4kpo4h/diving-turtle-back.webp?raw=1)

---

### Links

https://github.com - automatic!

[GitHub](https://github.com)

---

### Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

---

### Inline code

I think you should use an
\`<addr>\` element here instead.

---

### Code blocks

\`\`\`js
function Re() {
  console.log("React Markdown");
}
\`\`\`

---

## Below are not supported

Need to use [remark-gfm](https://github.com/remarkjs/remark-gfm).

Add \`remarkGfm\` to \`remarkPlugins\` prop of \`ReactMarkdown\` component.

\`\`\`js
<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
\`\`\`

---

### Tables

| Syntax | Description |
| ----------- | ----------- |
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
