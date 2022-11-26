import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import HomeCard from "./HomeCard/HomeCard";
import Carousel from "./Carousel/Carousel"
import Ads from "./Ads/Ads";
const Home = () => {
  const {} = useContext(AuthContext)
  const {data : categoryDAta = [], refetch,isLoading,error,} = useQuery({
    queryKey: ["brand"],
    queryFn: () => fetch("http://localhost:5000/category").then(data => data.json())
  });
  console.log()
  if (isLoading) {
    return <p>Loading ...</p>
  }
  console.log(categoryDAta);
  return (
    <div>
       {/* <Carousel categoryDAta ={categoryDAta }/> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
        categoryDAta.map(phoneData => <HomeCard key={phoneData._id} phoneData ={phoneData}/>)
        }
      </div> 
     <Ads />

    </div>
  );
};

export default Home;
