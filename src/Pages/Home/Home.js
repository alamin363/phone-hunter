import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import HomeCard from "./HomeCard/HomeCard";
import Carousel from "./Carousel/Carousel"
import Ads from "./Ads/Ads";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Loader from "../Loader/Loader";
const Home = () => {
  const {} = useContext(AuthContext)
  const {data : categoryDAta = [], refetch,isLoading,error,} = useQuery({
    queryKey: ["brand"],
    queryFn: () => fetch("https://used-phone-resale-server-side.vercel.app/category").then(data => data.json())
  });
  const {data : Advertised = [], refetch : reloade ,isLoading : loading} = useQuery({
    queryKey: ["Advertise"],
    queryFn: () => fetch("https://used-phone-resale-server-side.vercel.app/Advertise").then(data => data.json())
  });
  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
       <Carousel categoryDAta ={categoryDAta }/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
        categoryDAta.map(phoneData => <HomeCard key={phoneData._id} phoneData ={phoneData}/>)
        }
      </div> 
     
     <div>
     { Advertised.length > 0 && <>
     <div className="divider text-center text-primary">ADs Product <FaArrowAltCircleDown className='w-5/12'/></div>
     <div className="grid grid-cols-1 md:grid-cols-2">
      {
        Advertised.map(ads => <Ads ads={ads}/>)
      }
     </div>
     </>
     }
     </div>
    </div>
  );
};

export default Home;
