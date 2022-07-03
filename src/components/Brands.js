import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div
        className='container mx-auto flex md:justify-center items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <a
            href={brand.href}
            target='blank'
              key={idx}
              className="mr-2"
            >
              <img src={brand.img} alt='' />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
