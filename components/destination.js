import React from 'react';

const Destination = ({ destination }) => {
  const { city, averagePrice, propertyCount, imageUrl, imageAlt } = destination;

  return (
    <div className='flex items-center overflow-hidden bg-white rounded-lg shadow-lg'>
      <img src={imageUrl} alt={imageAlt} className='flex-shrink-0 w-32 h-32' />
      <div className='px-6 py-4'>
        <h3 className='text-lg font-semibold text-gray-800 uppercase'>
          {city}
        </h3>
        <p className='text-gray-600'>${averagePrice} / night average</p>
        <div className='mt-4'>
          <a
            href='#'
            className='text-sm font-semibold text-indigo-500 hover:text-indigo-400'
          >
            Explore {propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default Destination;
