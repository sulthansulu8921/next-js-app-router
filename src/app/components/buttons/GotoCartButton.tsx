"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function GotoCartButton() {
    const router = useRouter();
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{
            router.push('/carts')
      }}>Go to cart</button>
    </div>
  )
}
