# Financio 💰

A **finance SaaS platform** with 10+ tools for personal and business financial management. Built during Nexus Dev Sprint, it allows users to track income, expenses, and visualize financial health across multiple accounts.  

## 🛠 Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS, ShadCN UI  
- **Backend**: Hono API (Bun runtime)  
- **Database**: PostgreSQL + Drizzle ORM  
- **Auth**: ClerkAuth   

## Key Features
- **Built with [Next.js 14](https://nextjs.org) (App Router):** Utilizes the latest features and performance optimizations of Next.js for a seamless user experience.

- **Fast and Lightweight [Hono API](https://hono.dev/) Web Framework:** Ensures high performance and quick response times for API requests.

- **[Drizzle ORM](https://orm.drizzle.team/):** Interacts with [Neon PostgreSQL](https://neon.tech/) serverless database, providing robust and efficient database management.

- **UI Components:** Developed using Shadcn UI, HeadlessUI, React Icons, TypeScript, and Tailwind CSS for a modern and responsive design.

- **Authentication and Authorization with [Clerk](https://clerk.com/)**: Provides secure and easy-to-use authentication and authorization mechanisms.

- **Beautifully Crafted Dashboard Widgets:** Offers an intuitive and visually appealing dashboard with customizable widgets.

- **Customizable Charts:** Built on top of the Recharts package, enabling limitless customization for data visualization.

- **Mobile-Friendly [TanStack](https://tanstack.com/) Table:** Displays large amounts of data efficiently with pagination, filtering, and sorting options.

- **Framer Motion for Transitions and Hero Section:** Adds smooth animations and transitions for a dynamic user interface.


## 📂 Project Structure
- `app/` → Next.js App Router pages (dashboard, accounts, transactions)  
- `db/` → PostgreSQL schema + Drizzle ORM models  
- `api/` → Hono APIs for finance CRUD  
- `hooks/` → React Query hooks for data fetching  
- `components/` → Reusable UI (charts, forms, tables)  

## ▶️ Setup
```bash
git clone https://github.com/yourusername/financio.git
cd financio
npm install
npm run dev
```
## TechStack
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,bun,tailwind,threejs,ts,postgres,vercel" />
  </a>
</p>

