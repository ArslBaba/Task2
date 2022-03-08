import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { FaBeer } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import Navbar from '../navbar'





const Header = () => {

  
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const location = useLocation();
  console.log(location);

  return (

    
    <div>
      
        
        <div className='flex w-full justify-between   '>
            
            {/* logo */}
            <span className ='xs:ml-10 md:ml-[80px] , mt-10 , flex-col'>
                <img src='/pictures/Logo.png'></img>
                <p className='text-xl , pl-0.5 , font-bold , '>Webber
                </p>
                </span>
           <span className=' xs:flex-col   text-[40px]   md:w-0 md:h-0 float-right mt-10 mr-3 md:hidden'>
              <a onClick={() => setShowMediaIcons(!showMediaIcons)}>  
                <GiHamburgerMenu/>
              </a>
            </span>
            

            

          
            <div className='mt-20  md:flex-row text-center xs:hidden md:block'>
                   <Link to={'/'}>  
                    {location.pathname == '/' ? <span className='ml-5 underline' >Overview</span> : <span className='ml-5 ' >
                       Overview
                    </span>}                      
                    </Link>
                   <Link to={'/faq'}>
                   {location.pathname == '/faq' ? <span className='ml-5 underline' >Pricing</span> : <span className='ml-5' >Pricing</span> }
                   </Link>
                   <Link to={'/cases'}> 
                   {location.pathname == '/cases' ? <span className='ml-5 underline' >Case Studies</span>: <span className='ml-5' >Case Studies</span> } </Link>
                   <Link to={'/inner'}> 
                   {location.pathname == '/inner' ?<span className='ml-5 underline' >FAQ</span> : <span className='sm:ml-5 sm:mt-20 smm:ml-32 smm:mt-[10px]' >FAQ</span>} 
                   </Link> 
                
            </div>
            <div className='xs:text-center smm:float-right mr-[10px] mt-11 xs:hidden md:block'>
                <button className=' px-10 py-3 rounded-[2px] bg-cyan rounded-xm font-sans '>Sign In</button>
            </div>             
        </div>  

            
            <div className={showMediaIcons?' xs:block text-center mt-5 bg-black text-white text-[24px] pb-5  md:hidden'  : 'xs:hidden'}>
              
                   <Link to={'/'}>    
                     {location.pathname == '/' ? <span className='ml-5 underline' >Overview</span> : <span className='ml-5 ' >
                       Overview
                      </span>}                      
                    </Link>
                    <br></br>
                   <Link to={'/faq'}>
                   {location.pathname == '/faq' ? <span className='ml-5 underline' >Pricing</span> : <span className='ml-5' >Pricing</span> }
                   </Link>
                   <br></br>
                   <Link to={'/cases'}> 
                   {location.pathname == '/cases' ? <span className='ml-5 underline' >Case Studies</span>: <span className='ml-5' >Case Studies</span> } </Link>
                   <br></br>
                   <Link to={'/inner'}> 
                   {location.pathname == '/inner' ?<span className='ml-5 underline' >FAQ</span> : <span className='ml-5' >FAQ</span>} 
                   </Link> 
                   <br></br>
                   <button className=' ml-[15px] px-10 py-3 rounded-[2px] bg-cyan rounded-xm font-sans text-black'>Sign In</button>
                </div>
             
        </div>
   
  )
}

export default 
Header