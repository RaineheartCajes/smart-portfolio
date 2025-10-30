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
        <p>I'm <strong>Raineheart Cajes</strong>, a Computer Science graduate and developer with two years of full-stack web development experience. I now specialize in <strong>AI Automation</strong>, architecting solutions using <strong>N8N</strong> for workflow orchestration and <strong>LangChain</strong> to build sophisticated, context-aware AI applications.</p> <p>My focus is on creating intelligent, scalable systems that bridge the gap between robust web platforms and powerful, automated AI agents.</p>      </section>

      <hr className="border-muted" />

      <section className="space-y-4">
  <H2>Skills</H2>
  
  <div className="grid gap-6 md:grid-cols-2">
    <div>
      <h3 className="font-semibold text-lg mb-3">Web Development</h3>
      <ul className="space-y-2">
        <li><strong>Frontend:</strong> React.js, Next.js, React Router 7</li>
        <li><strong>Backend:</strong> Node.js, Express.js, Nest.js</li>
        <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Astra DB</li>
        <li><strong>Version Control:</strong> Git</li>
      </ul>
    </div>
    
    <div>
      <h3 className="font-semibold text-lg mb-3">AI & Automation</h3>
      <ul className="space-y-2">
        <li><strong>Workflow Automation:</strong> N8N</li>
        <li><strong>AI Frameworks:</strong> LangChain, LangGraph</li>
        <li><strong>Specializations:</strong> RAG Systems, Intelligent AI Agents</li>
      </ul>
    </div>
  </div>
</section>

      <hr className="border-muted" />

      

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
    When I'm not coding, you'll often find me on the basketball court, exploring a new hiking trail, or diving into books on personal development and positive psychology. I believe a healthy mind and body are the ultimate foundations for creativity and focus.
</p>
        <Image src={hobby} alt="Mountain nature photo" className="rounded-md" />
      </section>
    </section>
  );
}
