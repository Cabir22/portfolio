import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const AboutSection = () => (
  <SectionWrapper id="about" className="flex w-full flex-col justify-center py-24 px-4">
    <SectionHeader id="about" title="About" className="static mb-10" />
    <div className="mx-auto max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
      {config.about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p className="font-mono text-sm">
        {config.location} · {config.languages.join(", ")}
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;
