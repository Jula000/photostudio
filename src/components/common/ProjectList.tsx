import Link from "next/link";
import Button from "./Button";

interface Project {
  title: string;
  date: string;
  image: string;
}

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => (
  <>
    <div className="flex justify-end space-x-4 mb-6">
      <Button className="p-2 rounded-full">{"<"}</Button>
      <Button className="p-2 rounded-full">{">"}</Button>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center w-96">
          <Link
            href="#"
            className="group w-full h-96 bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="mt-4 flex flex-col self-start">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm">{project.date}</p>
            <p className="mt-2 text-sm font-semibold text-blue-500">
              VIEW PROJECT
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ProjectList;
