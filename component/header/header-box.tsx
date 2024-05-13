import React from 'react'
import { m } from 'framer-motion'
// import 'theme/css/globals.css'

const HeaderBox = ({ type = 'title', title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {type === 'greeting' && <span className='text-bankGradient'>&nbsp;{user}</span>}
      </h1>
      <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox
