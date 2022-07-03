import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          {/* <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          /> */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Hafidzuddin Abrar
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              I have endless passion for software development especially in web development. <br />
                <br />
                I'm a good learner and very enthusiastic and could learn anything as long as it needed. I am reliable, honest, prompt, quick learner.

              </p>
            </div>
            <a href='mailto:usamahhafidz99@gmail.com' target='blank' className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
