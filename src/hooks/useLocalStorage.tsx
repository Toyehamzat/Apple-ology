import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string,initialValue:T | (()=>T)){
    const [value,SetValue] =useState<T>(()=>{
        const JsonValue =localStorage.getItem(key)

        if(JsonValue!=null) return JSON.parse(JsonValue)

        if(typeof initialValue === "function"){
            return ( initialValue as () => T)()

        } else{
            return initialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))

    },[key,value])

    return[value,SetValue] as [typeof value,typeof SetValue]
}