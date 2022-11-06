import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (cat) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=> {
        const newImages = await getGifs(cat);
        setImages(newImages);
        setIsLoading(false);
    }
   
    useEffect(()=>{
        getImages();
    },[])
    
    return{
        images,
        isLoading,
    }
}
