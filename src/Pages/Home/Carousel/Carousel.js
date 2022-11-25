import React from "react";

const carousel = ({categoryDAta }) => {
  console.log(categoryDAta[0].data[0].image);
  return (
    <div>
      <div className="carousel relative w-full h-[500px]">
        <div id="item1" className="carousel-item relative w-full">
          <img src={categoryDAta[0].photo} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item4" className="btn btn-circle">
              ❮
            </a>
            <a href="#item2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img src={categoryDAta[0].data[1].image} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item1" className="btn btn-circle">
              ❮
            </a>
            <a href="#item3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img src={categoryDAta[1].photo} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item2" className="btn btn-circle">
              ❮
            </a>
            <a href="#item4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="item4" className="carousel-item relative w-full">
          <img src={categoryDAta[1].data[2].image} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item3" className="btn btn-circle">
              ❮
            </a>
            <a href="#item5" className="btn btn-circle">
              ❯
            </a>
          </div>
          </div>
        <div id="item5" className="carousel-item relative w-full">
          <img src={categoryDAta[2].photo} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item4" className="btn btn-circle">
              ❮
            </a>
            <a href="#item6" className="btn btn-circle">
              ❯
            </a>
          </div>
          </div>

        <div id="item6" className="carousel-item relative w-full">
          <img src={categoryDAta[2].data[1].image} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item5" className="btn btn-circle">
              ❮
            </a>
            <a href="#item1" className="btn btn-circle">
              ❯
            </a>
          </div>

        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </div>

  );
};

export default carousel;
