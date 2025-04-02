import React,{useContext, useState,ReactNode} from 'react'
import Appcntx ,{ Apicntxt } from './Appcntx';
import { Iform } from './Appcntx';
interface Ippl{people:[{name:string, age:number}]}
type Ctype = {children: (people:Ippl)=> ReactNode}

const Checck = () => {
    const {state,SUBF,SUBD ,submitd} = useContext<any>(Apicntxt)
    const [formd, setFormd]= useState({name:"", age:5})

 const handlec= (e:any)=>{
  setFormd((prevFormd)=>{
    const {name, value}= e.target
    return {...prevFormd, [name]:value}

  })
 }
 const handles= (e:any)=>{
  e.preventDefault()
  
//   dispatch({type:"SUB-F",payload:formd}) 
SUBF(formd)
SUBD()


 } 
 const ippl= state.people.filter((person:Iform, index:number)=>{
    if (index>0) {
        return person
        
    }
 })
 
 return (
    <form >{JSON.stringify(ippl)}
      <input type="text" name='name' placeholder='name' value={formd.name} onChange={handlec} />
      <input type="number" name='age' placeholder='age' value={formd.age} onChange={handlec} />
      <button onClick={(e)=>{e.preventDefault(); SUBF(formd); SUBD()}}>submit</button>
      </form>
  )
}

export default Checck