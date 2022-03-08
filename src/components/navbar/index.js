import React from 'react'
import '../navbar/index.css'
import Head from '../Head/Header'
import Foot from '../Head/Footer'
<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap');
</style>

const Navbar = () => {
  return (
  
    <div className=''>
        {/* Header */}
       
    <Head/>
    {/* Deploy */}
        <div className='w-full'>

            <p className='xs:text-[40px] md:text-8xl  text-center  mx-auto  max-w-[800px] xs:font-[600] md:font-[900]   mt-20   xs:max-h-[400px] smm:max-h-[230px] font-sans'> Deploy Your Front End</p>   
        </div>

        {/* Buttons */}

        <div className='mt-20 text-center'>
               
                <button className='px-10 py-3 bg-gradient-to-r from-c1 to-c3 ... text-white rounded-xm font-sans rounded-[2px] '>Get Started</button>
                
                <button className='smm:mt-0 xs:mt-5 ml-2 px-10 py-3 bg-cyan text-sky-700 rounded-xm font- rounded-[2px]'>Learn More</button>

                
        </div>

        <div className=' bg-gradient-to-r from-c1 to-c3 ... w-full max-h-[268px] max-w-[1536px] mt-20 mx-auto pt-20'>

            <div className=' max-w-[974px] w-full h-[629px] bg-slate-50  mx-auto rounded-[12px]'>
                 
                 <button className=' bg-small ml-[20px] mt-[16px] max-w-[11px] h-[11px] rounded-[50%]'></button>
                 <button className=' bg-small ml-[11px] mt-[16px] max-w-[11px] h-[11px] rounded-[50%]'></button>
                 <button className=' bg-small ml-[11px] mt-[16px] max-w-[11px] h-[11px] rounded-[50%]'></button>
            
                < input  type="text" name="websiteUrl"  className='max-w-[645px] h-24px mt-[10px] ml-[78px] rounded-[4px] bg-url' ></input>    
            
                <input type=" " id='screen' className='max-w-[934px] md:w-full h-[580px] mt-[10px] ml-[15px] bg-url' ></input>
            </div>


        </div>

        <div>
            <h1 className='mt-[636px] text-center xs:font-[600] md:font-[900] xs:text-[40px] md:text-[60px] ' >Tailor-made Features </h1>
        </div>

        {/* OuterContainer */}
        <div className='sm:flex justify-between max-w-[1250px] pl-[30px] mx-auto smm:block smm:pl-0 '>
            {/* left container */}
            <div className='flex-col w-full '>
                
                
                <img className='mt-[90px] xs:ml-40 smm:mx-auto sm:ml-44' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px] text-center  mt-[24px]  text-black'> Robust workflow </p>
                <p className='text-[18px] max-w-[350px] mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

            </div>
            {/* Mid Container */}
            <div className='flex-col w-full '>
            <img className='mt-[90px] xs:ml-40 sm:ml-[170px] smm:mx-auto ' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px] text-center  mt-[24px] text-black'> Flexibility Easy </p>
                <p className='text-[18px] max-w-[350px]  mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

             
            </div>
            {/* Right Container */}
            <div className='flex-col w-full '>

               <img className='mt-[90px] xs:ml-40  sm:ml-[170px] smm:mx-auto' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px] text-center  mt-[24px] text-black'> User Friendly </p>
                <p className='text-[18px] max-w-[350px]  mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

           
            </div>

            

        </div>

         {/* OuterContainer */}
         <div className='sm:flex justify-between max-w-[1250px] pl-[30px] mx-auto smm:block'>
            {/* left container */}
            <div className='flex-col w-full '>
                
                
                <img className='mt-[90px] xs:ml-40 sm:ml-[170px] smm:mx-auto' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px]  text-center mt-[24px] text-black'> Multiple Layout </p>
                <p className='text-[18px] max-w-[350px] mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

            </div>
            {/* Mid Container */}
            <div className='flex-col w-full '>
            <img className='mt-[90px] xs:ml-40 sm:ml-[170px] smm:mx-auto' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px]  text-center mt-[24px] text-black'> Better Components </p>
                <p className='text-[18px] max-w-[350px]  mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

             
            </div>
            {/* Right Container */}
            <div className='flex-col w-full '>

               <img className='mt-[90px] xs:ml-40 sm:ml-[170px] smm:mx-auto' src='/vectors/verticle-light.png ' alt='none'/>                   
                <p className='font-[600] text-[24px]  text-center mt-[24px] text-black'> Well Organized </p>
                <p className='text-[18px] max-w-[350px]  mx-auto text-center max-h-[56px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.</p>

           
            </div>

            

        </div>  


        <div className='text-center'>
            <h1 className='xs:font-[600] md:font-[900] xs:text-[40px] md:text-[60px] mt-[170px] text-fonts' >How it Works</h1>
        </div>

        {/*Outer Container 2  */}
        <div className='sm:flex max-w-[1440px] w-full mx-auto  smm:block' >
            {/* Left Container */}
            <div className='flex-col sm:block '>
                <h1 className='xs:font-[500] md:font-[800] xs:text-[30px] md:text-[48px] sm:ml-7 md:ml-44 smm:ml-20 mt-[200px] text-fonts'> Sign Up</h1>
                <p className='sm:max-w-[570px] smm:max-w-[400px] w-full max-h-[250px] h-full font-normal xs:text-[14px] md:text-[20px] sm:ml-7 md:ml-44 smm:ml-20 mt-20 text-font_gray'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat vitae a consectetur dolor. Elementum habitant urna, ac quis laoreet urna purus.
                Aliquam at est vel auctor rhoncus et. Sit ac enim, malesuada mattis. Dignissim nibh augue posuer</p>
                <div className=''>
                    <button className='sm:ml-7 md:ml-44 smm:ml-20 smm:mt-10 rounded-[2px] px-[32px] py-[16px] text-white font-normal  text-[16px] bg-gradient-to-r from-c1 to-c3 ... ' >
                        Learn More</button>

                    <button className='sm:ml-3 md:ml-72 smm:ml-28 bg-transparent hover:bg-sky-500 ... font-extrabold text-[25px]'>&#8592;</button>
                    <button className='  rounded-[50%] max-w-[60px] ml- max-h-[60px] text-black text-[25px] bg-button_back  hover:bg-sky-700 ... font-extrabold px-[20px] py-[10px]'>&#8594;</button>

                </div>

            </div>
            {/* Right Container */}
            <div className='ml-[250px] mt-[200px] flex-col justify-end sm:block'>
                <img src='/vectors/Mobile.png' alt='none'></img>


            </div>
        </div>

        {/* Qoute */}
        <div className=' max-w-full sm:h-[350px] xs:h-[900px] smm:h-[500px] mt-[250px] px-[50px] py-[50px] bg-gradient-to-r from-c1 to-c3 ... mb-[15px] '>
            {/* Outer Blue */}
            <div className='smm:flex xs:block '>
                {/* Left Blue */}
                <div className='flex-col '>
                    <img className='smm:mt-[40px] sm:[50px] md:mt-[100px] md:ml-[200px] sm:ml-[20px] smm:ml-0 ' src='/pictures/dp.png' alt='none'></img>
                    
                </div>  

                {/* Mid Blue */}
                <div >
                    <p className='max-w-[183px] max-h-[28px] smm:mt-0 sm:mt-[30px] md:mt-[100px] smm:ml-[10px] sm:ml-[30px] md:ml-[25px] font-[600] text-[18px] text-url'>
                    Jenny Wilson
                    <br/>

                    <span className='text-[14px] '>Vice President</span>
                    </p>

                </div>
                <br></br>
                {/* Right Blue */}
                <div className='flex-col mx-auto'>
                    {/* ParaBlue */}
                    <div className='smm:ml-[125px] xs:ml-10' >
                        <img className=' smm:mt-0 sm:mt-[20px] md:mt-[60px]' src='/vectors/colon.png' alt='none'></img>

                        <p className='max-w-[766px] max-h-[128px] ml-[35px] font-[500] text-url '>
                        Eos enim quo est necessitatibus nobis consectetur rerum qui dolores. 
                        Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis
                        ex voluptatem odit. Repudiandae et et quod et. Enim sit delectus numquam. Molestiae aut voluptatem. 
                        Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis
                        </p>

                    </div>

                </div>

            </div>


        </div>


        {/* Brands */}
        <div>
            <div className='text-center mt-[160px] xs:font-[600] md:font-[900] xs:text-[40px] md:text-[60px]  text-heading_color'>
                <h1>Brands using our services</h1>
            </div>

            {/* Beand Outer */}
            <div className='sm:flex max-w-[715px] pt-[73px] sm:mx-auto smm:block smm:ml-24 '>\
                {/* Left Brand */}
                <div className='flex-col'>
                    <button >
                        <img className=' ml-[30px] '  src='/pictures/microsoft.png' alt='none'></img>
                    </button>
                    <button>
                        <img className='ml-[30px]' src='/pictures/fedex.png' alt='none'></img>
                    </button>

                </div>

                <div className='flex-col'>
                    <button>
                    <img className='ml-[30px]'  src='/pictures/oyo.png' alt='none'></img>
                    </button>
                    <button>
                    <img className='ml-[30px]' src='/pictures/book.png' alt='none'></img>
                    </button>
                </div>

                <div className='flex-col'>
                    <button>
                    <img className='ml-[30px]'  src='/pictures/walmart.png' alt='none'></img>
                    </button>
                    <button>
                    <img className='ml-[30px]' src='/pictures/amazon.png' alt='none'></img>
                    </button>
                </div>

                <div className='flex-col'>
                    <button>
                    <img className='ml-[30px]'  src='/pictures/airhub.png' alt='none'></img>
                    </button>
                    <button>
                    <img className='ml-[30px]' src='/pictures/google.png' alt='none'></img>
                    </button>
                </div>

            </div>
        </div>

        {/* Numbers Blue */}
        <div className='max-w-full xs:max-h-[1600px] smm:max-h-[360px] mt-[300px] pt-[80px] bg-gradient-to-r from-c1 to-c3 ...'>
            <h1 className='text-center xs:font-[600] md:font-[900] xs:text-[40px] md:text-[60px] text-url'>By the Numbers</h1>
            <p className='text-center text-[18px] mt-[20px] text-url'> 5 years, consistent quality and you get results. No matter what</p>


            {/* Numbers Outer */}
            <div className='max-w-full smm:flex xs:block  justify-center '>
                {/* numbers left */}
                <div className='flex-col w-[255px] xs:h-[150px] smm:h-[226px] xs:ml-9 smm:ml-0 bg-url rounded-[16px]  mt-[80px] shadow-lg'>
                    <h1 className='mt-[75px] font-[800] text-[48px] text-center text-gray_800'>
                       40+ 
                    </h1>
                    <p className='text-18px text-center font-normal text-font_gray'>
                        Happy Clients
                    </p>

                </div>
                <div className='flex-col w-[255px] xs:h-[150px] smm:h-[226px] bg-url rounded-[16px] ml-[32px] mt-[80px] shadow-lg'>
                    <h1 className='mt-[75px] font-[800] text-[48px] text-center text-gray_800'>
                       540+ 
                    </h1>
                    <p className='text-18px text-center font-normal text-font_gray'>
                        Projects Completed
                    </p>

                </div>
                <div className='flex-col w-[255px] xs:h-[150px] smm:h-[226px] bg-url rounded-[16px] ml-[32px] mt-[80px] shadow-lg'>
                    <h1 className='mt-[75px] font-[800] text-[48px] text-center text-gray_800'>
                       300 
                    </h1>
                    <p className='text-18px text-center font-normal text-font_gray'>
                        Dedicated Members
                    </p>

                </div>

                <div className='flex-col w-[255px] xs:h-[150px] smm:h-[226px] bg-url rounded-[16px] ml-[32px] mt-[80px] shadow-lg'>
                    <h1 className='mt-[75px] font-[800] text-[48px] text-center text-gray_800'>
                       25+ 
                    </h1>
                    <p className='text-18px text-center font-normal text-font_gray'>
                        Awards Won
                    </p>

                </div>


            </div>
        </div>

        {/* Builds */}
        <div className='pt-[260px] pb-[50px] '>
            <h1 className='xs;font-[600] md:font-[900] mx-auto text-center xs:text-[40px] md:text-[48px] text-new max-w-[792px] '>
            Build the next big thing and ship to market faster 
            <br/>
            <button className=' text-[18px] font-normal py-[18px] px-[32px] rounded-sm text-url bg-gradient-to-r from-c1 to-c3 ... mt-[60px]' > 
                    Download Now
                </button>

            </h1>
           
        </div>

         {/* Footer */}

         <Foot/>

    
    </div>





  );
}

export default Navbar