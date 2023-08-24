import React from "react";

function Simple(){
let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';
const greetStyle = { };


if(currDate >=1 && currDate <12){
  greetings = 'Good Morning';
  greetStyle.color = 'green';
}else if(currDate >=12 && currDate <19){
  greetings = 'Good Afternoon';
  greetStyle.color = 'orange';
}else{
  greetings = ' Good Night';
  greetStyle.color = 'blue';
 }

return (
<div>
<h1> Hello Sir, <span style={greetStyle}> { greetings} </span> </h1>
</div>
);

}

export default Simple;