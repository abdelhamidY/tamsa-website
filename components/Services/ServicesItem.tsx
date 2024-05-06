import Image from 'next/image'
import React from 'react'

const ServicesItem:React.FC<{src: string, paragraph: string, secondParagraph?: string}> = ({src, paragraph, secondParagraph}) => {
	return (
		<div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
					<p>{paragraph}</p>
					{secondParagraph && <p>{secondParagraph}</p>}
          </div>
          <Image 
          className="rounded-lg"
          src={src}
          alt="image"
          width={75}
          height={75} />
        </div>
	)
}

export default ServicesItem