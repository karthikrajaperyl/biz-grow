
# BizGrow Digital - Agency Platform

BizGrow Digital is a modern agency platform designed to help local businesses (Restaurants, Salons, Retail, etc.) transform their digital presence and grow their customer base.

## 🚀 Features

- **AI-Powered Digital Audit**: Instant, personalized growth reports using Google Gemini 2.5 Flash.
- **Service Showcases**: Detailed sections for Web Development, SEO, Video Design, and Tech Solutions.
- **Industry Solutions**: Tailored strategies for 7+ local business sectors.
- **Success Stories**: A blog platform to share customer transformations and marketing tips.
- **WhatsApp Integration**: Direct-to-consultant communication for high conversion.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **AI Engine**: [Genkit](https://github.com/firebase/genkit) with Gemini 2.5 Flash
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Firebase Firestore](https://firebase.google.com/products/firestore)

## 📂 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/ai`: Genkit flow definitions and prompt engineering.
- `src/components`: Reusable UI components (ShadCN and custom).
- `src/firebase`: Firebase configuration and client-side hooks.
- `docs/backend.json`: Data schema and Firestore structure blueprint.

## 🤖 AI Capabilities

The platform uses a dedicated Genkit flow (`digitalAuditReportFlow`) to analyze business input and generate a structured audit report. This report includes:
- Executive Summary
- Strength Analysis
- Improvement Recommendations
- Product Mapping (Matching business needs to agency services)

## 📝 License

This project is built as an MVP for BizGrow Digital. All rights reserved.
