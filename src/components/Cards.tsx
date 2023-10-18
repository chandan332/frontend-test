import { projects } from "@/constants/projects";
import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <div>
      <h1
        className="text-2xl my-4 lg:my-8 w-fit font-bold text-blue-600"
        id="projects"
      >
        Projects Done So Far:
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
        {projects.map((project, index) => {
          return (
            <div className="h-[400px] mt-4 lg:mt-0 lg:h-[350px]" key={index}>
              <div className="m-auto group transition-height duration-1000 relative max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 h-[80%] hover:h-full ">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-blue-600">
                    {project.heading}
                  </div>
                  <p className="text-base text-blue-900">{project.desc}</p>
                </div>
                <div className="transition-display duration-1000 px-6 pt-4 pb-2  hidden group-hover:block absolute bottom-[5%] left-[50%] translate-x-[-50%] w-full">
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <Link href={`projects/${index}`}>Learn More</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
