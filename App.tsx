import React,{useReducer,useContext, useState, ReactNode} from 'react';
import Checck from './Checck';
import Appcntx ,{ Apicntxt } from './Appcntx';
import {IReducer} from "./Appcntx"
import {reducer, initialState} from "./Appcntx"
interface Ippl{people:[{name:string, age:number}]}
type Ctype = {children: (people:Ippl)=> ReactNode}

function App() {
  interface Idispatch{dispatch:(arg:object)=>any} 
  // const {state,SUBF,SUBD ,submitd} = useContext<any>(Apicntxt)
 
 

  return (
    <Appcntx submitd={initialState.submitd} people={initialState.people}>
     <div> 
    <Checck/>
      </div>
    </Appcntx>
  );
}

export default App;
