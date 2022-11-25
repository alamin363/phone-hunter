import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import HomeCard from "./HomeCard/HomeCard";
import Carousel from "./Carousel/Carousel"
const Home = () => {
  const {} = useContext(AuthContext)
  const {data : categoryDAta = [], refetch,isLoading,error,} = useQuery({
    queryKey: ["brand"],
    queryFn: () => fetch("http://localhost:5000/category").then(data => data.json())
  });
  if (isLoading) {
    return <p>Loading ...</p>
  }
  return (
    <div>
    <Carousel categoryDAta ={categoryDAta }/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
        categoryDAta.map(phoneDAta => <HomeCard key={phoneDAta._id} phoneDAta={phoneDAta}/>)
        }
      </div>
    </div>
  );
};

export default Home;
