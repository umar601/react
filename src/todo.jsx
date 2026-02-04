import { useState } from "react"
export default function Todo(){

    let [formData,setData]=useState({work:""});
    let [arr,setarr]=useState([]);

    function onchange(event){

        setData({...formData,[event.target.name]:event.target.value});
    }

    function submit(event){

        event.preventDefault();
        // console.log(formData.work)
        // console.log(event.target.work.value)
         setarr([...arr,event.target.work.value])
        event.target.work.value="";
        // console.log("Added")
        // console.log(arr)
    }



    return(
        <>
        <div>
            <h1>tasks</h1>
            <p>{arr.map((el,index)=>{
            return <li key={index}>{el}</li>
            })}</p>
        </div>
        <form action="" onSubmit={submit}>
            <input type="text" name="work" id="" value={formData.work} onChange={onchange}/>
            <br />
            <button>add task</button>
        </form>
        
        
        </>

    )
}