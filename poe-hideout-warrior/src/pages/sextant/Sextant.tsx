'use client'

import React, { useState } from "react"
import Line from "./components/Line"

export default function Sextant() {
  const divineValue = 230
  const [text, setText] = useState("")

  
  const values:[{name:string, price:number}?] = []
  text.split('\n').forEach(line => {
    const res = RegExp(/[0-9]*x ([0-9a-zA-Z ]*?) ([0-9]*)c/).exec(line) 
    console.log(res)
    if(res){
      values.push({name:res[1], price:parseFloat(res[2])})
    }
  })
  console.log(values)
  

  return (
    <div className="flex flex-row gap-4 bg-black text-white min-h-screen min-w-fit">
      <div>
      {values.map(val => {
        return <Line key={val?.name} price={val?.price} name={val?.name} divineValue={divineValue}/>
      })}
      </div>
      <div>
        <textarea className="text-black w-[500px] h-[312px]" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  )
}
