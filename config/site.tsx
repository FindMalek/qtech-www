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
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute left-[55%] top-[55%] z-10 size-full -translate-x-1/2 -translate-y-1/2  md:left-[57%] md:top-[58%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="fill-background size-[90%] object-contain md:size-[85%]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute left-1/2 top-[58%] z-20 size-full -translate-x-1/2  -translate-y-1/2 md:top-[60%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="fill-accent size-full object-contain"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </motion.div>
          </div>
        ),

        title: "Enterprise-grade privacy. Your data stays yours.",
        description:
          "Your AI runs inside your environment (or private cloud), with no third-party data sharing. We train models on the data You want, and You control exactly what Your AI can see and do.",
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
