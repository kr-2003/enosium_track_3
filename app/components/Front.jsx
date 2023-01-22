import React from 'react'
import Image from 'next/image'

function Front() {
  return (
    <div className='w-screen h-screen grid md:grid-cols-2'>
        <div className='flex justify-center items-center'>
            <Image alt='Main front image!' src="/images/main_image.jpg" height={500} width={500}></Image>
        </div>
    </div>
  )
}

export default Front