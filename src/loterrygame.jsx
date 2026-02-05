import { useState } from "react"

export default function Lottery(){

    let [lottery,setLottery]=useState(0);
    let [messagee,setMessagee]=useState("");
    let found=false

    function winLottery(num){   
        let temp = num;
        let result=0
        
        while(temp>0){
            let digit=temp%10;
            result=result+digit;
            temp=Math.floor(temp/10)
        }

        console.log(result)

        if(result==15){
            found=true;
        }

        setMessagee(found?"win":"")   
    }

    function submit(){
        let randomNum=Math.floor(Math.random()*1000) 
        setLottery(randomNum)
        winLottery(randomNum)   
    }
    
    return(
        <>
        <h1>loterry {messagee}</h1>
        <p>lotter ticket = {lottery}</p>
        <button type="submit" onClick={submit}>get new ticket</button>
        </>
    )
}
