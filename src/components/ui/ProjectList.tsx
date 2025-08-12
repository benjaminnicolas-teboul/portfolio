import Project from "@/src/components/ui/Project";
import Projects from "@/src/data/projects";

const ProjectList = () => {
  return (
    <section className="w-full p-6 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        Projects :
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2">
        {Projects.map((p, index) => (
          <Project key={index} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
