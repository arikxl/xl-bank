

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
      <div className='z-10 bg-lime-100'>
        <h1 className=''>Welcome to my bank </h1>
        <p>Sign up and receive 1,000,000 to invest in crypto</p>
        <button className='btn'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero