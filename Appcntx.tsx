import React,{ReactElement, useContext, useReducer} from 'react'
import { createContext } from 'react'
export interface Icont{people:[{name:string, age:number}],submitd:boolean} 
export const initialState:Icont={people:[{name:"",age:0}], submitd:false}
interface Iaction{type:string, payload?:Icont}
export interface IReducer{reducer:(state:Icont,action:Iaction)=>Icont}
export interface Iform{name:string,age:number}

export const reducer = ( state:Icont, action:Iaction)=>{
  if (action.type==="SUB_F") {
    const temppl= [...state.people, action.payload]
    return{...state, people:temppl}
    
  }
  if (action.type==="SUBD") {
    
    return{...state,submitd:true}
    
  }
  return state
}
export const useCombf= (initialState:Icont)=>{
   const [state, dispatch]:any = useReducer<any>(reducer, initialState)
   const SUBD= ()=> dispatch({type:"SUBD"})
  const SUBF= (formd:Iform)=> dispatch({type:"SUB_F",payload:formd}) 
  return{state, SUBD, SUBF}
  }
  type Usecombf= ReturnType<typeof useCombf>
  const innv:Usecombf = {state:initialState,
  SUBD:()=>{}, SUBF:(formd:Iform)=>{}}
  export const Apicntxt:any= createContext< Usecombf | null >(null)

   type Childrentype= {children?:ReactElement}

const Appcntx = ({children, ...initialState}:Childrentype & Icont):ReactElement => {
  return (
    <Apicntxt.Provider value={useCombf(initialState)} >{children}</Apicntxt.Provider>
  )
}

export default Appcntx