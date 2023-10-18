import { swags } from "@/constants/projects";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full lg:w-[80vw] p-4 mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-blue-500">
        Explore our Language Swags:{" "}
      </h1>
      <ul>
        {swags.map((swag, index) => {
          return (
            <li className="my-4 lg:list-disc ms-2" key={index}>
              <h1 className="text-2xl text-blue-900 font-semibold ">
                {swag.heading}
              </h1>
              <p className="text-blue-950">{swag.desc}</p>
            </li>
          );
        })}
      </ul>
      <p className="text-blue-950">
        Join us in celebrating India&apos;s linguistic diversity. Your words,
        our expertise- a fusion that echoes across borders. Welcome to Aviral
        Digital Solutions, where languages unite and communication knows no
        bounds.{" "}
      </p>
    </div>
  );
};

export default About;
