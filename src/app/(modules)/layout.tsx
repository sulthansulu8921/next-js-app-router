import React from 'react'

export default function ModulesLayout({children}:{
    children: React.ReactNode
}) {
  return (
    <div>
        <h3>modules</h3>
        {children}
    </div>
  )
}
