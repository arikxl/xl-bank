import Image from 'next/image'
import BtnHomeSection from './btns/btn-home-sct/BtnHomeSection'

const AboutSection = ({ section, index }) => {

    const { img, title, subTitle, desc, btnText } = section;

    return (
        <section className=' home-section '>
            <div className={`w-4/5  mx-auto flex flex-col sm:flex-row gap-10 switch `}>
                <div className={`flex-1 flex-col justify-between flex py-10 coll`}>
                    <h2 className='text-cyan-400 font-bold text-lg '>{title }</h2>
                    <h3 className='font-bold text-5xl'>{subTitle }</h3>
                    <p className='text-lg mb-2'>{desc}</p>
                    <BtnHomeSection text={btnText } />
                </div>
                <div className='flex-1 h-full sec-img flex justify-center'>
                    <Image src={img} width={440} height={440} alt={title } loading='lazy'/>
                </div>

            </div>

        </section>
    )
}

export default AboutSection