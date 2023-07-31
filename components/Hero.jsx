import BtnPrm from "./btns/btnPrm/BtnPrm"


const Hero = () => {
  return (
    <section className='bg-slate-900 flex mt-[-100px]
     justify-center items-center px-8 h-[100vh] relative z-[1]' >
      <div className='absolute top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden '>
        <video className='w-full h-full object-cover ' autoPlay loop muted
          type='video/mp4' 
          src='/assets/videos/bg2.mp4'
        />
      </div>
      <div className='z-10  text-center  text-white '>
        <h1 className=' text-5xl font-bold mb-12'>Welcome to our &#x20BF;ank </h1>
        <p className='mb-0 text-2xl'>Sign up and receive $1,000,000 to invest in crypto</p>
        <p className='mb-8 text-2xl'>Design your credit cards and have fun!</p>
        <BtnPrm/>
      </div>
    </section>
  )
}

export default Hero