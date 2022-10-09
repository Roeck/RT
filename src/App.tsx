import React from 'react';
import './App.css';
import Customer from "./components/Customer";
import {CustomerClass} from "./components/CustomerClass";
import Employee from "./components/Employee";
import {EmployeeClass} from "./components/EmployeeClass";

function App() {
  return (
    <React.Fragment>
       <div className="container mt-3">
           <div className="grid">
               <div className="row">
                   <div className="col">
                       <p className="h3 fw-bold text-success">App Component</p>
                       <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus facilis nihil numquam quas quia quo repellat! Alias consequatur cumque deleniti dicta, dolores, eum eveniet facilis minima nisi quia quod.</p>
                    <button className="btn btn-success btn-sm">
                       <i className="fa fa-book"/> Read More</button>
                   </div>
               </div>

               {/*<div className="row">
                   <div className="col">
                       <Customer name={'Rajan'} age={25} title={'Software Engineer'}/>
                   </div>
               </div>

               <div className="row">
                   <div className="col">
                       <CustomerClass name={'Rajan'} age={25} title={'Software Engineer'}/>
                   </div>
               </div>*/}

               <div className="row">
                   <div className="col">
                       <Employee/>
                   </div>
               </div>

               <div className="row">
                   <div className="col">
                       <EmployeeClass/>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
  );
}

export default App;
