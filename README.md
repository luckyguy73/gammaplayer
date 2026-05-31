This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# GammaPlayer

A custom Next.js mobile dashboard frontend controller for a Sonos Play:1 speaker running alongside the `node-sonos-http-api` backend bridge on a local network.

## Current Phase: Phase 1 (The MVP Setup)
- [x] Initialized Next.js App with Tailwind CSS & TypeScript
- [x] Configured `.gitignore` for macOS and WebStorm
- [ ] Establish Backend Proxy API Routes
- [ ] Build Mobile-First Dashboard Layout (Main View + Sliding Trays)

## Getting Started

### 1. Prerequisites
Ensure you have Node.js installed on your development machine.

### 2. Environment Setup
Clone the repository and configure your local environment variables.

```bash
# Copy the example environment file to create your local configuration
cp .env.example .env.local

