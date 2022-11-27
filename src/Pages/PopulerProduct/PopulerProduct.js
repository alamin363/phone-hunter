import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import ImageGallery from "react-image-gallery";
import { AuthContext } from "../Context/ContextProvider";
import Loader from "../Loader/Loader";
import Upcomming from "./Upcomming/Upcomming";

const PopulerProduct = () => {
  const { user, loader } = useContext(AuthContext);
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["image"],
    queryFn: () =>
      fetch("http://localhost:5000/product").then((res) => res.json()),
  });
  if (isLoading || loader) {
    return <Loader />;
  }
  const images = [
    {
      original: product[0]?.image,
      thumbnail: product[0]?.image
    },
    {
      original: product[1]?.image,
      thumbnail: product[1]?.image,
    },
    {
      original: product[2]?.image,
      thumbnail: product[2]?.image,
    },
    {
      original: product[3]?.image,
      thumbnail: product[3]?.image,
    },
    {
      original: product[4]?.image,
      thumbnail: product[4]?.image,
    },
    {
      original: product[5]?.image,
      thumbnail: product[5]?.image,
    },
    {
      original: product[6]?.image,
      thumbnail: product[6]?.image,
    },
    {
      original: product[7]?.image,
      thumbnail: product[7]?.image,
    },
    {
      original: product[8]?.image,
      thumbnail: product[8]?.image,
    },
    {
      original: product[9]?.image,
      thumbnail: product[9]?.image,
    },
    {
      original: product[10]?.image,
      thumbnail: product[10]?.image,
    },
    {
      original: product[11]?.image,
      thumbnail: product[11]?.image,
    },
    {
      original: product[12]?.image,
      thumbnail: product[12]?.image,
    },
    {
      original: product[13]?.image,
      thumbnail: product[13]?.image,
    },
    {
      original: product[14]?.image,
      thumbnail: product[14]?.image,
    },
    {
      original: product[15]?.image,
      thumbnail: product[15]?.image,
    },
  ];
  
  return (
    <div>
      <ImageGallery items={images} />
      <Upcomming />
    </div>
  );
};

export default PopulerProduct;
