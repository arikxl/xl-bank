import Image from 'next/image'
import BtnHomeSection from './btns/btn-home-sct/BtnHomeSection'
import React from 'react';

const AboutSection = ({ section, index }) => {

    const { img, title, subTitle, desc, btnText } = section;

    return (
        <section className=' home-section '>
            <div className={` w-11/12 sm:w-4/5  mx-auto flex flex-col sm:flex-row sm:gap-10 switch `}>
                <div className={`flex-1 flex-col sm:justify-between flex pt-10 coll`}>
                    <h2 className='text-cyan-400 font-bold text-lg'>{title}</h2>
                    <h3 className='font-bold text-3xl sm:text-5xl mb-4'>{subTitle}</h3>
                    <p className='text-lg mb-4'>{desc}</p>
                    <div className='hidden sm:block'>
                        <BtnHomeSection text={btnText} />
                    </div>
                </div>
                <div className='m-0 p-0 flex-1  flex flex-col sm:flex-row justify-center items-center'>
                    <Image src={img} width={440} height={440} alt={title} loading='lazy' />

                </div>
                    <BtnHomeSection text={btnText} className='sm:hidden' />

            </div>

        </section>
    )
}

export default AboutSection