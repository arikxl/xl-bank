import Image from 'next/image'
import BtnLogin from './btns/btnLogin/BtnLogin'

const AboutSection = () => {
  return (
      <section 
          className=' home-section '
      >
          <div className='w-4/5  mx-auto flex flex-col sm:flex-row gap-10 '>
              <div className='flex-1 flex-col justify-between flex'>
                  <h2 className='text-cyan-400 font-bold text-lg'>Manage your money</h2>
                  <h3 className='font-bold text-5xl'>&cent;ontrolling your fortune is extremely easy</h3>
                  <p className='text-lg'>
                      User-friendly interface for smooth asset management. Track crypto investments and monitor account balances, empowering you to make decisions swiftly and efficiently.
                  </p>
                  <BtnLogin text='Start Now'/>
              </div>
              <div className='flex-1'>
                  <Image src='/assets/img/card.svg' width={500} height={500} alt='Card' />
              </div>

          </div>

      </section>
  )
}

export default AboutSection