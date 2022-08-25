import React from 'react'
import styles from './Diary.module.css'
const Diary = () => {
  return (
    <div>    
        <div class="container">
  <br/>
  {/* <!-- Nav tabs --> */}
  <ul class="nav nav-tabs" role="tablist">
     
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
      <div className={styles.icon}>
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAABoklEQVR4XrVWwU7CQBDtJ/AJfAJ/YJPuht2YKAcPWkzsxdKb3D3I3UT5BM62Bm56k8QPgHtL6h/AH+BM29V2thgqyyQvlJnZebPTmQHLqhE/7A8HUf9DwY+uesrmTb0W2J/90F0A5qVj+8sgdGcQeFtG8Op6wfSyPYjcVOn+TRCE1zYl8KP+uriRCr4BsjE9u7cUZaqQlLDEUtEzjeX2xe1ApiMkgxtMFAGWi/o2kpTzTtxl54lwbvAZdeX3gtmntt1KJT9ZdfkdfuJ3GkeTRDq9WPJFIvm2AsHTd//07fHpYjG5P/tMJJtqPpKtV4I97CRaSTbUDzUHJqiRYObU8RAgSZVAsA11OhRYkSI496jRCOC9qexnmtEQsg6MBV9Sgzk4PUtXmkMs2OioBNmLhgH5ogZTgBvYFvTsnBpMISOAhzE1mELepoanWAErU8zxcSYZB/iXwHSZIOHKwkuF3dacDoP+U4rKGsfmoNkrQaWJmfjZonWCfUsPNAIsThpTk7/X9+4b4tKsLU2d4E3Uls0mvdxyVv6nAHSTvL0z0vGu4N8O/opsvXoX7wAAAABJRU5ErkJggg==" alt="ic" /></div>
        <button type="button" style={{border:"none",backgroundColor:"white", color:"black"}}  class="btn btn-primary" data-toggle="modal" data-target="#myModal">Open modal</button>
      </div>

      <div class="modal" id="myModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h1 class="modal-title">Modal Heading</h1>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          <h3>Some text to enable scrolling..</h3>
          <table class="table table-bordered table-sm">
            <thead>
               <tr>
               <th>Description</th>
               <th>Unit</th>
               <th>Energy</th>
             </tr>
            </thead>
             <tbody>
                <tr>
                 <td>John</td>
                 <td>Doe</td>
                 <td>john@example.com</td>
                </tr>
             </tbody>
          </table>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  
  
  </div>
  <table class="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Description</th>
        <th>Unit</th>
        <th>Energy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
    </tbody>
  </table>
    </div>







    <div id="menu1" class="container tab-pane fade"><br/>
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
    </div>


  </div>

</div>
  </div>
  )
}

export default Diary