import TrustedCharityItem from '@/components/TrustedCharity/TrustedCharityItem/TrustedCharityItem'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<section className="has-app-max-width">
      <HeaderPage image="/images/trustedCharity.png" title="من نحن" />

      <main className="grid grid-cols-3 gap-10 mt-10">
          {[...Array(3)].map((_, index) => (
            <TrustedCharityItem key={index} />
          ))}
			</main>

			<div className='p-5 mt-10'>
				
			<div className="flex justify-between bg-gradient-to-r from-[#29292E] to-[#343441] p-5">
        <div className='grid grid-cols-2 gap-10 grid-rows-2 overflow-hidden'>
				<Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          width={547}
          height={260.88}
        />
				<Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          width={547}
          height={260.88}
        />
				<Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          width={547}
          height={260.88}
        />
				<Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          width={547}
          height={260.88}
        />
				</div>
        <div className="flex flex-col items-end justify-center">
          <h1 className="font-medium text-[29px] mb-0 text-white">
            ماهو معيار المنظمة الموثوقة ؟
          </h1>
					<div className='w-[80px] h-1 bg-[#D57153] mt-2 mb-5'></div>
          <p className=" font-light text-[16px] text-white">
            هو معيار بريطاني لإدارة الجودة ويملكه المجلس الوطني للمنظمات
            التطوعية NCVO.
          </p>
          {/* <br /> */}
          <p className="w-[693.5px] text-end font-light text-[16px] text-white">
            صمم هذا المعيار خصيصاً للقطاع غير الربحي بمختلف تخصصاته، حيث يضم
            مجموعة من المؤشرات التي تتميز بوضوحها وسهولة استخِدامها وشمولها،
            والتي تهدف إلى إدارة المنظمة بكفاءة وفاعلية.
          </p>
        </div>
      </div>
			</div>

    </section>
	)
}

export default page