import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const[data,setData]=useState([]);
  let arr=['ram','peter','prasad','mauli','ram','mauli','prasad','prasad']
  // let count=0;

  // for(var i=0;i<arr.length;i++){
  //   for(var j=0;j<arr.length;j++){
  //     if (arr[i]==arr[j]){
  //       count=count+1;
  //     }
  //   }
  // }
  // console.log(count);

  
const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);

 
  let ar1=arr.filter((item,
      index) => arr.indexOf(item) === index);
    
    
  
    console.log(ar1);

  useEffect(()=>{

    setData(ar1);
   
  },[])

  return (
    <div className="App">
      
      {
        data.map((ele)=>{
          return(
            <>
            <table style={{border:'1px solid black'}}>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
            <tr>
              <td>{ele}</td>
              <td></td>
            </tr>
            </table>
            </>
          )
        })
      }
    </div>
  )
}

export default App
