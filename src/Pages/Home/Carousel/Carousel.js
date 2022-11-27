import React from "react";

const carousel = ({categoryDAta }) => {
  console.log(categoryDAta)
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10  top-3/4 font-mono text-white">
            <h1>According to Samsung's founder, the meaning of the Korean hanja word Samsung (三星) is "three stars". The word "three" represents something "big, numerous and powerful",[13] while "stars" means "everlasting" or "eternal", like stars in the sky</h1>
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img src={categoryDAta[1].photo} className="w-full" alt=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item1" className="btn btn-circle">
              ❮
            </a>
            <a href="#item3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10  top-3/4 font-mono text-black">
            <h1>commonly known as Xiaomi and registered as Xiaomi Inc., is a Chinese designer and manufacturer of consumer electronics and related software, home appliances, and household items. Behind Samsung, it is the second largest manufacturer of smartphones in the world, most of which run the MIUI operating system. The company is ranked 338th and is the youngest company on the Fortune Global 500</h1>
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img src={categoryDAta[2].photo} className="w-full" alt=""/>
          <div className="absolute flex justify-between z-10 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item2" className="btn btn-circle">
              ❮
            </a>
            <a href="#item1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10  top-3/4 font-mono text-white">
            <h1>Vivo Communication Technology Co. Ltd. (styled as vivo) is a Chinese multinational technology company headquartered in Dongguan, Guangdong that designs and develops smartphones, smartphone accessories, software and online services. The company develops software for its phones, distributed through its V-Appstore, with iManager included in their proprietary, Android-based operating system, Origin OS in Mainland China, and Funtouch OS elsewhere. Vivo is an independent company and develops its own products. It has 10,000 employees, with research and development centers in Shenzhen, Guangdong, and Nanjing, Jiangsu</h1>
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
      </div> 
    </div>

  );
};

export default carousel;
