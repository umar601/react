//javasscript library for user interfaces created by facebook and matained by facebook

//documentation react.dev

//component is individula piece of code and it is resuable and we can understand it as function we can only use it when we call it and we can reuse it as many times and calling componennt is called rendering and every thing in react is consider as component

//these component form hirearchy and we use hirearchy to make the whole page the compnent may vary from single button the whole page

//atlasian website frontend is based on react and its example of react

//component have its own logic own html and own styling 

//the react code is written in jsx and we write html in js and if we write in js it throw error 

//jsx stands for javascript extension sytax and allow us to write html inside our js and it not real javscript but it internally convert to js using tool called bebble and it convert in js 

//jsx allow us to write the html in js and the jsx is not real js and its converted by bebble and they make virtual dom and help jsx to js

//npm create@vite to setup local environment 

//we use vite instead of create react app becuase vite is fast as compre to create react app but most of the documentations are in create react app but now onwardss people follow vite 

//to run code npm run dev


//understnad the app

//public the images 

//src folder inside

//assets only have image of reatc

//app.jsx and app.css app is component and found in every react app the all component render in app component and its styling is written in app.css 

//index.html is the main page the main page display 

//index.html have two thing link main.jsx and one div with class root and our app is compenent is render throught this div this div is out entire page 

//main.jsx  we accessing our root element from the index.html and the creating and virtula dom and rendering our app component we creating virtual dom and selection root din and inside it render our app component

//everything is shown is created in app 


//the flow is 

//index.html have root component and its link to main.jsx and main render the app compoenet inside the root div and we seen the the data written in app one the screen thoright thr oort div

//the index.html styling is written inside the index.css

//these three our main files and ignore all other

//the only changes is done in the app.jsx

//app is our top level component

//rules of creating component

//the component must be start with capital letter and we must return something which we want to show and we can return only one html element at once in return for this purpose we use <></> here we can return as many 

//to render the component we have to write like html tag but we can say it custom html tag
 
//each component have its won file 


//when we import and call and it must have closing bracket </>


//export default is used when we are exporting only single thing from the file  with custom name 

//but when we use named export when we want to export many things and import with same name exoport {} but we have to import with same name import {} from filename


//basic rules of the jsx 

//or markup of jsx

//the compnent return the single root element

//most of the things are in camel case className instead of class because class is resverve in js and for htmlFor

//close all the tage even the tags not have closing tag in normal html but in jsx we have to close all the tags the reasom why we close that bebble search for the closing tag to convert into js and thats why we need closing tag 

//react fragemnt is to render witout adding extra node on the dom and react fragement is <></>

//where we use to pure js inside jsx we use curly brackets and we use js and perform all the operations here we use it when we want to write out pure js inside the component <p>{2+2}</p> or we want to use variable 

//to stucture our compoent start making from small component from samll like button and move on forwards

//when we combine multiple components and we make other component for it eg we have to call same three same componets instead of calling in th app make seprate component for calling three and nad use that component in app this increase teh resuabllity

//the styling tool exist like material.ui

//make each compenent style page and add styling dont write in the same file of all component and its not good practice

//props are the information pass to jsx tag or the component we can pass string integer arr and even the object 

//props to make our component dynamic 

{/* <Todo price={[1,3,4,]}></Todo> //passingarrya */}

{/* <todo price={2000}></todo> //integer */}

{/* <todo name="umar"></todo>  //string */}

{/* <todo obj={{name:"umar",age:10}}></todo> //object */}

//we can make array string object or arr nad then pass below this will also work fine

//to get in the function we can use props or even we can use the same name we pass as props in the component and its good to use as name 

// we we use this we can behave with these like normal function parameter like we can make default one mean if one arguemnet not come then its valus will be


//to render arr it normal print in straight like string but when we show as indvidual we use arr.map

//the array is printed normally without comma seprated because individual element is picked and then printed thats why not printed comma seprated 

//we can use object directly while we can use object.key

// the one solution is we send array of elelmet but its not good we use arr.map

// let arr=[<li>umar</li>,<li>abbas</li>]

//like this


// arr.map((el,index)=>{
//     return<li key={index}></li>
// })

//we can mostly conditions as 

// let result = found?<p>found</p>:<p>not</p>

//dynamic componenet styling and through whicj we can style dynanically

// let color =found?"red":"green"

// let style={color: age>15?"red":"green"}

//both above are work

// let color =found &&?"red"  this check first if its exist then its shows only

// style={{color:color}}//for styling


//the allstyling component must be camel case 

//install react developer tool for complete hirearchy of the compoents used in the page 



















