import { createContext, useContext, useState } from "react"


const Groupcontext= createContext()
export function Groups({children}) {
    const[groups,setGroups]=useState([])
   
    return (
        <Groupcontext.Provider value={{groups,setGroups}}>
            {
                children
            }

        </Groupcontext.Provider>
    )
}

export function useGroups(){
    return useContext(Groupcontext)
}