function Myfirst({nam,age=10,arr,ob}){

  //when we have multiple componets called in app so make arr=[] and obj={key:"default"}
  //if we not do this it show erro 
  //normally it work not problem 

    
  return(
    <>
    <p>hello my first react app {nam} {age} </p>
     <ul>
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <h1>{ob.name}</h1>
    
    </>
  )
}


export default Myfirst;