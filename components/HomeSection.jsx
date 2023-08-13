import Image from 'next/image'

import BtnHomeSection from './btns/btn-home-sct/BtnHomeSection'
import Link from 'next/link';

const AboutSection = ({ section, index }) => {

    const { img, title, subTitle, desc, btnText } = section;

    return (
        <section className=' home-section '>
            <div className={` w-11/12 sm:w-4/5  mx-auto flex flex-col sm:flex-row sm:gap-10 mt-[-10%] sm:mt-0 `}>
                <div className={`flex-1 flex-col sm:justify-between flex pt-10 coll`}>
                    <h2 className='text-cyan-400 font-bold text-lg'>{title}</h2>
                    <h3 className='font-bold text-3xl sm:text-5xl mb-4'>{subTitle}</h3>
                    <p className='text-lg mb-4'>{desc}</p>
                    <Link href='/crypto' className='hidden sm:block'>
                        <BtnHomeSection text={btnText} className='hidden sm:block' />
                    </Link>
                </div>
                <div className=' flex-1 flex flex-col sm:flex-row justify-center items-center'>
                    <Image src={img} width={400} height={400} alt={title} loading='lazy' />
                </div>
                <Link href="/crypto" className='sm:hidden'>
                    <BtnHomeSection text={btnText} width='w-full' />
                </Link>

            </div>

        </section>
    )
}

export default AboutSection