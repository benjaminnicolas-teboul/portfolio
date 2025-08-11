import Project from "@/src/components/ui/Project";
import Projects from "@/src/data/projects";


const ProjectList = () => {
  return (
    <div>
      <p>Projects :</p>
      {Projects.map((p, index) => (
        <Project key={index} {...p} />
      ))}
    </div>
  );
};

export default ProjectList;