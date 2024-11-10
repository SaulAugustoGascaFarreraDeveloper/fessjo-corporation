'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Phone } from 'lucide-react'

const MachineSales = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: "/Sales/1.png", alt: "sale1" },
    { src: "/Sales/2.png", alt: "sale2" },
    { src: "/Sales/3.png", alt: "sale3" },
    { src: "/Sales/4.png", alt: "sale4" },
    { src: "/Sales/5.png", alt: "sale5" },
    { src: "/Sales/6.png", alt: "sale6" },
    { src: "/Sales/7.png", alt: "sale7" },
    { src: "/Sales/8.png", alt: "sale8" },
    { src: "/Sales/9.png", alt: "sale9" },
    { src: "/Sales/10.png", alt: "sale10" },
    { src: "/Sales/11.png", alt: "sale11" },
    { src: "/Sales/12.png", alt: "sale12" },
  ]

  return (
    <div className='flex items-center flex-col gap-3 w-full min-h-screen py-8'>
      <h2 className='font-bold text-lg'>Maquinaria en Venta</h2>
        <p className='md:text-base text-sm'>Para mas infomación ponte al contacto al número: <br className='md:hidden block' /> (+52) 1 81 1638 5859</p>
      <div className="grid md:grid-cols-4 grid-cols-3 md:gap-6 gap-1 md:p-8 p-1">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="cursor-pointer md:hover:border-4 hover:border-2 hover:border-black hover:rounded-lg md:hover:p-2 hover:p-0">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  className='hover:border-2 hover:border-black'
                />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[40vw] sm:max-h-[40vh]">
              <div className="relative w-full h-full">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default MachineSales