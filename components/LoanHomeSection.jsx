import Image from "next/image";

import { loans } from "@/data/data"

const Loan = ({ loan }) => {
    const { title, img, years, interest } = loan;
    return (
        <div className='border-2 py-4 rounded-lg border-black flex-1 text-center cursor-pointer
         items-center hover:scale-105 transform duration-200 hover:border-cyan-400'>
            <h2 className='text-3xl text-cyan-400 bg-slate-900 mb-3'>{title}</h2>
            <div className='flex items-center justify-around sm:hidden'>
                <h3 className='text-3xl'><b>{years}<br /></b> Year{years > 1 && 's'}</h3>
                <Image src={img} width={100} height={100} alt={title} loading='lazy' />
                <p className='text-3xl'> <b>{interest}</b>% <br />Interest</p>
            </div>

            <div className='hidden sm:block'>
                <h3 className='text-3xl'>For <b>{years}</b> Year{years > 1 && 's'}</h3>
                <p className='text-2xl mb-3'>Interest of <b>{interest}</b>%</p>
                <Image src={img} width={120} height={120} alt={title} loading='lazy' className='mx-auto' />
            </div>
        </div>
    )

}

const LoanHomeSection = () => {
    return (
        <section id='loan'
            className=' bg-[#E5E7EB] text-black h-[100vh] sm:h-[85vh] py-12 flex flex-col items-center'
        >
            <h2 className='text-cyan-400 font-bold text-lg  '>Need More Money?  </h2>
            <h3 className='font-bold text-4xl mb-10'>Take a Loan</h3>

            <div className='w-4/5  mx-auto flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center '>
                {loans.map(loan => (
                    <Loan key={loan.id} loan={loan} />
                ))}
            </div>

        </section>
    )
}

export default LoanHomeSection