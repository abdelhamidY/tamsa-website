import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<section className="has-app-max-width mt-10">
      <HeaderPage image="/images/ourpartners.jpg" title="شركاؤنا" />
			<div className='mt-10'>
				<h3 className="text-center font-bold text-[30px]">شركاؤنا من المؤسسات المانحة</h3>
				<div className='w-[80px] h-1 bg-[#D57153] mx-auto'></div>
				<div className='grid grid-cols-3 gap-4 mt-10 grid-rows-3'>
					<div className='flex justify-center items-center'>
					<Image src={"/images/partners/0b8dae15735ba642116c4f9c46c0d1eb.png"} alt="partner-logo" className='rounded-full text-center'/>
					</div>
					<div className='flex justify-center items-center'>
						
					<Image src={"/images/partners/2a2cf0d2080d0ea1758e4ad27f083a09.png"} alt="partner-logo" className='rounded-full text-center'/>
					</div>
					<div className='flex justify-center items-center'>
						
					<Image src={"/images/partners/2e3c9f315dc603a930308a2c4ed7e94f.png"} alt="partner-logo" className='rounded-full text-center'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/2fcb98026f524d998784fe2a96a7353a.png"} alt="partner-logo" className='rounded-full text-center'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/99f1bec28e0276492ad235fcb426f68b.png"} alt="partner-logo" className='rounded-full'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/301ad484778736f483ec2cc6177bfe28.png"} alt="partner-logo" className='rounded-full'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/559ce1857c49c3b1d109cc5d1d624cd0.png"} alt="partner-logo" className='rounded-full'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/a43657b1b65bf5d440e2e772d5ed93b2.png"} alt="partner-logo" className='rounded-full'/>
					</div>
					<div className='flex justify-center items-center'>

					<Image src={"/images/partners/e2ca0a88293be760905386045db70051.png"} alt="partner-logo" className='rounded-full'/>
					</div>
				</div>
			</div>
			</section>
	)
}

export default page