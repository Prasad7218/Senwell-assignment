import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const[data,setData]=useState([]);
  const isBackgroundRed = false;
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
  function cellColor(status) {
    switch(status) {
      case 'count=1': 
        return 'green';
      case 'BEGINNING': 
        return 'blue'
      case 'count=2': 
        return 'red'
      case 'END': 
        return 'purple'
      case 'CONCLUSION': 
        return 'grey'    
      default: 
        return ''
    }
  }

  
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

  if(count){
    
  }

  return (
    <div className="App">
       <table>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
      {
        data.map((ele)=>{
          return(
            <>
           
            {/* <tr style={{
        backgroundColor: isBackgroundRed ? 'red' : 'yellow',
      }}> */}
      <tr style={{ color: cellColor(ele.status)}} >
              <td>{ele}</td>
              <td>{count.ram}</td>
            </tr>
            </>
          )
        })
      }
            </table>

      {/* <h1>{count.ram}</h1> */}
    </div>
  )
}

export default App
