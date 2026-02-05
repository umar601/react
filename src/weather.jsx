import { useState,useEffect} from "react"
export default function Dogimages(){

    let [images,setImages] = useState("NULL");
    let [loading,setloading]=useState(false)



    async function fetchingapi(){

    setloading(true)
    let res= await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(res)
    let result=await res.json()
    setImages(result.message);
    setloading(false)
    
    }
  
    return(
        <>

        <button onClick={fetchingapi}>weather app</button>
        {loading?"loading...":<img src={images} alt="" />}
        <p></p>
        
        </>
    )



}