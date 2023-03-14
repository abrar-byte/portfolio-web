import React from "react";

// import img
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          /> */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Hafidzuddin Abrar
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a highly motivated and skilled React programmer with a
                passion for crafting clean, efficient, and effective code. With
                a strong understanding of JavaScript, HTML, and CSS, I am able
                to turn ideas into reality through the use of the latest web
                technologies. My experience developing user-centered
                applications has honed my problem-solving and analytical skills,
                and I am eager to continue growing and pushing the boundaries of
                what is possible with React.
                <br />
              
              </p>
            </div>
            <a
              href="mailto:usamahhafidz99@gmail.com"
              target="blank"
              className="btn btn-md bg-accent hover:bg-secondary-hover transition-all"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
