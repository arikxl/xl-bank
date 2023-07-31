import React from 'react'

const LoanHomeSection = () => {
    return (
        <section id='loan'
            className=' bg-slate-800 text-white h-[600px] py-24 flex flex-col'
        >   
            <h1 className='text-center'>Take a loan</h1>
            <div className='w-4/5  mx-auto flex flex-col sm:flex-row gap-10 '>
                <div className='flex-1 text-center border border-color-white'>
                    <h2>Green crypto</h2>
                    <h3>skjhkjshjkshjkshkj</h3>
                    <p>skjsdkjsdhjkshdjkshjkshdjkshjkshk</p>
                    <button>get started</button>
                </div>
                <div className='flex-1 text-center border border-color-white'>
                    IMG
                </div>
                <div className='flex-1 text-center border border-color-white'>
                    111
                </div>

            </div>

        </section>
    )
}

export default LoanHomeSection