 const axios = require('axios');
//import axios from 'axios'


 async function testFun(){
   const res = await axios("https://jsonplaceholder.typicode.com/users?_limit=3")
   
  const data  =  res.data
  //console.log(res)
  console.log("data is: " , data);
  
  
  
}

testFun()