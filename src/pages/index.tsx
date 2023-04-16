import React from 'react';
import { Footer, Navbar } from './components';

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <section className='flex flex-row my-20 p-20'>
        <div className='basis-1/2 grid justify-items-end me-5'>
          <img src="/mf_profile_picture.png" className="border-2 border-black rounded-full bg-white" alt="Logo" style={{ width: '50%' }} />
        </div>
        <div className='basis-1/2 ms-5'>
          <h1 className='text-9xl font-black'>Hello!</h1>
          <h2 className='mt-10 text-3xl font-bold'>A Little Bit About Myself</h2>
          <div className='max-w-md'>
            <p className='text-xl font-light'>I am a student studying <a className='text-blue-700 hover:underline' href="https://www.np.edu.sg/">@Ngee Ann Polytechnic</a> for a Diploma in Information Technology</p>
            <br></br>
            <p className='text-xl font-light'>I hope to connect with more people in the IT industry and look foward to working with you!</p>
          </div> 
          <br></br>   
          <p className='font-serif text-lg font-thin italic'>~ Ming Feng Lee</p>      
        </div>
      </section>

      <section className='my-10'>
        <blockquote className='text-2xl text-center font-serif'>
          "The capacity to learn is a <span className='italic text-blue-500'>gift</span>; the ability to learn is a <span className='italic underline decoration-sky-500 decoration-4'>skill</span>; 
          the willingness to learn is a <span className='italic text-blue-500 underline decoration-sky-500'>choice</span>."
        </blockquote>
        <p className='text-xl text-center font-extralight'>~Brian Hilbert</p>
      </section>

      <section>
        
      </section>
      <Footer />
    </main>
  )
}