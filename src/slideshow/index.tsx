import { Carousel, CarouselItem } from "../carousel";
import { useRef } from "react";
import { CarouselHandle } from "../carousel/carousel";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { getcolor } from "../utils";

const SlideShow = ({ color }: { color?: string }) => {
  const carouselRef = useRef<CarouselHandle>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        <Carousel ref={carouselRef}>
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return (
                <CarouselItem key={index}>
                  <div
                    style={{
                      height: "200px",
                      width: "200px",
                      marginRight: "10px",
                      backgroundColor: getcolor(),
                    }}
                  ></div>
                </CarouselItem>
              );
            })}
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "end",
          padding: "12px 0px",
        }}
      >
      
          <button
            onClick={() => {
              carouselRef.current?.panLeft();
            }}
            style={{ marginRight: "3px", padding: "3px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.5)", }}
          >
             <MdOutlineArrowBackIosNew size={20} />
          
          </button>
      
     
          <button
            onClick={() => {
              carouselRef.current?.panRight();
            }}
            style={{ marginRight: "3px", padding: "3px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.5)", }}
          >
             <MdOutlineArrowForwardIos size={20} />
          </button>
        
      </div>
    </div>
  );
};

export default SlideShow;
