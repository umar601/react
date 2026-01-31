//when we have multiple componets called in app so make arr=[] and obj={key:"default"}
  //if we not do this it show erro 
  //normally it work not problem 
//state are important in react and it is used to render the dom when something chnage iny the variaable normally the dom not update when the change in variable but if we to rereder the dom ewhen specfic cahnge in variavle we use states

//hooks are some important functionalties provide to the components before these function base components the compnents are class based and we use the functionality of the class based components in class basee usng hooks there are almost 15 hooks and one of them is use state

//usestate is use to render dom and it return and array and in use sate we pass the itails sataget and from the array we destruct the variable we want to change and the updater function or condition we want to update

// let [varibleforupdate,updaterfuction it can variable or we can pass function also] = usesate(intialse);

//the state only render the dom only whem chnage in the variable otherwise it not re rednder the dom


//untill now we have covered three important features of react 
//componest
//props
//states and hooks

import {useState } from "react";

function Myfirst({nam,age=10,arr,ob}){

  
  let [count,setcount]=useState(0);

  function countupdater(){
    setcount(count+1)
  }

  const color=age>10?"red":"blue"

    
  return(
    <>

    <button onClick={countupdater}>cliick{count}</button>
    {/* <p style={{color:color}}>hello my first react app {nam} {age} </p>
     <ul>
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <h1>{ob.name}</h1> */}
    
    </>
  )
}


export default Myfirst;