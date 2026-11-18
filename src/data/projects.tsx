import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips render any SVG as a monochrome glyph via MaskIcon. Local files
// live in /public/assets/logos; the rest come from the Simple Icons CDN.
const brand = (title: string, src: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={src} title={title} />,
});
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
// For tools without a logo.
const text = (title: string, mark: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-xs font-bold">{mark}</span>,
});
const PROJECT_SKILLS = {
  python: brand("Python", "/assets/logos/python-mono.svg"),
  js: brand("JavaScript", "/assets/logos/javascript-mono.svg"),
  html: brand("HTML", si("html5")),
  transformers: brand("Hugging Face Transformers", si("huggingface")),
  hfSpaces: brand("Hugging Face Spaces (gradio_client)", si("gradio")),
  fastapi: brand("FastAPI", si("fastapi")),
  yolo: brand("YOLO (Ultralytics)", si("ultralytics")),
  opencv: brand("OpenCV", si("opencv")),
  numpy: brand("NumPy", si("numpy")),
  supervision: brand("supervision", si("roboflow")),
  pymupdf: text("PyMuPDF", "PDF"),
  dspy: text("DSPy", "DSPy"),
  bytetrack: text("ByteTrack", "BT"),
};

// Screenshots live in public/assets/projects-screenshots/<project id>/.
const BASE_PATH = "/assets/projects-screenshots";

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "pii-masking",
    category: "NLP · Privacy",
    title: "PII Masking",
    src: `${BASE_PATH}/pii-masking/cover.webp`,
    screenshots: ["cover.webp"],
    live: "#",
    github: "https://github.com/Cabir22/pii-masking",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.transformers,
        PROJECT_SKILLS.dspy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A token-classification model that finds personal data in
            Azerbaijani, English, Turkish and Russian text so it can be masked
            before the text leaves an organisation. It is a fine-tuned{" "}
            <code>xlm-roberta-large</code> trained on synthetic data from the
            project&apos;s own generator, and covers 27 labels.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/pii-masking/cover.webp`]} />
          <TypographyH3 className="my-4 mt-8">What it finds</TypographyH3>
          <p className="font-mono mb-2">
            Names, addresses, dates and ages, phone numbers and e-mails, cards
            and IBANs, network addresses, keys and tokens, and the Azerbaijani
            national identifiers (FIN, ID card, passport, VÖEN, driving
            licence). The masking tool works on DOCX, PPTX, TXT, CSV and XLSX
            files.
          </p>
          <TypographyH3 className="my-4 mt-8">Results</TypographyH3>
          <p className="font-mono mb-2">
            97.0 micro F1 on a 5,000-document Azerbaijani benchmark, up from
            68.4 for the starting checkpoint. The multilingual model scores
            96.4 and raised Turkish from 89.4 to 93.8 and Russian from 89.2 to
            95.1. On real text it found 87.3% of values at 92.1% precision.
            Release rules were written before the first candidate was scored;
            the best model passes 13 of 14.
          </p>
          <TypographyH3 className="my-4 mt-8">Synthetic data</TypographyH3>
          <p className="font-mono mb-2">
            The generator mints checksum-valid values itself and an LLM only
            writes the text around them, so the training data contains no test
            cards or 555 numbers. Every occurrence is located afterwards by a
            resolver, so offset errors cannot happen. Look-alike decoys (invalid
            checksums, order numbers next to ID-like codes) cut false alarms on
            PII-free documents from 44% to 6–13%. A translation pipeline
            produces the English, Turkish and Russian data.
          </p>
        </div>
      );
    },
  },
  {
    id: "form-triage",
    category: "Document AI",
    title: "FormTriage",
    src: `${BASE_PATH}/form-triage/overview.png`,
    screenshots: ["overview.png", "results.png"],
    live: "#",
    github: "https://github.com/Cabir22/form-triage",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.pymupdf,
        PROJECT_SKILLS.hfSpaces,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A local web app for designing and evaluating automated checks on
            scanned paper forms. Three vision decision models answer
            plain-English yes/no or multiple-choice questions side by side,
            with no OCR or templates. Confident answers are automated; answers
            below a confidence threshold are routed to human review.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">How it decides</TypographyH3>
          <p className="font-mono mb-2">
            A decision model reads the page image with a question and returns a
            probability for every allowed answer. Above the threshold the answer
            is acted on; below it, the form goes to a person.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/form-triage/overview.png`,
              `${BASE_PATH}/form-triage/results.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="font-mono mb-2 list-disc ml-5 space-y-1">
            <li>
              Parallel comparison of imajev-4b, Jev-Omni and THX-02 on the same
              page and questions.
            </li>
            <li>
              Adjustable confidence threshold that re-decides without new model
              calls.
            </li>
            <li>
              Required checks that turn confident failures into a follow-up
              email, built from approved sentences (no LLM writes it).
            </li>
            <li>Offline test suite with canned model answers.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "exam-cheating-detection",
    category: "Computer Vision",
    title: "Exam Cheating Detection",
    src: `${BASE_PATH}/exam-cheating-detection/hand_risk.jpg`,
    screenshots: ["hand_risk.jpg", "phone.jpg", "hand_risk_2.jpg"],
    live: "#",
    github: "https://github.com/Cabir22/Cheating_detection_in_exam",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.yolo,
        PROJECT_SKILLS.bytetrack,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.supervision,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A computer vision pipeline that analyses wide-angle classroom exam
            footage and flags suspicious behaviour per student: phone use,
            looking around, and passing notes between neighbours. One camera
            covers 10+ students, and every student keeps a persistent track ID.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">How it works</TypographyH3>
          <p className="font-mono mb-2">
            YOLO with ByteTrack tracks people; YOLO-Pose runs once per person
            and its keypoints feed both the gaze (head yaw) and hand-proximity
            checks. A separately fine-tuned YOLO detects phones and assigns
            each one to the nearest student. Labels are rule-based with no
            risk score, so it is always clear why a student was flagged. Hand
            contact only counts when one of the pair is also looking sideways,
            so neighbours writing side by side are not flagged.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/exam-cheating-detection/hand_risk.jpg`,
              `${BASE_PATH}/exam-cheating-detection/phone.jpg`,
              `${BASE_PATH}/exam-cheating-detection/hand_risk_2.jpg`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Status</TypographyH3>
          <p className="font-mono mb-2">
            Validation is qualitative so far: labelled clips are run through
            the pipeline and the output is reviewed by hand. Known limits are
            small phones at classroom distance, noisy looking-around labels,
            and ID switches after occlusion.
          </p>
        </div>
      );
    },
  },
];
export default projects;
