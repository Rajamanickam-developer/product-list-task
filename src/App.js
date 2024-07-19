import { useState } from "react";
import Data from "./components/data/data.component";
import Header from "./components/header/header.component";
import Cards from "./components/card/card.component";


const App = () =>{

  const [data,setData]=useState(Data)
  // console.log(data);
  
 
  const [isascending,setIsascending]=useState(true)

  const copyData =[...data]

  const searchEvent = () =>{

  }

  // console.log(copyData)
  // console.log("copyData")

  // const nameItem = copyData.map((item)=>{
  //   return (item.name)
  // })
  // console.log(nameItem);
  const clickEvent = () =>{
    setIsascending(!isascending)
    
    copyData.sort((obj1,obj2)=>{
      if(isascending){
        return obj2.id-obj1.id
      }
      return obj1.id-obj2.id
    })
    
    // nameItem.sort()
      setData(copyData);
      }
  return (
    <>
    <Header event={clickEvent} search={searchEvent}/>
    <Cards data={data}/>
    </>
  )
};

export default App;