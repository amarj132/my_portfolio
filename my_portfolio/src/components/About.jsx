import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          rem veniam quasi. Ea tempora id voluptate modi suscipit maiores illo
          vitae voluptas excepturi, quaerat, labore illum error odit ratione et
          molestias doloribus sit saepe in, rerum quod ducimus. Veritatis animi
          repudiandae in recusandae quo placeat saepe rerum dolorem eos vitae!
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          reiciendis sit, architecto molestias suscipit quia in, ex voluptatibus
          porro fuga eius sapiente dolorem sequi praesentium incidunt impedit?
          Recusandae, perspiciatis soluta.
        </p>
      </div>
    </div>
  );
};

export default About;
