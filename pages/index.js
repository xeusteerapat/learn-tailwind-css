import Image from 'next/image';
import Destination from '../components/destination';
import popularDestination from '../data/destination';

export default function Home() {
  return (
    <div>
      <div className='grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='max-w-md p-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2'>
          <div className='xl:max-w-xl'>
            <img src='/logo.svg' alt='work' className='h-10' />
            <img
              src='/cat.jpeg'
              alt='cat'
              className='object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden'
            />
            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl'>
              You can sleep from anywhere.
              <br className='hidden lg:inline' />
              <span className='text-indigo-500'>Take advantage of it.</span>
            </h1>
            <p className='mt-2 text-gray-600 sm:mt-4 sm:text-xl'>
              Sleepation helps you find sleep-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className='mt-4 space-x-2 sm:mt-6'>
              <a
                href='#'
                className='btn shadow-lg btn-primary hover:-translate-y-0.5 transform transition'
              >
                Book your escape
              </a>
              <a href='#' className='btn btn-secondary'>
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className='relative hidden lg:block 2xl:col-span-3'>
          <img
            src='/cat.jpeg'
            alt='cat'
            className='absolute inset-0 object-cover object-center w-full h-full'
          />
        </div>
      </div>
      <div className='max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12'>
        <h2 className='text-xl text-gray-900'>Popular destinations</h2>
        <p className='mt-2 text-gray-600'>
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className='grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3'>
          {popularDestination.map(destination => (
            <Destination destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
}
