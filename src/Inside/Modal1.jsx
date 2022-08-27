import React from 'react'
import styles from './Diary.module.css'
import  { useEffect, useState } from "react";
import { useContext } from 'react';
import { Context } from '../Context/ContextProvider';



const Modal1 = () => {
const [fruit,setFruit]=useState()
const [qty,setQty]=useState(1)
    const {handleAdd,data,cart}=useContext(Context)
         
  return (
    <div>
         <div className={styles.icon}>
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAABoklEQVR4XrVWwU7CQBDtJ/AJfAJ/YJPuht2YKAcPWkzsxdKb3D3I3UT5BM62Bm56k8QPgHtL6h/AH+BM29V2thgqyyQvlJnZebPTmQHLqhE/7A8HUf9DwY+uesrmTb0W2J/90F0A5qVj+8sgdGcQeFtG8Op6wfSyPYjcVOn+TRCE1zYl8KP+uriRCr4BsjE9u7cUZaqQlLDEUtEzjeX2xe1ApiMkgxtMFAGWi/o2kpTzTtxl54lwbvAZdeX3gtmntt1KJT9ZdfkdfuJ3GkeTRDq9WPJFIvm2AsHTd//07fHpYjG5P/tMJJtqPpKtV4I97CRaSTbUDzUHJqiRYObU8RAgSZVAsA11OhRYkSI496jRCOC9qexnmtEQsg6MBV9Sgzk4PUtXmkMs2OioBNmLhgH5ogZTgBvYFvTsnBpMISOAhzE1mELepoanWAErU8zxcSYZB/iXwHSZIOHKwkuF3dacDoP+U4rKGsfmoNkrQaWJmfjZonWCfUsPNAIsThpTk7/X9+4b4tKsLU2d4E3Uls0mvdxyVv6nAHSTvL0z0vGu4N8O/opsvXoX7wAAAABJRU5ErkJggg==" alt="ic" /></div>
        <button type="button" style={{border:"none",backgroundColor:"white", color:"black",width:"180px"}}  class="btn btn-primary" data-toggle="modal" data-target="#myModal">ADD ITEM</button>
        </div>

        
      <div class="modal" id="myModal" >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">Add Food to Diary</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
         
          <table class="table table-bordered table-sm">
            <thead>
               <tr>
               <th>Description</th>
               <th>Energy</th>
             </tr>
            </thead>
             <tbody>
                {
                     data.map((el) => {
                        return (
                          <>
                            {" "}
                            <tr onClick={()=>setFruit(el)}>
                              <td style={{cursor:"pointer"}} >{el.name}</td>
                              <td>{el.energy} kCal</td>
                            </tr>
                          </>
                        );
                      })
                }
             </tbody>
          </table>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button onClick={()=>handleAdd(fruit)} type="button" class="btn btn-danger" data-dismiss="modal">Add</button>
        </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default Modal1