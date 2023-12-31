
import { Carousel, CarouselItem } from "../carousel";
import {useRef} from 'react'
import { CarouselHandle } from "../carousel/carousel";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import {getcolor} from './utils'

const SlideShow=({color}:{color?:string})=>{

    const carouselRef=useRef<CarouselHandle>(null)

 
    return (
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex-1 ">
          <Carousel ref={carouselRef}>
            {Array(8)
              .fill(0)
              .map((_, index) => {
                return (
                  <CarouselItem key={index}>
                    <div
                      className="h-[200px] w-[200px] mr-[10px] "
                      style={{ backgroundColor: getcolor() }}
                    ></div>
                  </CarouselItem>
                );
              })}
          </Carousel>
        </div>
        <div className="flex flex-row justify-end py-3">
            <div></div>
          <Arrow highlightcolor={color} onClick={() => {carouselRef.current?.panLeft()}} className="mr-3" />
          <Arrow highlightcolor={color} direction="right" onClick={() => {carouselRef.current?.panRight()}} />
        </div>
      </div>
    );
}


export default SlideShow