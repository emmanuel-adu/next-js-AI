This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma

Prisma is an ORM for database, basically and SDK for you to interact with your db so you don't have to write raw SQL queries.

- prisma client is essentially a sdk
- every time we run `npx prisma db push` new sdk is generated.
  - also happens when we run `npx prisma generate`
- format prisma `npx prisma format`
- Look at database `npx prisma studio`

## General Next

- layout is great for sharing page design across components

## AI

1. Turn questions into a vector
   1. A vector is just an array of points
   2. Amount of numbers in the vector is called dimensions
2. Use AI to take content --> convert to vectors or embeddings (collection of vectors) --> store vectors inside vector database
   1. When you ask a question if follows similar flow: question --> vector --> vector database
3. AI will determine which vector points are closer to each other
4. We will then pull the closer points as context to our LLM

[How word embeddings work](https://openai.com/blog/introducing-text-and-code-embeddings)