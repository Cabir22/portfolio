// order = keycap layout, 6 per row
export enum SkillNames {
  PYTHON = "python",
  PYTORCH = "pytorch",
  SKLEARN = "sklearn",
  HUGGINGFACE = "huggingface",
  OPENCV = "opencv",
  YOLO = "yolo",
  LANGCHAIN = "langchain",
  LANGGRAPH = "langgraph",
  FASTAPI = "fastapi",
  DOCKER = "docker",
  MLFLOW = "mlflow",
  STREAMLIT = "streamlit",
  POSTGRES = "postgres",
  LINUX = "linux",
  GIT = "git",
  GITHUB = "github",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional artwork for the 3D key (local path or SVG URL); falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "main language for ML, data and backend work",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#3776ab",
  },
  [SkillNames.PYTORCH]: {
    id: 2,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "training and fine-tuning deep learning models",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    keyboardIcon: "/assets/keyboard/logos/pytorch.svg",
    keyboardColor: "#ee4c2c",
  },
  [SkillNames.SKLEARN]: {
    id: 3,
    name: "sklearn",
    label: "scikit-learn",
    shortDescription: "classical ML, baselines and evaluation metrics",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    keyboardIcon: "/assets/keyboard/logos/sklearn.svg",
    keyboardColor: "#f7931e",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 4,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "Transformers, model hub, Spaces",
    color: "#ffd21e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg",
    keyboardIcon: "/assets/keyboard/logos/huggingface.svg",
    keyboardColor: "#ff9d00",
  },
  [SkillNames.OPENCV]: {
    id: 5,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "image and video processing",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    keyboardIcon: "/assets/keyboard/logos/opencv.svg",
    keyboardColor: "#5c3ee8",
  },
  [SkillNames.YOLO]: {
    id: 6,
    name: "yolo",
    label: "YOLO",
    shortDescription: "real-time object detection",
    color: "#9ca3af",
    icon: "https://cdn.simpleicons.org/yolo/9CA3AF",
    keyboardIcon: "/assets/keyboard/logos/yolo.svg",
    keyboardColor: "#111f68",
  },
  [SkillNames.LANGCHAIN]: {
    id: 7,
    name: "langchain",
    label: "LangChain",
    shortDescription: "building LLM applications and RAG pipelines",
    color: "#7fc8ff",
    icon: "https://cdn.simpleicons.org/langchain",
    keyboardIcon: "/assets/keyboard/logos/langchain.svg",
    keyboardColor: "#1c3c3c",
  },
  [SkillNames.LANGGRAPH]: {
    id: 8,
    name: "langgraph",
    label: "LangGraph",
    shortDescription: "stateful, multi-step LLM agents",
    color: "#7fc8ff",
    icon: "https://cdn.simpleicons.org/langgraph",
    keyboardIcon: "/assets/keyboard/logos/langgraph.svg",
    keyboardColor: "#2f6868",
  },
  [SkillNames.FASTAPI]: {
    id: 9,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "serving models behind fast Python APIs",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    keyboardIcon: "/assets/keyboard/logos/fastapi.svg",
    keyboardColor: "#009688",
  },
  [SkillNames.DOCKER]: {
    id: 10,
    name: "docker",
    label: "Docker",
    shortDescription: "reproducible environments and deployments",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.MLFLOW]: {
    id: 11,
    name: "mlflow",
    label: "MLflow",
    shortDescription: "experiment tracking and model registry",
    color: "#0194e2",
    icon: "https://cdn.simpleicons.org/mlflow",
    keyboardIcon: "/assets/keyboard/logos/mlflow.svg",
    keyboardColor: "#0194e2",
  },
  [SkillNames.STREAMLIT]: {
    id: 12,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "quick interactive demos for models",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
    keyboardIcon: "/assets/keyboard/logos/streamlit.svg",
    keyboardColor: "#ff4b4b",
  },
  [SkillNames.POSTGRES]: {
    id: 13,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "relational data storage and querying",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.LINUX]: {
    id: 14,
    name: "linux",
    label: "Linux",
    shortDescription: "where training jobs and servers run",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.GIT]: {
    id: 15,
    name: "git",
    label: "Git",
    shortDescription: "version control for code and experiments",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.GITHUB]: {
    id: 16,
    name: "github",
    label: "GitHub",
    shortDescription: "hosting code, reviews and CI",
    color: "#9ca3af",
    icon: "https://cdn.simpleicons.org/github/9CA3AF",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#24292f",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

// newest first
export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "Jul 2026", end: "Present" }],
    title: "Junior AI Engineer",
    company: "HAL-X Ecosystem",
    description: [
      "Developing a multilingual text PII detection & masking model trained on synthetic data (Azerbaijani, Turkish, Russian, English).",
      "Fine-tuning LLM-based decision models with synthetic data generation and validation pipelines.",
      "Building document AI tooling: OCR-based extraction feeding sensitive-data masking, plus evaluation of vision decision models on scanned forms.",
    ],
    // TODO(cabir): pick the skill badges for this role (any SkillNames value)
    skills: [],
  },
  {
    id: 2,
    periods: [{ start: "Jun 2023", end: "Oct 2026" }],
    title: "Radio Frequency Engineer",
    company: "AZAL Azerbaijan Airlines · Metrology Department · Baku",
    description: ["Calibration of aviation radio-navigation equipment."],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
