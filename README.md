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

## 3.

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## 4.

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
    "@/*": ["src/*"]
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
