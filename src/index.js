// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from  'react-dom';
import './index.css'; 


// const fname = "hello world";
// const lname = "program";

 const myname = "Manish"; 
// const d = new Date();

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/id/1/300/300";
const img2 = "https://picsum.photos/id/1001/350/300";
const links = "https://www.google.com";

ReactDOM.render(
  // //<div> or [
  // //<React.Fragment>
  //   <>

  //   <h1> Hello world</h1>,
  //   <h2>this is manish</h2>,
  //   <h3>leaning react</h3>

  //   </>,
  //  // </React.Fragment>,
  // //  </div>  or ] ,
<>

  {/* <h1>Nexflix Series</h1>
  <p>Top five Nexflix series</p>

  <ol>
        <li>Dark</li>
        <li>Extra curricular </li>
        <li>My holo love</li>
        <li>My first-2 love</li>
        <li>Mr. Robot</li>

  </ol> */}


{/* <h1> hey this is {fname} program</h1>
<p>My lucky number is {5+5}</p>


<h1> {`hey this is using template literals ${fname} ${lname}`}</h1> */}


<h1> {`Hello, My name is ${myname}`}</h1>

{/* <p>{`Today's Date ${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`}</p>
<p>{`Time is ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`}</p> */}

<p>Current Date is: {currDate}</p>
<p>Current Time is: {currTime}</p>




<h1 className='heading'>Hey this is {myname}</h1>
<div className='img_div'>

  <img src={img1} alt="randomImages"  />
  <a href={links} target="_blank">
    <img src={img2} alt="random" />
  </a>

</div>
  </> ,
 document.getElementById('root')
);