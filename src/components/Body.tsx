import React from "react";
import Cards from "./Cards";
import Mission from "./Mission";

const Body = () => {
  return (
    <div className="w-full lg:w-[75%] m-auto p-4 text-center">
      <h1 className="text-3xl lg:text-6xl w-fit m-auto mt-4 lg:mt-10 font-bold text-blue-600">
        World of Words
      </h1>
      <p className="lg:text-2xl text-blue-900 ">
        Welcome to our digital heaven where languages unite and barriers
        dissolve. At Aviral Digital Solutions, we are not just translators, we
        are architects of understanding in a diverse world. With our linguistic
        competence, we bridge cultures, empower businesses and amplify global
        connections.
      </p>
      <p className="text-blue-950 my-2">
        Our passion lies in transcending linguistic barriers, weaving words that
        resonate across languages including Hindi, Marathi, Telgu, Malayalam,
        Bengali, Odia and many more.{" "}
      </p>
      <div>
        <button className="bg-blue-500 transition-all duration-1000 hover:scale-[1.1] text-white font-bold py-2 px-4 mx-2 rounded my-2">
          Get a Free Quote
        </button>
        <button className="text-blue-500 transition-all duration-1000 hover:scale-[1.1] border-2 border-blue-50 font-bold py-2 px-4 mx-2 rounded my-2">
          Conatct us
        </button>
      </div>
      <Mission
        id="mission"
        heading="Mission: "
        desc="Our mission is to break down language barriers and foster understanding by providing top-notch translation services in a multitude of Indian languages. "
      />
      <Mission
        id="vision"
        heading="Vision: "
        desc="Our vision is to be the cornerstone of communication in India, connecting businesses, communities and individuals through accurate and culturally sensitive translations. "
      />
      <Cards />
    </div>
  );
};

export default Body;
