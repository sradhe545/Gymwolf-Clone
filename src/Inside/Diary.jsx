import React from 'react'
import Modal1 from './Modal1'
import  { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from 'react';
import { Context } from '../Context/ContextProvider';
import {AiFillDelete} from "react-icons/ai"
import styles from "./Diary.module.css"
const Diary = () => {
  const {cart,getCart,handlePatch}=useContext(Context)
    const  handleRemove= async(id)=>{
    await axios.delete(`https://warm-sea-77698.herokuapp.com/diary_exercise/${id}`).then(()=>getCart())
  }
  return (
    <div style={{display: 'flex'}}>  
      {/* <img style={{width:"200px", marginTop:"-150px",marginRight:"-100px",marginLeft:"50px"}} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="log"/>   */}
        <div class="container">
  <br/>
  {/* <!-- Nav tabs --> */}
  <ul class="nav nav-tabs" role="tablist">
     <li>
     <img style={{width:"200px",marginRight:"30px"}} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="log"/>  
     <div className={styles.dropdown}>
  <button className={styles.dropbtn}>V</button>
  <div className={styles.dropdowncontent}>
    <div style={{display:"flex",justifyContent: "space-between"}}>
      <h3>Email :id</h3>
      <button>Logout</button>
    </div>

  <img src="https://i.ibb.co/wwhYpLj/Screenshot-913.png" alt="Screenshot-913" border="0"/>

    
  </div>
</div>

     </li>
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">Diary</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu1">Trends</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu2">Foods</a>
    </li>
  </ul>

  {/* <!-- Tab panes --> */}
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
      {/* <img src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt=""/> */}
     <Modal1/>
    
  </div>
  <table class="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Description</th>
        <th>Unit</th>
        <th>Energy</th>
        <th>Remove</th>

      </tr>
    </thead>
    <tbody>
    {
                     cart.map((el) => {
                        return (
                          <>
                            {" "}
                            <tr key={el.id}>
                              <td>{el.name}</td>
                              <td ><button onClick={()=>handlePatch(el.id,+1,el.energy,el.quantity,el.updated_energy)} style={{border:"none",cursor:"pointer",backgroundColor:"white"}}>+</button><button style={{border:"none",backgroundColor:"white"}}>{el.quantity}</button><button onClick={()=>handlePatch(el.id,-1,el.energy,el.quantity,el.updated_energy)} style={{border:"none",cursor:"pointer",backgroundColor:"white"}}>-</button></td>

                              <td>{el.updated_energy.toFixed([3])} kCal</td>
                              <td onClick={()=>handleRemove(el.id)}><AiFillDelete style={{cursor:"pointer"}}/></td>

                            </tr>
                          </>
                        );
                      })
                }
    </tbody>
  </table>
    </div>

    </div>





    {/* <div id="menu1" class="container tab-pane fade"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>






    <div id="menu2" class="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>



    <div id="menu3" class="container tab-pane fade"><br/>
      <h3>Menu 3</h3>
      <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div> */}


    
  </div>
  )
}

export default Diary