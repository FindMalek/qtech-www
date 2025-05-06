import Image from "next/image"
import { motion } from "motion/react"

import { SiteConfig } from "@/types"

import { MarketingFirstBentoAnimation } from "@/components/app/marketing-first-bento-animation"
import { MarketingFourthBentoAnimation } from "@/components/app/marketing-fourth-bento-animation"
import { MarketingSecondBentoAnimation } from "@/components/app/marketing-second-bento-animation"
import { MarketingThirdBentoAnimation } from "@/components/app/marketing-third-bento-animation"
import { Highlight } from "@/components/shared/highlight"
import { Icons } from "@/components/shared/icons"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Globe } from "@/components/ui/globe"
import { SimpleGrid } from "@/components/ui/simple-grid"

export const siteConfig: SiteConfig = {
  name: "QTech",
  description:
    "Cutting-edge AI solutions for businesses. Empower your workflow with private AI knowledge bases, seamless integrations, and smart automation tools.",
  url: "https://www.qtech-company.com",
  images: {
    default: "https://www.qtech-company.com/og.png",
    notFound: "https://www.qtech-company.com/not-found.png",
    logo: "https://www.qtech-company.com/logo.jpg",
  },
  links: {
    twitter: "https://twitter.com/qtech",
    github: "https://github.com/qtech",
    facebook: "https://facebook.com/qtechAI",
    instagram: "https://instagram.com/qtech",
    linkedin: "https://linkedin.com/company/qtech",
    contact: "https://www.qtech-company.com/contact",
    demo: "https://www.qtech-company.com/demo",
    meet: "https://calendly.com/nicholas-torabi-qtech-company",
  },
  author: {
    name: "QTech",
    url: "https://www.qtech-company.com/",
    email: "nicholas.torabi@qtech-company.com",
    github: "https://github.com/qtech",
  },
  keywords: [
    "AI Solutions",
    "Enterprise AI",
    "Knowledge Bases",
    "AI Agents",
    "Business Intelligence",
    "Workflow Automation",
    "AI Integration",
    "Machine Learning",
    "Data Analytics",
    "Digital Transformation",
    "Private AI",
    "Secure AI",
    "AI Assistant",
    "Business Automation",
    "Smart Workflows",
    "AI-Driven Insights",
    "Real-time Collaboration",
    "Enterprise Software",
    "SaaS",
    "MobX",
    "Next.js",
    "React",
    "TypeScript",
    "T3 Stack",
  ],
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Pricing", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: <Icons.layer />,
    badge: "Enterprise AI-Solutions",
    title: "Internal AI for Your Business»",
    description:
      "QTech delivers AI solutions that understand and act on your internal data, tools, and processes—without compromising on privacy or security.",
    cta: {
      primary: {
        text: "Get a Demo",
        href: "https://calendly.com/nicholas-torabi-qtech-company",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Leckina",
        logo: (
          <Image
            src="/companies/leckina.png"
            alt="Leckina"
            width={100}
            height={100}
            className="brightness-0 grayscale dark:invert"
          />
        ),
      },
      {
        id: 2,
        name: "AnyRM",
        logo: (
          <Image
            src="/companies/any-rm.png"
            alt="AnyRM"
            width={100}
            height={100}
            className="brightness-0 grayscale dark:invert"
          />
        ),
      },
      {
        id: 3,
        name: "Inlisol",
        logo: (
          <Image
            src="/companies/inlisol.png"
            alt="Inlisol"
            width={100}
            height={100}
            className="brightness-0 dark:invert"
          />
        ),
      },
      {
        id: 4,
        name: "Caucasus",
        logo: (
          <Image
            src="/companies/caucasus.jpeg"
            alt="Caucasus"
            width={100}
            height={100}
            className="grayscale dark:invert"
          />
        ),
      },
      {
        id: 5,
        name: "Atleis",
        logo: (
          <Image
            src="/companies/atleis.png"
            alt="Atleis"
            width={100}
            height={100}
            className="grayscale dark:invert"
          />
        ),
      },
      {
        id: 6,
        name: "OnAir Jets",
        logo: (
          <Image
            src="/companies/on-air-jets.jpeg"
            alt="OnAir Jets"
            width={100}
            height={100}
            className="grayscale dark:invert"
          />
        ),
      },
    ],
  },
  bentoSection: {
    title: "Let Your AI understand and act on your Data",
    description:
      "From documents to tools, it learns and supports your workflows, while speaking your language—securely and intelligently.",
    items: [
      {
        id: 1,
        content: <MarketingFirstBentoAnimation />,
        title: "Knowledge Base & Question Answering",
        description:
          "No more digging through folders or pinging colleagues for info.",
      },
      {
        id: 2,
        content: <MarketingSecondBentoAnimation />,
        title: "Seamless Integrations",
        description:
          "Your AI isn't another siloed tool — it connects to the systems you already use. From CRM and ERP systems to Slack, Teams, Notion, Gmail, SharePoint, and more — we integrate securely and cleanly.",
      },
      {
        id: 3,
        content: <MarketingThirdBentoAnimation startAnimationDelay={0.2} />,
        title: "Complex Data, Simplified",
        description:
          "Our internal AI breaks down complex data by detecting patterns, segmenting key elements, and turning them into clear, actionable insights.",
      },
      {
        id: 4,
        content: <MarketingFourthBentoAnimation once={false} />,
        title: "Workflow Automation",
        description:
          "Automate repetitive processes with QTech's intelligent AI. Streamline compliance reporting, schedule email updates, and auto-fill forms to free your team for strategic priorities.",
      },
    ],
  },
  quoteSection: {
    quote:
      "QTech has completely changed how we work. Our team gets instant answers, proposals are generated automatically, and it all connects with our tools. It's like having an extra team member who's always up to speed.",
    author: {
      name: "Amin T.",
      role: "Co-Founder at Inlisol",
      image: "/companies/inlisol.png",
    },
  },
  featureSection: {
    title: "Powerful. Secure. Intelligent.",
    description: "Why QTech Instead of a Generic, Potentially Unsafe GPT.",
    items: [
      {
        id: 1,
        title: "Fully Private & Secure",
        content:
          "Unlike generic GPT tools that run in the cloud and store your data externally, our technology runs in your environment or private EU-based cloud. Your data stays 100% yours — no leaks, no surprises.",
        image:
          "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Built for Europe",
        content:
          " We're GDPR-compliant by design, with all data processed and stored in Europe. Born in Europe. Built for European standards.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Deeply Integrated & Customised",
        content:
          "Generic GPTs can't access your tools or understand your workflows. An internal AI connects seamlessly to your data sources—like CRM, ERP, or emails—is multimodal (handling text, PDFs, etc.), and adapts to the specific needs of each department.",
        image:
          "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Handles Massive Data Loads",
        content:
          "While ChatGPT might struggle with a few files, our internal AI can process millions of documents — cleanly, accurately, and contextually.",
        image:
          "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=2039&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Answers & Executes",
        content:
          "Generic GPTs just reply. Our internal AI sends emails, generates reports, creates proposal, updates systems — real execution, not just conversation.",
        image:
          "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=2039&auto=format&fit=crop",
      },
    ],
  },
  growthSection: {
    title: "Built for Secure Growth",
    description:
      "Where advanced security meets seamless scalability—designed to protect your data and empower your growth.",
    items: [
      {
        id: 1,
        content: (
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-xl  transition-all duration-300">
            {/* Simple grid background */}
            <SimpleGrid className="absolute inset-0 opacity-30" />

            {/* Simple connecting lines */}
            <svg
              className="absolute inset-0 z-10 opacity-50"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <path
                d="M50,30 L50,70"
                stroke="rgba(200, 200, 200, 1)"
                strokeWidth="0.5"
                strokeDasharray="4,2"
              />
              <path
                d="M30,50 L70,50"
                stroke="rgba(200, 200, 200, 1)"
                strokeWidth="0.5"
                strokeDasharray="4,2"
              />
              <path
                d="M35,35 L65,65"
                stroke="rgba(200, 200, 200, 1)"
                strokeWidth="0.5"
                strokeDasharray="4,2"
              />
              <path
                d="M35,65 L65,35"
                stroke="rgba(200, 200, 200, 1)"
                strokeWidth="0.5"
                strokeDasharray="4,2"
              />
            </svg>

            {/* Central icon */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <motion.div
                className="bg-secondary-foreground/80 flex size-16 items-center justify-center rounded-full p-4 shadow-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Icons.server className="text-secondary size-full" />
              </motion.div>

              {/* Subtle pulse effect */}
              <motion.div
                className="bg-secondary-foreground/50 absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Subtle corner accent */}
            <div className="bg-secondary-foreground/10 absolute -right-8 -top-8 size-16 rounded-full blur-xl" />

            {/* Simple overlay gradient */}
            <div className="from-secondary/50 absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>
        ),

        title: "Why Internal AI?",
        description:
          "Unlike generic third-party tools, our in-house AI is built around your specific data, workflows, and goals. It ensures deeper understanding, tighter integration, and smarter results—faster, safer, and fully aligned with your business logic.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg -translate-y-20 items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)]">
            <Globe className="top-28" />
          </div>
        ),

        title: "Smart Task Execution",
        description:
          "Beyond answering — our internal AI acts. It doesn't just give you insights — it sends the email, drafts the proposal, logs the task, creates the report.",
      },
    ],
  },
  pricing: {
    title: "Simple Pricing for Every Business",
    description: "Choose the plan that fits your organization's needs.",
    pricingItems: [
      {
        name: "Basic",
        price: "1499€",
        features: [
          "Access to a dedicated, private GPT with custom context",
          "Cloud solution for a dedicated ChatBot",
          "Multiple individual files, CSV, Docx, EPUB, JSON, JSONLines, Notion markdown export.",
          "GitHub, Google Cloud Storage, Notion API, S3 File, PDFLoader, PPTX, TextLoader",
          "Limited document processing capabilities",
          "Standard support",
        ],
        description:
          "Ideal for startups and small teams ready to build secure AI tools with a dedicated cloud-based ChatBot solution.",
        buttonText: "Get started",
        buttonColor: "bg-muted-foreground/20 text-secondary-foreground",
        isPopular: true,
      },

      {
        name: "Completely Customizable",
        price: "Custom",
        features: [
          "Custom-built, fully autonomous AI agents",
          "Hosted in your enterprise environment or EU cloud",
          "Process thousands of documents with high accuracy",
          "Full integration with internal ERP and CRM systems",
          "Automated tasks: send emails, read data, save data, etc.",
          "Enterprise-grade security, GDPR-compliant",
          "Premium support & onboarding",
        ],
        description:
          "Fully customized solutions for mid-size to large organizations, offering a secure and private AI agent capable of autonomous task execution.",
        buttonText: "Speak with us",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Umberto T.",
      role: "Co-Founder at Atleis",
      img: "/companies/atleis.png",
      description: (
        <p>
          We needed a solution that could understand all of our property
          listings, contracts, and client interactions, as well as make it
          easily accessible to our sales agents. QTech delivered an AI agent
          that
          <Highlight>
            not only answers questions about listings and terms but also
            prepares proposal emails and assists in onboarding new agents.
          </Highlight>{" "}
          It feels like it understands our business from the inside, and it
          safely handles our data, which is critical in real estate.
        </p>
      ),
    },
    {
      id: "2",
      name: "Ramon L.",
      role: "CEO at OnAir Jets",
      img: "/companies/on-air-jets.png",
      description: (
        <p>
          Working with QTech was a game-changer. They built us a private AI
          system that could process past bookings, client preferences, and
          aircraft availability.
          <Highlight>
            Then it could automatically generate tailored flight proposals for
            our clients.
          </Highlight>{" "}
          It felt like adding a 24/7 operations assistant that never makes
          mistakes. Everything was integrated into our CRM and email tools, and
          the entire system is completely secure.
        </p>
      ),
    },
    {
      id: "3",
      name: "Amin T.",
      role: "Co-Founder at Inlisol",
      img: "/companies/inlisol.png",
      description: (
        <p>
          QTech has completely changed how we work. Our team gets instant
          answers, proposals are generated automatically, and it all connects
          with our tools.
          <Highlight>
            It's like having an extra team member who's always up to speed.
          </Highlight>
        </p>
      ),
    },
    {
      id: "4",
      name: "Umberto T.",
      role: "Co-Founder at Atleis",
      img: "/companies/atleis.png",
      description: (
        <p>
          We needed a solution that could understand all of our property
          listings, contracts, and client interactions, as well as make it
          easily accessible to our sales agents. QTech delivered an AI agent
          that
          <Highlight>
            not only answers questions about listings and terms but also
            prepares proposal emails and assists in onboarding new agents.
          </Highlight>{" "}
          It feels like it understands our business from the inside, and it
          safely handles our data, which is critical in real estate.
        </p>
      ),
    },
    {
      id: "5",
      name: "Ramon L.",
      role: "CEO at OnAir Jets",
      img: "/companies/on-air-jets.png",
      description: (
        <p>
          Working with QTech was a game-changer. They built us a private AI
          system that could process past bookings, client preferences, and
          aircraft availability.
          <Highlight>
            Then it could automatically generate tailored flight proposals for
            our clients.
          </Highlight>{" "}
          It felt like adding a 24/7 operations assistant that never makes
          mistakes. Everything was integrated into our CRM and email tools, and
          the entire system is completely secure.
        </p>
      ),
    },
    {
      id: "6",
      name: "Amin T.",
      role: "Co-Founder at Inlisol",
      img: "/companies/inlisol.png",
      description: (
        <p>
          QTech has completely changed how we work. Our team gets instant
          answers, proposals are generated automatically, and it all connects
          with our tools.
          <Highlight>
            It's like having an extra team member who's always up to speed.
          </Highlight>
        </p>
      ),
    },
    {
      id: "7",
      name: "Umberto T.",
      role: "Co-Founder at Atleis",
      img: "/companies/atleis.png",
      description: (
        <p>
          We needed a solution that could understand all of our property
          listings, contracts, and client interactions, as well as make it
          easily accessible to our sales agents. QTech delivered an AI agent
          that
          <Highlight>
            not only answers questions about listings and terms but also
            prepares proposal emails and assists in onboarding new agents.
          </Highlight>{" "}
          It feels like it understands our business from the inside, and it
          safely handles our data, which is critical in real estate.
        </p>
      ),
    },
    {
      id: "8",
      name: "Ramon L.",
      role: "CEO at OnAir Jets",
      img: "/companies/on-air-jets.png",
      description: (
        <p>
          Working with QTech was a game-changer. They built us a private AI
          system that could process past bookings, client preferences, and
          aircraft availability.
          <Highlight>
            Then it could automatically generate tailored flight proposals for
            our clients.
          </Highlight>{" "}
          It felt like adding a 24/7 operations assistant that never makes
          mistakes. Everything was integrated into our CRM and email tools, and
          the entire system is completely secure.
        </p>
      ),
    },
    {
      id: "9",
      name: "Amin T.",
      role: "Co-Founder at Inlisol",
      img: "/companies/inlisol.png",
      description: (
        <p>
          QTech has completely changed how we work. Our team gets instant
          answers, proposals are generated automatically, and it all connects
          with our tools.
          <Highlight>
            It's like having an extra team member who's always up to speed.
          </Highlight>
        </p>
      ),
    },
  ],
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, name: "About", href: "/company/about" },
        // { id: 2, name: "Story", href: "/company/story" },
        // { id: 3, name: "Team", href: "/company/team" },
      ],
    },
    {
      title: "Legal",
      links: [
        { id: 4, name: "Imprint", href: "/legal/imprint" },
        { id: 5, name: "Data Privacy", href: "/legal/data-policy" },
        // { id: 6, name: "Terms of Service", href: "/legal/terms-of-service" },
      ],
    },
  ],
  ctaSection: {
    id: "cta",
    title: "Upgrade Your Business with AI",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Get Started",
      href: "https://calendly.com/nicholas-torabi-qtech-company",
    },
    subtext: "",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about QTech and our AI solutions. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        id: 1,
        question: "How does QTech's AI technology work?",
        answer:
          "QTech's AI technology combines advanced machine learning algorithms with natural language processing to understand, learn from, and act on your business data. It securely integrates with your existing systems while maintaining complete data privacy and security.",
      },
      {
        id: 2,
        question: "How secure is my company's data with QTech?",
        answer:
          "We implement enterprise-grade security measures including end-to-end encryption, secure isolated environments, and regular security audits. Your data never leaves your control, and we adhere to the highest standards of data protection compliance.",
      },
      {
        id: 3,
        question: "Can QTech integrate with our existing business tools?",
        answer:
          "Yes, QTech is designed to seamlessly integrate with popular business tools and platforms. We offer pre-built connectors for major enterprise systems and custom integration services for specialized software.",
      },
      {
        id: 4,
        question: "How long does implementation take?",
        answer:
          "Typical implementation takes 2-4 weeks depending on the complexity of your data and systems. Our team works closely with you to ensure a smooth integration process with minimal disruption to your operations.",
      },
      {
        id: 5,
        question: "Is there a free trial available?",
        answer:
          "Yes, we offer a 14-day free trial that gives you full access to our platform's features. No credit card is required to start your trial, and you can upgrade or cancel at any time.",
      },
      {
        id: 6,
        question: "What kind of support does QTech provide?",
        answer:
          "We offer multiple tiers of support, from standard business hours support to 24/7 premium enterprise support. All customers receive implementation assistance, regular updates, and access to our knowledge base.",
      },
    ],
  },
}

export const notFoundMetadata = () => {
  return {
    title: "Page not found",
    description: "Page not found",
    openGraph: {
      title: `${siteConfig.name} | Page not found`,
      description: "Page not found",
      images: [
        {
          url: siteConfig.images.notFound,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | Page not found`,
      description: "Page not found",
      images: [siteConfig.images.notFound],
      creator: "@foundmalek",
    },
  }
}
