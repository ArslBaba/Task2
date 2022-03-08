import React from 'react'
import Head from '../Head/Header'
import Foot from '../Head/Footer'

const inner = () => {
  return (
    <div>
        
        <Head/>
        
        {/* main contents */}
        <div className=' w-full'>
            {/* Main Container */}
            <div className='md:flex xs:block '>
                {/* left container */}
                <div className='xs:block md:flex-col pt-[60px]'>
                    <p className='ml-20 mt-[48px] '>Kenban Software</p>
                    <h1 className='ml-20 xs:max-h-[200px] md:max-h-[36px]  text-gray_800 font-[800] text-[36px] '>
                        Trello x Webber
                    </h1>
                    <p className=' ml-20 text-leftx mt-[20px] max-w-[480px] xs:max-h-[200px] md:max-h-[48px]  text-[16px] font-normal'>
                    Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                    </p>

                    <span className='md:flex xs:block'>
                        <p className=' ml-20 mt-[20px] max-w-[480px] max-h-[48px]  text-[16px] font-normal'>
                        Industry: Technology
                        </p>
                        
                        <p className=' xs:ml-20 md:ml-24 mt-[12px] max-w-[480px] max-h-[48px]  text-[16px] font-normal'>
                        Use case: Developer operations
                        </p>
                    </span>
                    <span className='md:flex xs:block'>
                        <p className=' ml-20 mt-[12px] max-w-[480px] max-h-[48px]  text-[16px] font-normal'>
                        Since: 2018 
                        </p>
                        <p className=' xs:ml-20  md:ml-40 mt-[12px] max-w-[480px] max-h-[48px]  text-[16px] font-normal'>
                        Package: Enterprise+ 
                        </p>
                    </span>

                    <p className='ml-20 mt-[120px] font-extrabold text-[28px] text-gray_800'>The Details</p>

                    <p className='max-w-[670px] max-h-[800px] xs:mx-auto md:ml-20 mt-[32px] xs:text-[14px] md:text-[16px] text-gray_800'>It is a long established fact that a reader will be distracted by the readable.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                        alteration in some form, 
                        by injected humour, 
                        or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary 
                        of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
                        looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                        or non-characteristic words etc.</p>
                        
                    <img className='xs:mx-auto md:ml-20 mt-[20px] rounded-[4px] w-10/12 h-auto' src='/pictures/Rectangle44.png'></img>
                    <p className='ml-20 mt-[20px]'>
                         Breakdown of milestones
                    </p>  

                    <p className='max-w-[670px] max-h-[740px] xs:mx-auto md:ml-20 mt-[32px] text-[16px] text-gray_800'>
                        - Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie. <br/>
                        - Donec iaculis erat in vulputate venenatis.<br/>
                        - Vestibulum et velit et metus commodo iaculis.<br/>
                        - Sed et urna a felis accumsan commodo vel vel nibh.<br/>
                        - Praesent sollicitudin nulla non sollicitudin varius.<br/>
                        - Integer convallis orci sed diam volutpat feugiat.<br/>
                        - Donec posuere arcu non semper maximus.<br/>
                    </p>  
                    <img className='xs:mx-auto md:ml-20 mt-[20px] rounded-[4px] w-10/12 h-auto' src='/pictures/Rectangle45.png' alt='none'>
                    </img>

                    <p className='max-w-[670px] max-h-[740px] xs:mx-auto md:ml-20 mt-[32px] text-[16px] text-gray_800 pb-[100px]'>
                        It is a long established fact that a reader will be distracted by the readable.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                        generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum 
                        which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>

                {/* Right Container */}
                <div className='flex-col xs:mx-auto md:ml-[150px] max-w-[500px] text-left xs:mt-[50px] md:pt-[10px]'>
                    <img className='rounded-[2px] w-10/12 h-auto mx-auto' src='/pictures/6.png'></img>
                    {/* right inner */}
                    <div className='max-w-[605px] max-h-[620px] bg-gradient-to-r from-c1 to-c3 ... mt-[52px]'>
                        <p className='pt-[40px] pl-[32px] font-extrabold text-[24px]  text-url'>Get Webber for your organization</p>
                        <p className='xs:ml-[20px] md:ml-[32px] max-w-[485px] max-h-[206px] text-[16px] font-normal text-url'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have 
                            suffered alteration in some form, 
                            by injected humour, or randomised words which don't look.</p>

                        <button className='ml-[32px] mt-[60px] mb-[40px] px-[32px] py-[16px] bg-url rounded-2px font-[500] text-[16px] text-cyan_700'>Start Trial</button>    
                        <button className='ml-[16px] xs:mt-2 md:mt-[60px] mb-[40px] px-[32px] py-[16px] bg-gradient-to-r from-c1 to-c3 ... text-white '>Contact Sales</button>

                    </div>

                </div>

            </div>

        </div>

        {/* section */}

        <section className=' max-w-[2000px] max-h-[3034px] bg-footer mt-[50px] pb-[50px]'>
            {/* section main */}
            <div className=' md:flex xs:block'>
                {/* Section left */}
                <div className='flex-col pl-[80px] pt-[60px]'>
                    <span className=' font-extrabold text-[28px] text-gray_800'>
                      More Case Studies
                    </span>
                    <br></br>
                    <img className='  mt-[47px] rounded-[2px] w-10/12 h-auto ' src='/pictures/swiss.png'></img>
                    <p className='mt-[25px] font-[500] text-[14px] text-gray_600'>
                        Kenban Software
                    </p>
                    <h1 className='mt-[25px] font-[800] text-[28px] text-gray_800'>
                        Swiss Airline
                    </h1>
                    <p className='max-w-[250px] max-h-[60px]  text-[14px] font-[400]'>
                    Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                    </p>

                    <a href='#read' className='font-sans font-[500] text-[14px] text-cyan_700'>
                    Read Story->
                    </a>


                </div>

                {/* left mid */}
                <div className=' flex-col pt-[60px] ml-20'>
                <span className=' font-extrabold text-[28px] text-gray_800'>
                      
                    </span>
                    <br></br>
                    <img className='  mt-[47px] rounded-[2px] w-10/12 h-auto ' src='/pictures/gutswaki.png'></img>
                    <p className='mt-[25px] font-[500] text-[14px] text-gray_600'>
                        Kenban Software
                    </p>
                    <h1 className='mt-[25px] font-[800] text-[28px] text-gray_800'>
                        Kling ans Sons
                    </h1>
                    <p className='max-w-[250px] max-h-[60px]  text-[14px] font-[400]'>
                    Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                    </p>

                    <a href='#read' className='font-sans font-[500] text-[14px] text-cyan_700'>
                    Read Story->
                    </a>

                </div>
                {/* right mid */}
                <div className=' flex-col pt-[60px] ml-20'>
                <span className=' font-extrabold text-[28px] text-gray_800'>
                      
                    </span>
                    <br></br>
                    <img className='  mt-[47px] rounded-[2px] w-10/12 h-auto' src='/pictures/trello.png'></img>
                    <p className='mt-[25px] font-[500] text-[14px] text-gray_600'>
                        Kenban Software
                    </p>
                    <h1 className='mt-[25px] font-[800] text-[28px] text-gray_800'>
                    Cassin - Zemlak
                    </h1>
                    <p className='max-w-[250px] max-h-[60px]  text-[14px] font-[400]'>
                    Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                    </p>

                    <a href='#read' className='font-sans font-[500] text-[14px] text-cyan_700'>
                    Read Story->
                    </a>

                </div>

                {/* right  */}
                <div className=' flex-col pt-[60px] ml-20'>
                <span className=' font-extrabold text-[28px] text-gray_800'>
                      
                    </span>
                    <br></br>
                    <img className='  mt-[47px] rounded-[2px] w-10/12 h-auto' src='/pictures/adobe.png'></img>
                    <p className='mt-[25px] font-[500] text-[14px] text-gray_600'>
                        Kenban Software
                    </p>
                    <h1 className='mt-[25px] font-[800] text-[28px] text-gray_800'>
                    Russel - Kertzmann
                    </h1>
                    <p className='max-w-[250px] max-h-[60px]  text-[14px] font-[400]'>
                    Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                    </p>

                    <a href='#read' className='font-sans font-[500] text-[14px] text-cyan_700'>
                    Read Story->
                    </a>

                </div>
                

            </div>


        </section>

        
        {/* Footer */}

      <Foot/>

    </div>
  )
}

export default inner