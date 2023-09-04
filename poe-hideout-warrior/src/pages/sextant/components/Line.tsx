import React, { forwardRef, useEffect, useState } from 'react'

export default function Line({name, price, divineValue = 232}:any) {
  const [quantity, setQuantity] = useState(0)

  const [total, setTotal] = useState('')

  const [divine, setDivine] = useState(0)
  const [chaosLeft, setChaosLeft] = useState(0)
  const [totalChaos, setTotalChaos] = useState(0)


  useEffect(()=> {
    const totalChaos = quantity * price

    const divine = Math.floor(totalChaos/divineValue)
    const chaosLeft = totalChaos - divine * divineValue
    
    setDivine(divine)
    setChaosLeft(chaosLeft)
    setTotalChaos(totalChaos)

    setTotal(`${divine} divines ${chaosLeft} chaos \n or \n ${totalChaos} chaos`)
  },[quantity])


  return (
    <div className={`flex flex-row gap-3 w-[900px] p-4 border border-white items-center ${quantity && 'bg-red-400'}`}>
      {name} 
      <div> {price} chaos </div>
      <input className='text-black' type="text" placeholder='quantity' value={quantity || ''} onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)} />
      <div className='flex flex-row ml-auto gap-4 items-center'>
        <div className='flex flex-col text-center'><div>{divine} divines {chaosLeft} chaos </div><div> or </div> <div> {totalChaos} chaos</div></div>
        <div>troco {divineValue - chaosLeft} chaos</div>
      </div>
    </div>
  )
}