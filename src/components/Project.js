import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <a href={item.link} target="blank">

      <div className='mb-8'>
        <img className='rounded-2xl min-w-72 h-96' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-3xl md:text-5xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.desc}
      </p>
      <p className='text-sm max-w-md mt-5'>
        Technology : {item.tech}
      </p>
      </a>

    </div>
  );
};

export default Project;
