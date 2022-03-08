import React from 'react'
import Head from '../Head/Header'
import Foot from '../Head/Footer'

const faq = () => {
  return (
    <div>
        {/* header */}
        <Head/>

        {/* main contents */}
        <div className=' pb-[70px] text-center content-center  w-full '>
          <h1 className='max-w-[765px] xs:max-h-[500px] md:max-h-[115px] xs:font-[500] md:font-[900] xs:text-[40px] md:text-[96px] mx-auto text-new'>
            Simple Pricing
          </h1>

          <br/>

          <p className='font-normal text-[20px] text-center text-gray_600  ml-[32px]'>
            No contracts. No surprise fees. Register now or try out the Webbber free trial so 
            <br/> you’re absolutely sure that it’s the right fit for your frontend team
          </p>

          <button className=' py-[13px] px-[32px] bg-gradient-to-r from-c1 to-c3 ...  font-extrabold rounded-2px text-white border border-black '>
            Monthly
          </button>

          
          <button className='mt-10 ml-[10px] py-[13px] px-[35px] bg-cyan text-c2 font-extrabold  rounded-2px  border border-black  '>
            Yearly
          </button>

          {/* main container */}
          <div className='xs:block md:flex items-center'>
            {/* container left */}
            <div className='flex-col xs:text-center md:ml-36  mt-[200px] text-left'>
                            <p className='mt-[15px]'>All limited Links</p>
                            <p className='mt-[15px]'>Own Analutical Platform</p>
                            <p className='mt-[15px]'>Chat Support</p>
                            <p className='mt-[15px]'>Number of Users</p>
                            <p className='mt-[15px]'>Optimize Hashtags</p>
                            <p className='mt-[15px]'>Account Manager</p>
                            <p className='mt-[15px]'>Number of Articles</p>
                            <p className='mt-[15px]'>Satisfaction granted</p>

            </div>
            {/* mid left */}
            <div className='flex-col xs:text-center md:ml-52  mt-[180px]  '>
              <h1  className='font-[800] text-[28px]  text-font_gray mt-[5px]'>
                Starter
              </h1>
              <span className='font-extrabold text-[36px] text-gray_800 mt-[5px]'>
                $20 <small>/month</small>
              </span>

              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='mt-[15px]'> 1 User</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-red-700 font-extrabold mt-[15px]'>&#10006;</p>
              <p className='text-red-700 font-extrabold mt-[15px]'>&#10006;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>

              <button className='mt-[51px] py-[15px] px-[37px] bg-cyan text-left border border-black text-c2 font-semibold'>
                Choose Plan
              </button>
  

            </div>

            {/* midright */}

            <div className='flex-col xs:text-center md:ml-28  mt-[180px] bg-white border py-[50px] px-[10px] shadow-lg border-blue-500'>
              <h1  className='font-[800] text-[28px]  text-font_gray mt-[5px]'>
                Pro
              </h1>
              <span className='font-extrabold text-[36px] text-gray_800 mt-[5px]'>
                $100 <small>/month</small>
              </span>

              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='mt-[15px]'> 3 User</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-red-700 font-extrabold mt-[15px]'>&#10006;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>

              <button className='mt-[51px] py-[15px] px-[37px] bg-cyan text-left border bg-gradient-to-r from-c1 to-c3 ... text-white border-black font-semibold'>
                Choose Plan
              </button>
  

            </div>

            <div className='flex-col md:ml-28 xs:text-center  mt-[180px]  '>
              <h1  className='font-[800] text-[28px]  text-font_gray mt-[5px]'>
                Enterprise
              </h1>
              <span className='font-extrabold text-[36px] text-gray_800 mt-[5px]'>
                $200 <small>/month</small>
              </span>

              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='mt-[15px]'> Unlimited</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>
              <p className='text-black font-extrabold mt-[15px]'>&#10003;</p>

              <button className='mt-[51px] py-[15px] px-[37px] bg-cyan text-left border border-black text-c2 font-semibold'>
                Choose Plan
              </button>
  

            </div>


          </div>


         

        </div>

        {/* footer */}
        <div className='xs:max-h-[2000px] md:max-h-[1000px] bg-footer content-center'>
          {/* footer intro */}
          <div className='pt-[80px] text-center'>
            <h1 className='xs:font-[500] xs:text-[40px] md:font-[900] md:text-[60px] text-gray_800'>Frequently Asked Questions</h1>

          </div>
          {/* footer main container */}
          <div className='mt-[100px] md:ml-[80px] md:flex xs:block xs:text-center md:text-left '>
            {/* footer left */}
            <div className='flex-1'>
              <p className='max-w-[590px]  xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font[400] md:font-[600]'>How do I use the webber for 3+ members?</p>
              <p className='max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[10px] md:text-[16px] text-gray_600 font-normal'>
                                Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>

            </div>
            {/* footer right */}
            <div className='flex-1'>
            <p className='md:mt-0 xs:mt-8 max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font-[400] md:font-[600]'>What does early access mean</p>
              <p className='max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[14px] md:text-[16px] text-gray_600 font-normal'>Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>


            </div>

          </div>

           {/* footer main container */}
           <div className='mt-[100px] md:ml-[80px] md:flex xs:block xs:text-center md:text-left '>
            {/* footer left */}
            <div className='flex-1'>
              <p className='max-w-[590px]  xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font[400] md:font-[600]'> Whats the best way to make the most out of it</p>
              <p className='max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[10px] md:text-[16px] text-gray_600 font-normal'>Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>

            </div>
            {/* footer right */}
            <div className='flex-1 '>
            <p className='md:mt-0 xs:mt-8 max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font-[400] md:font-[600]'> How are enterprise package customers accomodated?</p>
              <p className='max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[10px] md:text-[16px] text-gray_600 font-normal'>Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>


            </div>

          </div>

           {/* footer main container */}
           <div className='mt-[100px] md:ml-[80px] md:flex xs:block xs:text-center md:text-left'>
            {/* footer left */}
            <div className='flex-1'>
              <p className='max-w-[590px]  xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font[400] md:font-[600]'>Whats the best way to make the most out of it?</p>
              <p className='max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[10px] md:text-[16px] text-gray_600 font-normal'>Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>

            </div>
            {/* footer right */}
            <div className='flex-1'>
              <p className='md:mt-0 xs:mt-8 max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[18px] md:text-[24px] text-gray_800 xs:font-[400] md:font-[600]'> How do I use the webber for 3+ members</p>
              <p className='pb:mb-0 xs:pb-10 max-w-[590px] xs:max-h-[200px] md:max-h-[72px] xs:text-[10px] md:text-[16px] text-gray_600 font-normal'>Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. 
                                Suscipit quia et aspernatur officiis quo. Officia sed eaque enim 
                                doloribus quisquam mollitia nihil.</p>

            </div>

          </div>

        </div>

        {/* Footer 1 */}
        <div className=' max-w-full xs:h-[500px] md:h-[340px] bg-gradient-to-r from-c1 to-c3 ... '>
          {/* footer 1 intro */}
          <div className='pt-[60px] ' >
            <h1 className='text-center xs:h-[200px] md:h-[48px] xs:font-[700] md:font-[800] text-[48px] text-white '>Get Result, no matter what</h1>
            <p className='mt-[26px] font-[500] text-[16px] max-w-[560px] text-center mx-auto text-white '>Start your free trial today, you get all the pro features for 1 month for you and your team. 
              If you think its not for you can easily unsubscribe</p>
            <div className='text-center mt-[48px] mb-[60px]'>
              <button className='px-[32px] py-[16px] text-c2 bg-url rounded-[2px] font-extrabold content-center hover:bg-black '>
                Start Trial
              </button>
            </div>  

          </div>

        </div>

        {/* Footer */}

        <Foot/>
    </div>
  )
}

export default faq