// import { useState } from 'react'
function App() {
  

  return (
    <>
      <div className="font-montserrat text-sm font-medium pt-4 flex justify-between flex-col sm:flex-row items-center">
        <div className="p-4 md:ml-16  sm:ml-16 lg:ml-24 xl:ml-40">
          <img className="size-8" src="src/assets/navbar-logo.png"/>
        </div>
        <div className=" space-x-6 flex md:mr-16 sm:mr-16 lg:mr-24 xl:mr-40 ">
          <li className="list-none hover:bg-gray-900 hover:text-white duration-300 px-8 py-4 hover:font-semibold cursor-pointer">Home</li>
          <li className="list-none hover:bg-gray-900 hover:text-white duration-300 px-8 py-4 hover:font-semibold cursor-pointer">Contact</li>
          <li className="list-none hover:bg-gray-900 hover:text-white duration-300 px-8 py-4 hover:font-semibold cursor-pointer">About</li>
        </div>
          
          
          
      </div>
      <div className='flex flex-col lg:flex-row  font-montserrat'>
      <div className="flex  flex-col place-content-between p-8 lg:ml-24 xl:ml-40 md:ml-16 md:mr-16 lg:mr-2  m-2 mt-4 w-auto  h-[508px] lg:w-3/4 bg-gray-100">
            <div className="container">
            <h1 className='text-gray-900 font-bold text-4xl'>Hello, I’m Abo, a product Designer With 7 years of experience.</h1>
            <p className='mt-12'>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
            </div>
            <div className="flex md:flex-row md:space-x-6 flex-col   ">
              <button className="bg-[#1D1D1D]  px-10 py-3 font-medium text-white max-w-full  ">Contact me</button>
                <div className="flex mt-6 md:mt-0 justify-between  md:space-x-max md:gap-6  ">
                  <img className="h-[56px] w-[56px]" src="src\assets\twitter.svg" alt="instagram" />                
                  <img className="h-[56px] w-[56px]" src="src\assets\twitter.svg" alt="instagram" />                
                  <img className="h-[56px] w-[56px]" src="src\assets\twitter.svg" alt="instagram" />                
                  <img className="h-[56px] w-[56px]" src="src\assets\twitter.svg" alt="instagram" />                

                </div>  
            </div>

        </div>
        <div className="bg-gray-100 max-w-full xl:w-1/4 h-[508px] mt-4 overflow-hidden lg:mr-24 xl:mr-40  lg:ml-2 m-2 md:ml-16 md:mr-16  ">
            
              <img className="w-full h-[508px] transition-all duration-300 cursor-pointer filter grayscale   hover:grayscale-0" 
              src="https://images.pexels.com/photos/18322097/pexels-photo-18322097/free-photo-of-used-books-displayed-in-store.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
              alt="image description"/>
              
              
           
        </div>
      </div>
      
    </>
  )
}

export default App
