import React from 'react'

const CryptoPagination = ({ page, setPage, handleSearch }) => {
    return (
        <div className="flex mx-auto  sm:w-1/2 justify-between my-2 text-xl">
            <button disabled={page < 2} onClick={() => setPage(page - 1)}
                className={page < 2 && 'cursor-not-allowed'}>
                ◀️
            </button>
            {[...Array(Math.ceil(handleSearch().length / 10)).keys()].map((x) => (
                <button className={x + 1 === +page ? 'font-bold underline' : ' '}
                    key={x + 1} onClick={() => setPage(x + 1)}
                >
                    {x + 1}
                </button>
            ))}
            <button disabled={page >= Math.ceil(handleSearch().length / 10)} onClick={() => setPage(page + 1)}
                className={` text-cyan-400 ${page >= Math.ceil(handleSearch().length / 10) && 'cursor-not-allowed'}`}>
                ▶️
            </button>
   
        </div>
    )
}

export default CryptoPagination