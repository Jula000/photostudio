import Link from "next/link";
import Button from "./Button";

interface Project {
  title: string;
  date: string;
  image: string;
  link: string;
}

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => (
  <>
    <div className="flex justify-end space-x-4 mb-6">
      <Button className="p-2 rounded-full">{"<"}</Button>
      <Button className="p-2 rounded-full">{">"}</Button>
      <Link href="/all-works">
        <Button className="px-6 py-3 rounded-lg">View All Works →</Button>
      </Link>
    </div>
    <div className="flex overflow-hidden gap-6">
      {projects?.map((project, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col w-[100%] lg:w-[calc(33.333%-1rem)] sm:w-[100%]"
        >
          <Link href={project.link}>
            <div className="project-image-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
          </Link>
          <div className="mt-4 flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.date}</p>
            </div>
            <Link href={project.link}>
              <div className="mt-2 text-sm font-semibold text-white border-b pb-1">
                VIEW PROJECT
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ProjectList;
