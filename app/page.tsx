import ProjectList from "@/src/components/ui/ProjectList";
import Banner from "@/src/components/ui/Banner";
import { SkillsSection } from "@/src/components/ui/Skill";
import { skillsData } from "@/src/data/skillsData";
import Contact from "@/src/components/ui/Contact";

export default function Home() {
  return (
    <div>
      <Banner
        titleSpans={["Hello!", "I am Benjamin", "Frontend-developer"]}
        subtitle="Discover my projects, skills and much more."
        imageSrc="/images/banner.webp"
      />
      <SkillsSection skills={skillsData} />
      <ProjectList />
      <Contact />
    </div>
  );
}
