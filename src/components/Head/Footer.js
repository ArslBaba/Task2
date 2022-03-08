import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className='  '>
             {/* footer 2 */}
             <div className='  bg-footer pb-[70px] border-t border-black w-full  '>
                 {/* footer2 main contents */}
                 <div className='pt-[81px]  sm:flex smm:block sm:justify-between  '>
                   {/* new outer */}
                   <div className='flex'>
                     {/* left new */}
                     <div className='flex-col'>

                     </div>
                    

                   </div>
                    {/* left */}
                    
                        <div className='flex-col xs:ml-7 sm:ml-0 md:ml-32 smm:ml-10'>
                            <img src='/pictures/Logo.png' alt='none'></img>
                          
                            <p className='text-xl , pl-0.5 , font-bold , '>Webber</p>
                            <p className='mt-[33px]'>Copyright © 2021 WEBBER.</p>
                            <p className=''>All rights reserved.</p>
                            <span className='flex'>

                              <img className='mt-[46px] flex-row' src='/vectors/twitter.png' alt='none'></img>
                              <img className='mt-[46px] ml-14 flex-row' src='/vectors/youtube.png' alt='none'></img>

                            </span>
                          

                          </div>
                    {/* left mid */}
                   
                           
                        <div className='sm:ml-0 xs:ml-7 md:ml-96 smm:ml-10'>
                            <h1 className='font-extrabold text-[20px] text-gray_800'>Company</h1>
                            <p className='mt-[10px]' >About</p>
                            <p className='mt-[10px]'>Blog</p>
                            <p className='mt-[10px]'>Contact Us</p>
                            <p className='mt-[10px]'>Pricing</p>
                            <p className='mt-[10px]'>Testimonials</p>

                        </div>
                        
                        {/* Right mid */}
                        
                        <div className=' xs:ml-7 md:ml-10 smm:ml-10 sm:ml-0 '> 
                            <h1 className='font-extrabold text-[20px] text-gray_800'>Support</h1>
                            <p className='mt-[10px]' >Help Center</p>
                            <p className='mt-[10px]'>Terms and Conditions</p>
                            <p className='mt-[10px]'>Legal</p>
                            <p className='mt-[10px]'>Privacy and Policy</p>
                            <p className='mt-[10px]'>Status</p>

                        </div>        
                         {/* Right */}
                        
                        <div className='xs:ml-7 smm:ml-10 md:ml-10 sm:ml-1 sm:block'>
                            <input className='text-14px p-[5px] text-gray_600' type={'email'} name='email' id='email' placeholder='Enter Your Email'></input>
                            <button className='bg-gradient-to-r from-c1 to-c3 ... p-[4px] ml-[2px]' type='submit'>
                            <img src='/vectors/button.png'></img>
                            </button>


                        </div>        
                    </div>

                 </div>

          


         </footer>


    </div>
  )
}

export default Footer