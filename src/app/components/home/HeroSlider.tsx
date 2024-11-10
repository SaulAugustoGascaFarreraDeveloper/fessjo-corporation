'use client'

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSlider() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [api])

  const images = [
    "Maquinaria/1.jpeg?height=400&width=600",
    "Maquinaria/2.jpeg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const imagesFiles = Array(14).fill(0).map((_,index) => 
    `Maquinaria/${index+1}.jpeg?height=400&width=600`
  )

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent className="p-1">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {imagesFiles.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Imagen {current} de {count}
        </div>
      </CardContent>
    </Card>
  )
}