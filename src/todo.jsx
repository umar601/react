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

    function clickcheck(index){
        for(let i=index;i<arr.length-1;i++){
            arr[i]=arr[i+1];

        }
        arr.length--
        setarr([...arr])
    }



    return(
        <>
        <div>
            <h1>tasks</h1>
            <ol>{arr.map((el,index)=>{
            return <li key={index} onClick={()=>{clickcheck(index)}}>{el}</li >
            })}</ol>
        </div>
        <form action="" onSubmit={submit}>
            <input type="text" name="work" id="" placeholder="enter the task" value={formData.work} onChange={onchange} required/>
            <br />
            <button>add task</button>
        </form>
        
        
        </>

    )
}