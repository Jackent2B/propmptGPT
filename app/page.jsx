import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PropmptGPT is a open source AI Powered tool to generate prompts and
        share it!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
