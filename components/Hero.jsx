import BtnPrm from "./btns/btnPrm/BtnPrm"


const Hero = () => {
  return (
    <section className='bg-slate-900 flex mt-[-3rem]
     justify-center items-center px-8 h-[100vh] relative z-[1]' >
      <div className='absolute top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden '>
        <video className='w-full h-full object-cover ' autoPlay loop muted
          type='video/mp4'
          src='/assets/videos/bg2.mp4'
        />
      </div>
      <div className='z-10  text-center  text-white mt-12'>
        <h1 className=' text-6xl font-bold mb-10'>Welcome to our &#x20BF;ank </h1>
        <p className='mb-0 text-2xl '>Sign up and receive <strong>$1,000,000</strong> to invest in crypto</p>
        <p className='mb-16 text-2xl'>Design your credit cards and have fun!</p>
        <BtnPrm />
      </div>
    </section>
  )
}

export default Hero