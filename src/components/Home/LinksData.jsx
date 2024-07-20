import React from 'react'
import {links} from "../../Dummy/Data"
import { FaArrowRight } from "react-icons/fa";

const LinksData = () => {
    
  return <>
    <div>
        <ul className='w-full md:flex items-center justify-center gap-5  '>
            {links.map((link,ind)=>(
                <li key={ind} className='cursor-pointer md:py-0 py-5 first:text-gray-400 hover:text-gray-400 duration-200 group text-[18px] px-[12px]'>
                    {link.title}
                    {link.nested && 
                    <div className={`px-8 py-5 w-72 absolute  rounded-lg bg-white hidden group-hover:block`}>
                      {link.nested.map((ele,ind)=> (
                        <div key={ind} className='text-gray-800 py-4 border-b last:border-b-0 flex items-center justify-between par'>
                          <div className=''>
                            <h2 className='text-[18px]'>{ele.head}</h2>
                            <p className='text-[16px] text-gray-400'>{ele.p}</p>
                          </div>
                          <span className='text-[14px] chill'><FaArrowRight/></span>
                        </div>
                      ))}
                    </div>
              }
                </li>
            ))}
        </ul>
    </div>
  </>
  
}

export default LinksData