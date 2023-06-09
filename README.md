# PROFILE

A profile site w/ Vercel & Supabase.

## 1.

[Next.js starter](https://nextjs.org/docs/api-reference/create-next-app).

```bash
npx create-next-app
```

```
# v9.5.0
project name >> [projectname]
TypeScript? >> yes
ESLint? >> no
Tailwind CSS? >> yes
`src/` dir >> yes
`app/` dir >> no
import alias >> @/*
```

## 2.

```bash
cd [projectname]
npm i --save-dev [package] [package] ...
```

- eslint
- stylelint
- stylelint-scss
- stylelint-config-standard
- stylelint-config-standard-scss
- stylelint-config-recess-order
- prettier
- eslint-config-prettier
- eslint-config-next

> **Note**
>
> ```bash
> npm run dev
> ```
>
> Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## 3.

Make files.

- `prettier.config.js`
- `stylelint.config.js`
- `.eslintrc.json`
- `.vscode/settings.json`

Edit files.

- `tsconfig.json`
- `package.json`

### `tsconfig.json`

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### `package.json`

```json
"scripts": {
  "export": "next build && next export",
  "eslint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix",
  "stylelint:fix": "stylelint src/**/*.{css,scss} --fix",
  "prettier:fix": "prettier --check --write 'src/**/*.{js,jsx,ts,tsx,css,scss,md,mdx}'",
  "format": "npm run eslint:fix && npm run stylelint:fix && npm run prettier:fix"
}
```

## VS Code Extentions

- [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

## Tailwind CSS

`h-screen` doesn't work correct on iOS.

You need to modify `tailwind.config.js`. (This is effective on iOS 15.4 and later)

```js
module.exports = {
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
};
```

## Color Theme

This project can switch the color themes by [next-theme](https://www.npmjs.com/package/next-themes) and uses the [color palette of Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) as the theme colors.

### `tailwind.config.js`

```js
module.exports = {
  darkMode: "class",
};
```

### `_app.tsx`

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
  {children}
</ThemeProvider>
```

### Color palette of theme

```scss
light {
  backgroud-color: --bg-zinc-50;
}
dark {
  backgroud-color: --bg-zinc-900;
  text-color: --text-white;
}
footer {
  backgroud-color: --bg-zinc-800;
  text-color: --text-white;
}
```

```html
<element className="bg-zinc-50 dark:bg-zinc-900 dark:text-white" />
```

## Next.JS

This project uses [SSR](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) to render pages. Although I wanted to use [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) and [Dynamic Routes](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) as generate a URI but `Vercel`'s caching works too strong and won't let to [`revalidate`](https://nextjs.org/docs/pages/api-reference/functions/get-static-props#revalidate).

It is not smart that render every time, so I used [`Cache-Control`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr) to reduce wait times of loading.

```js
context.res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=300");
```

> **Note**
>
> Let me know if you have a better way. As the `blog` page have more content, I'll eventually have to consider another way for optimum performance.

You can check more details on [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview).

## Supabase

This project uses [Supabase](https://supabase.com/) as DB.

Uses [Database Functions](https://supabase.com/docs/guides/database/functions) and also clients call with the `rpc()` method.

DB has 3 tables.

- `posts`
- `post`
- `users`

Here's an ER diagram.

![ERD](https://www.dropbox.com/s/ectb0kjn8gcnu8j/profile-supabase-erd.jpg?raw=1)

### `posts`

```sql
create table posts (
  id int4 not null primary key references post(id) on delete cascade on update cascade,
  thumbnail text not null default ''
)
```

### `post`

```sql
create table post (
  id int4 not null generated always as identity primary key,
  title text not null default '',
  body text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id int4 default null references users(id)
)
```

### `users`

```sql
create table users (
  id int4 not null generated always as identity primary key,
  name text not null default '',
  avatar uuid not null default uuid_generate_v4(),
  created_at timestamptz not null default now()
)
```

## Database Functions

Created these functions.

- `getposts`
- `getpost`

### `getposts`

The `getposts` returns all of posts data.

> **Note**
>
> Also limited to `9` rows per an access.

Here's a function of `getposts`.

```sql
create or replace function public.getposts()
returns table (
  id int4,
  thumbnail text,
  created_at timestamptz,
  updated_at timestamptz,
  title text,
  body text,
  user_id int4,
  user_name text,
  avatar uuid
)
language sql
as $$
  select posts.id, posts.thumbnail, post.created_at, post.updated_at, post.title, post.body, post.user_id, users.name as user_name, users.avatar from posts inner join post on posts.id = post.id left outer join users on post.user_id = users.id order by created_at desc
$$;
```

### `getpost`

The `getpost` returns a specific post data. You can get a post data by passing a parameter of `slug`.

> **Note**
>
> `slug` like `post_id` as `/1`, `/2`

Here's a function of `getpost`.

```sql
create or replace function public.getpost(slug int4)
returns table (
  id int4,
  created_at timestamptz,
  updated_at timestamptz,
  title text,
  body text,
  user_id int4,
  user_name text,
  avatar uuid
)
language sql
as $$
  select post.id, post.created_at, post.updated_at, post.title, post.body, post.user_id, users.name as user_name, users.avatar from post left outer join users on post.user_id = users.id where post.id = slug
$$;
```

You can get JSON data as using by [API routes](https://nextjs.org/docs/api-routes/introduction).

The posts data on [localhost:3000/api/v1/posts](http://localhost:3000/api/v1/posts).

A single page on [localhost:3000/api/v1/post?s=1](http://localhost:3000/api/v1/post?s=1).

> **Note**
>
> `s=[slug]`

## Avatar

To get `avatar` images from an external URL, you need to modify `next.config.js`.

Here's an example values.

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
```

Check more details on [next/image Un-configured Host](https://nextjs.org/docs/messages/next-image-unconfigured-host).

## Icons

All of the icons which can get from `npm` as `packages` have some issues. In [`iconoir`](https://github.com/iconoir-icons/iconoir/tree/main/packages/iconoir-react), all icons were loaded when `import` even one of the icons.

For more details, check the [profile/issues#3](https://github.com/wiyco/profile/issues/3).

To resolve this, I used [`@svgr/webpack`](https://react-svgr.com/docs/options/). This solved the [profile/issues#3](https://github.com/wiyco/profile/issues/3) and reduced modules that `avg. 1200` to `avg. 200`.

### `next.config.js`

```js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: "1.5em", // default size of iconoir is 1.5em
            svgo: false,
            replaceAttrValues: {
              "#000000": "{props.color}",
              black: "{props.color}",
              "#FFFFFF": "{props.color}",
              white: "{props.color}",
            },
          },
        },
      ],
    });
    return config;
  },
};
```

## Pagination

This project uses `query` params based pagination.

When you access the `blog` page, [`next/router`](https://nextjs.org/docs/pages/api-reference/functions/use-router) will redirect with page number like `/blog?p=1`. If you access with page number like `/blog?p=4`, you can see the page `No.4` of `blog` page.

> **Note**
>
> As you might know you can change the number of cards per page with `Environment Variables`.
>
> ```
> NEXT_PUBLIC_SUPABASE_LIMIT=6
> ```
>
> The above value will display 6 cards per page.

You can see the `test` page on [localhost:3000/blog/test](http://localhost:3000/blog/test).

> **Note**
>
> `p=[pageNumber]`

## Markdown

This project uses [Markdown](https://www.markdownguide.org/basic-syntax/) for stylizing page.

Using markdown can easily stylize elements. I used [`react-markdown`](https://github.com/remarkjs/react-markdown) and [`rehype-raw`](https://github.com/rehypejs/rehype-raw) to render markdown & parse HTMLs.

To maximize performance, some elements are replaced to Next's components.

```tsx
<ReactMarkdown
  className="markdown-wrap"
  rehypePlugins={[rehypeRaw]}
  components={{
    h1: "h2",
    h2: "h3",
    h3: "h4",
    h4: "h5",
    a: (props) => LinkBlock(props),
    img: (props) => ImageBlock(props),
    iframe: (props) => IframeBlock(props),
  }}
>
  {children}
</ReactMarkdown>
```

```tsx
function LinkBlock(props: any): ReactElement {
  if (props.href.match("http")) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  } else {
    return <Link href={props.href}>{props.children}</Link>;
  }
}
```

```tsx
function ImageBlock(props: any): ReactElement {
  return (
    <span className="flex items-center justify-center">
      <Image
        className="w-full md:w-4/5 h-full"
        src={props.src}
        alt={props.alt}
        width={256}
        height={256}
        sizes="100vw"
        priority
      />
    </span>
  );
}
```

```tsx
function IframeBlock(props: any): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <iframe
        width={props.width}
        height={props.height}
        src={props.src}
        title={props.title}
        allow={props.allow}
        allowFullScreen={props.allowfullscreen}
      ></iframe>
    </div>
  );
}
```

Check more details of supported markdown styles on [localhost:3000/markdown](http://localhost:3000/markdown).

> **Note**
>
> I'll update the markdown styles as needed.

### Card style

When you use markdown for stylizing page, syntax characters of markdown will be contain in descriptions of `card` and `meta`.

To resolve this, the best way is to remove markdown syntax characters.

I used regex to remove these characters.

Here's an example.

```js
post.body
  .replace(
    /(?<!.)[ ]*#+[ ]|(?<![0-9a-zA-Z= ])\[|\]\((http|\/).*\)|(?<!.)[ ]*-[ ]|(?<![0-9a-zA-Z ])\*{2}|\*{2}(?![0-9a-zA-Z ])|`+|<iframe.*>/gm,
    ""
  )
  .replaceAll("\n", " ");
```

---

## Instruction

### src/pages/

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/` directory is mapped to `/*`. Files in this directory are treated as [React pages](https://nextjs.org/docs/routing/introduction).

### src/pages/api/

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
