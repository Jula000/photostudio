import Link from "next/link";
import Button from "@/components/common/Button";
const renderProjects = (
  projects: { title: string; date: string; image: string }[]
) => (
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
            className="group cursor-pointer w-full h-96 bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }}
          ></Link>
          <div className="mt-4 flex flex-col self-start">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm">{project.date}</p>
            <p className="mt-2 text-sm font-semibold text-blue-500 cursor-pointer">
              VIEW PROJECT
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8"></div>
  </>
);
export default renderProjects;
