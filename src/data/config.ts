const config = {
  title: "Cabir Abbasov | AI Engineer",
  // shown under the name in the hero
  role: "AI Engineer · LLMs · NLP · Computer Vision",
  description: {
    long: "Cabir Abbasov is an AI Engineer based in Baku, Azerbaijan, working on multilingual PII detection and masking, LLM fine-tuning for domain-specific decision tasks, and document AI pipelines.",
    short:
      "I build AI systems that solve practical problems, especially in multilingual and privacy-sensitive settings.",
  },
  // About section, one string per paragraph
  about: [
    "I came to AI from radio-frequency engineering and information security. I spent years calibrating aviation radio-navigation equipment and earned a master's in telecom systems security. That background shapes how I work: measure carefully, treat data responsibly, and build things that hold up in real use.",
    "Today I work on multilingual PII detection and masking (Azerbaijani, Turkish, Russian, English), LLM fine-tuning for domain-specific decision tasks, and document AI pipelines.",
  ],
  location: "Baku, Azerbaijan",
  languages: ["Azerbaijani", "English", "Russian"],
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "NLP",
    "Computer Vision",
    "PII detection",
    "RAG",
    "PyTorch",
    "Hugging Face",
    "Azerbaijan",
    "Baku",
  ],
  author: "Cabir Abbasov",
  email: "cabir.abbasov22@gmail.com",
  // TODO(cabir): Vercel URL after first deploy. Until then this uses the
  // production domain Vercel exposes at build time, or localhost in dev.
  site: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  // TODO(cabir): CV link (PDF in /public or a Drive link). Empty = no Resume button.
  resume: "",

  // for github stars button in the header
  githubUsername: "Cabir22",
  githubRepo: "portfolio",

  social: {
    github: "https://github.com/Cabir22",
    linkedin: "https://www.linkedin.com/in/cabir-abbasov/",
    huggingface: "https://huggingface.co/Cab1r",
  },
};
export { config };
