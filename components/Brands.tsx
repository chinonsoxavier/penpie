import { BrandsData } from '@/interface/exports'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='wrapper overflow-x-hidden ' >
        <div className='flex brands items-start gap-10 justify-start max-width overflow-y-scroll' >
           {BrandsData.map((brand,i)=>(
             <div key={i} className='flex-1 min-w-[100px] max-w-[100px] duration-700 opacity-75 hover:opacity-100'  >
                <Image src={brand.Image} alt="brand image" className='w-full h-full object-contain'/>
            </div>
           ))}
           </div>
    </div>
  )
}

export default Brands