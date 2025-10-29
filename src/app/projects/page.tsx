
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Learn more about Raineheart Cajes projects.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Projects</H1>

      <section className="space-y-3">
        <H2>Web Apps</H2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a href="https://angels-pizza.com" className="underline">
              Angel's Pizza
            </a>{" "}
            – A full-stack, multi-tenant pizza ordering and delivery management ecosystem with web and mobile platforms.
          </li>
          <li>
            <a
              href="https://dieselcoin.io/en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Diesel Coin
            </a>{" "}
            – A meme coin website that sells DSLCN token in Solana blockchain
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>AI Web Apps</H2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a
              href="https://gen-ai-theta-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              AI Chatbot
            </a>{" "}
            – Domain Q&amp;A assistant powered by RAG (LangChain/LangGraph) with streaming responses.
          </li>
          <li>
            <a href="/" className="underline">
              Smart Portfolio
            </a>{" "}
            – A modern portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring an integrated AI chat.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>AI Automation</H2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Email Summarizer Agent
            </a>{" "}
            – Summarizes inbound emails and drafts suggested replies.
          </li>
          <li>
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Social Media Agent
            </a>{" "}
            – Generates content ideas, writes captions, and schedules posts.
          </li>
          <li>
            <a
             
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Data Scraper Agent
            </a>{" "}
            – Crawls sites and extracts structured data for analysis.
          </li>
        </ul>
      </section>
    </section>
  );
}
