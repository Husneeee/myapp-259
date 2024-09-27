import React, {useState} from 'react'
import { FaLongArrowAltUp, FaLongArrowAltDown, FaRegTrashAlt } from "react-icons/fa";


const AddDeleteList = () => {
  
let [liItems, setItems]= useState([""]);
let [display, setDisplay]=useState("d-none");
  
const addItem = (event)=>{

    let inputVal=event.target.previousElementSibling.value;
    if(inputVal.trim()){ 
        setItems([...liItems, inputVal]);

    }
    document.querySelector("input").value = "";
    document.querySelector("input").focus();
} 
   
const clearItem = ()=>{
   setItems([]);
   

}
const deleteItem = (i)=>{
    setItems(liItems.filter((item)=>liItems.indexOf(item)!= i));
    setDisplay("d-block");
    setTimeout(()=>setDisplay("d-none"), 4000);
    
 
 }
 //upItem
 const upItem = (i)=>{
    if(i>0){
        let newItems= [...liItems];
        newItems.splice(i-1,0,liItems[i]);
        newItems.splice(i+1,1);
        setItems(newItems);
    }
 }
//downItem
const downItem = (i)=>{
    if(i<liItems.length-1){
        let newItems= [...liItems];
        newItems.splice(i+2,0,liItems[i]);
        newItems.splice(i,1);
        setItems(newItems);
    }
}
  
  
    return (
    <div className='m-3'>
      <div className='text-center d-flex justify-content-center d-none'>
        <p className='bg-info text-danger p-2 rounded position-absolute '>Silme işlemi gerçekleştirildi. 
          <u style={{cursor:"pointer"}}>Geri al</u></p>
      </div>
      <input type="text"  className='m-1 p-1 rounded'/>
      <button className='m-1 p-1 rounded'onClick={addItem}>Add</button>
      <button className='m-1 p-1 rounded'onClick={clearItem}>Clear</button>

      <ul>

        {liItems.map((item,index)=>{
            return <li key={index}>
                <span>{item}</span>
                <FaLongArrowAltUp className='m-1 p-1 text-bg-light bg-info h4' onClick={()=>upItem(index)}/>
                <FaLongArrowAltDown  className='m-1 p-1 text-bg-light bg-info h4'onClick={()=>downItem(index)}/>
                <FaRegTrashAlt className='m-1 p-1 text-bg-light bg-danger h4' onClick={()=>deleteItem(index)} />
                
                  </li>})}
      </ul>
    </div>
  )
}

export default AddDeleteList
