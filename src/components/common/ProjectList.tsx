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
    <div className="grid md:grid-cols-3 gap-6">
      {projects?.map((project, index) => (
        <div key={index} className="flex flex-col items-center">
          <Link href={project.link}>
            <div
              className="group h-96 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </Link>
          <div className="mt-4 flex justify-between w-full">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.date}</p>
            </div>
            <Link href={project.link}>
              <div className="mt-2 text-sm font-semibold text-white border-b pb-1 self-end">
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
