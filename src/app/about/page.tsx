import hobby from "@/assets/hobby.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Raineheart Cajes and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is <strong>Raineheart Cajes</strong>, and I am a{" "}
          <strong>Bachelor of Science in Computer Science</strong> graduate from
          the Philippines. I have almost <strong>two years</strong> of
          experience at NovaTechset LTD. as a{" "}
          <strong>Full-Stack Web Developer</strong>, and nearly{" "}
          <strong>one year</strong> at Jetvoy as a{" "}
          <strong>Web3 and AI Developer</strong>.
        </p>
        <p>
          I&apos;m passionate about building modern, scalable, and innovative
          solutions — from web applications to blockchain-based platforms and
          AI-powered systems.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          On the <strong>frontend</strong>, I specialize in{" "}
          <strong>React.js</strong> and <strong>Next.js</strong>. On the{" "}
          <strong>backend</strong>, I work with <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>Nest.js</strong>.
        </p>
        <p>
          In <strong>Web3</strong> development, I use <strong>Web3.js</strong>{" "}
          and the <strong>Solana blockchain</strong>. In{" "}
          <strong>AI development</strong>, I leverage <strong>LangChain</strong>{" "}
          and <strong>LangGraph</strong> to build <strong>RAG systems</strong>{" "}
          and intelligent AI agents.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Projects</H2>
        <p>
          Here are some of the projects I’ve worked on. Due to confidentiality
          agreements, certain projects developed for clients in India cannot be
          disclosed.
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a>Angel&apos;s Pizza</a> – A full-stack, multi-tenant pizza
            ordering and delivery management ecosystem with web and mobile
            platforms.
          </li>
          <li>
            <a>nTrac</a> – A real-time work monitoring system designed to track
            productivity and operational efficiency.
          </li>
          <li>
            <a>Smart Portfolio</a> – An AI-powered portfolio platform that
            dynamically generates personalized content and showcases work.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Beyond coding, I’m passionate about staying active and living a
          balanced life. I enjoy playing basketball, nature exploring, and
          exploring topics in personal development, nutrition, and positive
          psychology.
        </p>
        <Image src={hobby} alt="Mountain nature photo" className="rounded-md" />
      </section>
    </section>
  );
}
