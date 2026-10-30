# Jatayu Labs

A dark editorial research-lab site for Jatayu Labs, built with Next.js App Router.

## Content

Projects currently live in `lib/projects.ts`. The typed content loader in `lib/content.ts` can read optional `content/projects/*.mdx` and `content/journal/*.mdx` files. Journal frontmatter should include `isPublished: true`, `date`, and an optional `projectSlug`; unpublished entries remain hidden.

Project roadmaps and known limitations should be manually maintained in project content. Do not add fabricated metrics, testimonials, partners, or research outcomes.

## Forms

`app/actions/intake.ts` contains Zod-validated Server Actions for collaborator intake, pilot inquiries, and subscription readiness. The current adapter logs a structured event and returns a progressive-enhancement-safe response. Connect the action to a database or email provider by replacing that adapter without changing the validation contract. Add rate limiting before production delivery.

## Development

Use the package manager declared in `package.json`. The site uses Next.js 16, React 19, Tailwind CSS 4, Zod, and gray-matter. Deploy through the Vercel Publish flow or connect the project to GitHub and deploy from the repository.
