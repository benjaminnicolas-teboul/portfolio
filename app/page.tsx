import ProjectList from "@/src/components/ui/ProjectList";
import Banner from "@/src/components/ui/Banner";
import { SkillsSection } from "@/src/components/ui/Skill";
import { skillsData } from "@/src/data/skillsData";

export default function Home() {
  return (
    <div>
      <Banner
        titleSpans={["Hello!", "I am Benjamin", "Frontend-developer"]}
        subtitle="Discover my projects, skills and much more."
        imageSrc="/images/david-schultz-6LIqs_kKu3c-unsplash.webp"
      />
      <SkillsSection skills={skillsData} />
      <ProjectList />
    </div>
  );
}
