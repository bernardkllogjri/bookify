'use client'

import HeaderDesktop from '../(components)/header/HeaderDesktop'
import HeaderMobile from '../(components)/header/HeaderMobile'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white fixed left-0 right-0 z-10">
      <HeaderMobile open={open} setOpen={setOpen} />
      <HeaderDesktop setOpen={setOpen} />
    </div>
  )
}

export default Header