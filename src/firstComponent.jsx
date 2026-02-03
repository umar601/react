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

//use effect is also very important in react and its used to show the thing first time on the screen during rerendering or even rendering and we can also use it for particular use state and and if we want for all we pass empty array

//use effect first of all we import from react and then useeffect have two parameters one is the function and other is argument we to apply on the use effect and pass it on the array and if the array is empty it means is apply to all 

//the practical example of the use effect is we want to show loading bar untill the data is fetched from the data base and it like for the asyncronus functions and apply on the things we want to show only one time on the start or particular state change time 

//we write file name as jsx because we wirte html inside javascipt and this covert into virtual dom using internal compliler called bebble whcih covert it into to virtual doma 

//during rerendrring only that part of pages renrender chnage not the whole page 
import {useState,useEffect} from "react";

function Myfirst({nam,age=10,arr,ob}){

  let [formData,setData] = useState({username:"umar",age:0,password:"mm"});

  useEffect(()=>{
    console.log("use effec")
  },[formData])

  function changeData(event){
  
    // console.log(event.target.name)
    // console.log(event.target.value)

    setData({...formData,[event.target.name]:event.target.value})
    
  }

  function submitform(event){
    event.preventDefault();
    event.target.username.value=""
    event.target.age.value=0
    event.target.password.value=""
  }
  
  // let [count,setcount]=useState(0);

  // function countupdater(){
  //   setcount(count+1)
  // }

  // const color=age>10?"red":"blue"

    
  return(
    <>

    <form action="" onSubmit={submitform}>
      <label htmlFor="username">enter tour username</label>
      <input type="text" name="username" id="username" placeholder="username" value={formData.username} onChange={changeData}/>
      <br />
      <br />
      <br />
      <label htmlFor="age">enter tour age</label>
      <input type="number" name="age" id="age" placeholder="age" value={formData.age} onChange={changeData}/>
      <br />
      <br />
      <br />
      <label htmlFor="password">enter tour password</label>
      <input type="text" name="password" id="password" placeholder="password" value={formData.password} onChange={changeData}/>
      <br />
      <br />
      <button>submit</button>
    </form>



    {/* <button onClick={countupdater}>cliick{count}</button>
    {/* <p style={{color:color}}>hello my first react app {nam} {age} </p>
     <ul>
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <h1>{ob.name}</h1> }*/}
    
    </>
  )
}


export default Myfirst;