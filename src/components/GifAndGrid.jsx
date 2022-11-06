
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifAndGrid = ({cat}) => {

    const {images, isLoading} = useFetchGifs(cat);

    return (
        <>
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            <h3>{cat}</h3>
            <div className="card-grid">
                {
                    images.map((img)=>(
                        <GifItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </>
    )
};
