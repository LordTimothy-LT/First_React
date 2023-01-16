import { useEffect, useState } from "react";
import Card from "../../../reuseable components/Card";
import "../styles/GridCard.css";




export default function GridCard(){
    const baseUrl = 'http://jsonplaceholder.typicode.com/photos';

    const[photos, setPhotos] = useState([])
    

    useEffect(()=>{
        axios.get(baseUrl)
        .then((response)=>{
            console.log("photos==> ", response.data)
            setPhotos(response.data);
        })
    }, [])

    return(
        <div className="grid_card">
            {photos.map((value)=>{
                <Card
                    image={item.url}
                    alt={"image json placeH"}
                    userId={item.userId}
                    id={item.id}
                />
            })}
        </div>


            //     <div>
            //     {photos.length !== 10 && (photos.map((value)=>))}
                //     <Card
                //     image={value.url}
                //     alt={"image json placeH"}
                //     userId={value.userId}
                //     id={value.id}
                // />
            // </div>
        )
}

