import { Satisfy } from 'next/font/google'


const satisfy = Satisfy({
    subsets: ['latin'],
    variable: '--font-satisfy',
    weight: ['400']
});

const Logo = () => {
  return (
      <h1 className={` font-thin sm:text-4xl text-2xl py-3`}>
          XL 
          <span className={`sm:text-5xl text-3xl ${satisfy.variable}  logo-span`} >
               bank
          </span>
      </h1>
  )
}
export default Logo