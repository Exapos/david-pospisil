"use client"
import cslx from 'clsx'
import React from 'react'

const Accent = ({ children, className }) => {
  return (
      <span
         className={cslx(
           className,
           'text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#fffd7d] to-[#c01818] mb-5'
         )}>
         {children}
      </span>
  )
}

export default Accent