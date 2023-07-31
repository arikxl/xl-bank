import { Satisfy } from 'next/font/google'


const satisfy = Satisfy({
    subsets: ['latin'],
    variable: '--font-satisfy',
    weight: ['400']
});

const Logo = () => {
  return (
      <h1 className={` font-thin text-4xl logo `}>
          XL 
          <span className={`text-5xl ${satisfy.variable} logo-span`} >
               bank
          </span>
      </h1>
  )
}
export default Logo