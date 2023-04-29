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
  ...
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
  ...
}
```

### `package.json`

```json
"scripts": {
  ...
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

```javascript
...
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
...
```

## Color Theme

This project can switch the color themes by [next-theme](https://www.npmjs.com/package/next-themes) and uses the [color palette of Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) as the theme colors.

### `tailwind.config.js`

```javascript
module.exports = {
  ...
  darkMode: "class",
}
```

### `_app.tsx`

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
  ...
</ThemeProvider>
```

### Color palette of theme

```SCSS
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

This project uses [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) to render pages and also uses [Dynamic Routes](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) as generate the URI.

You can find more details on [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview).

## Supabase

This project uses [Supabase](https://supabase.com/) for DB.

To get the data, uses [Database Functions](https://supabase.com/docs/guides/database/functions) and calls with `rpc()` method.

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
> Also limited to `15` rows per an access.

Here's the function of `getposts`.

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
  select posts.id, posts.thumbnail, post.created_at, post.updated_at, post.title, post.body, post.user_id, users.name as user_name, users.avatar from posts inner join post on posts.id = post.id left outer join users on post.user_id = users.id order by updated_at desc
$$;
```

### `getpost`

The `getpost` returns a specific post data. You can get the data by passing a parameter of `slug`.

> **Note**
>
> `post_id` like `blog/1`, `blog/2`

Here's the function of `getpost`.

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
  avatar text
)
language sql
as $$
  select post.id, post.created_at, post.updated_at, post.title, post.body, post.user_id, users.name as user_name, users.avatar from post left outer join users on post.user_id = users.id where post.id = slug
$$;
```

You can get the JSON data using with [API routes](https://nextjs.org/docs/api-routes/introduction).

You can get the posts data from [localhost:3000/api/v1/posts](localhost:3000/api/v1/posts). Also you can get the single page from [localhost:3000/api/v1/post?s=1](localhost:3000/api/v1/post?s=1).

> **Note**
>
> `s=[slug]`

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
