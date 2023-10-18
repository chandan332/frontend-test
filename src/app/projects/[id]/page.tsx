import { projects } from "@/constants/projects";

const page = ({ params }: { params: { id: string } }) => {
  let { heading, desc } = projects[Number(params.id)];
  return (
    <div className="w-full lg:w-[75%] m-auto p-4 text-center">
      <h1 className="text-3xl lg:text-6xl w-fit m-auto mt-4 lg:mt-10 font-bold text-blue-600">
        {heading}
      </h1>
      <p className="lg:text-2xl text-blue-900 ">{desc}</p>
      <div>
        <button className="bg-blue-500 transition-all duration-1000 hover:scale-[1.1] text-white font-bold py-2 px-4 mx-2 rounded my-2">
          Get a Free Quote
        </button>
        <button className="text-blue-500 transition-all duration-1000 hover:scale-[1.1] border-2 border-blue-50 font-bold py-2 px-4 mx-2 rounded my-2">
          Conatct us
        </button>
      </div>
    </div>
  );
};

export default page;
