import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Image
      width={500}
      height={500}
      src={'/kiran.png'}
      alt='kiran-medical-certificate'
      />
    </div>
  )
}

export default page
