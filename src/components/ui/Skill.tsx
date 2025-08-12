import React from "react";
import Image from "next/image";

type SkillProps = {
  avatarSrc: string;
  avatarAlt?: string;
  title: string;
  description: string;
};

const Skill = ({
  avatarSrc,
  avatarAlt = "skill avatar",
  title,
  description,
}: SkillProps) => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-md shadow-sm bg-background text-foreground">
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          fill
          className="object-contain"
          quality={95}
          sizes="96px"
          priority
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-foreground/70 dark:text-foreground/80">
          {description}
        </p>
      </div>
    </div>
  );
};

type SkillsSectionProps = {
  skills: {
    avatarSrc: string;
    avatarAlt?: string;
    title: string;
    description: string;
  }[];
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="w-full bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <h2 className="col-span-full text-3xl font-bold text-center pb-2">
          My skills :
        </h2>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            avatarSrc={skill.avatarSrc}
            avatarAlt={skill.avatarAlt}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export { Skill, SkillsSection };