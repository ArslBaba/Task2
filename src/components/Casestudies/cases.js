import React from 'react'

import Head from '../Head/Header'

function cases() 
{
  return (
    
    <div className='relative'>         
        
        {/* Header */}
        <Head/>

        {/* Main Contents */}
        <div className='pt-[100px] p-[20px] bg-back '>
            {/* Case Logo */}
            <div>
                <h1 className='xs:font-[600] md:font-[900] xs:text-[50px] md:text-[96px] text-center text-fonts'>Case Studies</h1>
                <p className='max-w-[800px] xs:max-h-[200px] md:max-h-[50px] text-center mx-auto font-normal text-[20px] text-font_gray'>See how leading organizations and freelance developers have used Webber 
                    to tackle different use cases and get ahead of the competition</p>
            </div>

            {/* dropdown */}
            
                <div className='  border-2 max-w-[406px] xs:max-h-[200px] md:max-h-[64px] rounded-[2px] mx-auto   mt-[20px] p-[10px]'>
                    
                    {/* outer Container */}
                   <div className='flex justify-between'>
                       {/* left */}
                       <span className='flex-col'>
                        <label   for='Regions'>Regions:</label>
                            <select name='Regions' id='Regions'>
                                <option value={'All'}>ALL</option>
                                
                                <option value={'None'}>None</option>
                            </select>
                   
                       </span>
                       {/* mID */}
                       <span className='flex-col'>
                            
                            <label   for='Industry'>Industry:</label>
                            <select name='Industry' id='Industry'>
                                <option value={'All'}>ALL</option>
                                
                                <option value={'None'}>None</option>
                            </select>
                       </span>

                       {/* right */}
                      <span className='flex-col'>
                            
                            <label   for='Type:'>Type:</label>
                            <select name='Type:' id='Type:'>
                                <option value={'All'}>ALL</option>
                                
                                <option value={'None'}>None</option>
                            </select>
                   
                      </span>
                   </div>
                        
                </div>
        

            {/* Hold Container */}
            <div className='md:flex w-full xs:block '>
                {/* Internal Container left */}
                <div className='flex-1 xs:mx-auto md:ml-[179px] mt-[218px]'>
                    <img className='rounded-[2px] w-10/12 h-auto' src='/pictures/adobe.png' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Technology Saas</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Adobe System Corporation</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Adobe has leveraged Webber to consolidate it’s diverse <br/> range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>    
                </div>

                {/* internal container right */}
                <div className='flex-1 xs:mx-auto  md:ml-[80px] mt-[118px]'>
                    <img className='rounded-[2px]w-10/12 h-auto' src='/pictures/trello.png ' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Kenban Software</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Trello</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>

                </div>

            </div>

            
            {/* Hold Container */}
            <div className='md:flex w-full xs:block'>

                 {/* Internal Container left */}
                 <div className='flex-1 xs:mx-auto  md:ml-[179px] mt-[218px]'>
                    <img className='rounded-[2px] w-10/12 h-auto' src='/pictures/gutswaki.png' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Technology Saas</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Gutkowski, Schuppe and Pagac</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Adobe has leveraged Webber to consolidate it’s diverse <br/> range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>    
                </div>

                {/* internal container right */}
                <div className='flex-1 xs:mx-auto md:ml-[80px] mt-[118px]'>
                    <img className='rounded-[2px] w-10/12 h-auto' src='/pictures/swiss.png' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Airline</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Swiss Airline</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>

                </div>


            </div>


            <div className='xs:block md:flex w-full pb-[50px]'>

                {/* Internal Container left */}
                <div className='flex-1 xs:mx-auto md:ml-[179px] mt-[218px]'>
                    <img className='rounded-[2px] w-10/12 h-auto' src='/pictures/systems.png' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Technology Saas</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Adobe System Inc</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Adobe has leveraged Webber to consolidate it’s diverse <br/> range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>    
                </div>

                {/* internal container right */}
                <div className='flex-1 xs:mx-auto md:ml-[80px] mt-[118px]'>
                    <img className='rounded-[2px] w-10/12 h-auto' src='/pictures/mann.png' alt='none'></img>
                    <br/>
                    <p className='font-[500] text-[14px] text-left text-fonts'>Kenban Software</p>
                    <h3 className='font-[800] text-[28px] text-gray_800'>Mann and Sons</h3>
                    <p className='box-border font-normal text-[16px] text-gray_600'>Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
                    <a  className='font-[500] text-[14px] text-cyan_700' href="#readStory">Read Story-> </a>

                </div>


            </div>
            

        </div>
    </div>


    
  )
}

export default cases