import Image from 'next/image'

const AboutSection = () => {
  return (
      <section id='about'
          className=' bg-[#E5E7EB] text-black h-[600px] py-24'
      >
          <div className='w-4/5  mx-auto flex flex-col-reverse sm:flex-row gap-10'>
              <div className='flex-1'>
                  <Image src='/assets/img/card.svg' width={500} height={500} alt='Card' />
              </div>
              <div className='flex-1 '>
                  <h2>Green CREDIT</h2>
                  <h3>skjhkjshjkshjkshkj</h3>
                  <p>skjsdkjsdhjkshdjkshjkshdjkshjkshk</p>
                  <button>get started</button>
              </div>

          </div>

      </section>
  )
}

export default AboutSection