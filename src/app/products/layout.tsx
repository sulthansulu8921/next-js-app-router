import React from 'react'

export default function ProductsLayout({children}:{
    children: React.ReactNode
}) {
  return (
    <div className='page'>
        <h3>This is Products Related Page</h3>
        {children}
    </div>
  )
}
