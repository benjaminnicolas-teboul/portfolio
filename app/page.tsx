'use client';
import ProjectList from "@/src/components/ui/ProjectList";
import Banner from "@/src/components/ui/Banner";
import { SkillsSection } from "@/src/components/ui/Skill";
import { skillsData } from "@/src/data/skillsData";
import Contact from "@/src/components/ui/Contact";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div>
      <Banner
        titleSpans={[t('banner.title1'), t('banner.title2'), t('banner.title3')]}
      subtitle={t('banner.subtitle')}
        imageSrc="/images/banner.webp"
      />
      <SkillsSection skills={skillsData} />
      <ProjectList />
      <Contact />
    </div>
  );
}
