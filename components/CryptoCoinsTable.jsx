'use client'

import { CoinList } from '@/lib/api/apiCoins';
import { numberWithCommas } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CryptoPagination from './CryptoPagination';

const CryptoCoinsTable = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const fetchTrendingCoins = async () => {
        const response = await fetch((CoinList('usd')));
        const data = await response.json();
        setCoins(data)
        setLoading(false)
    }

    // useEffect(() => {
    //     setLoading(true);
    //     fetchTrendingCoins()
    // }, [])

    const handleSearch = () => {
        // return 100
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        ))
    }


    return (
        <div className='py-6'>
            {/* CryptoCoinsTable<mark>{coins.length}</mark> */}
            <>
                <h1 className='text-center text-2xl mb-4'>Cryptocurrency Prices by Market Cap</h1>
                <input type='text' placeholder='Search a Crypto Currency...'
                    className='w-full px-6 py-4 text-slate-800 mb-6 rounded-lg'
                    onChange={(e) => setSearch(e.target.value)}
                />
                {handleSearch() && handleSearch().length > 0 &&
                    (<CryptoPagination page={page} setPage={setPage} handleSearch={handleSearch} />)
                }
                {loading
                    ? <h1>LOADING...</h1>
                    : (
                        <table className='w-full table-fixed	'>
                            <thead className='bg-cyan-400 h-16 text-xl'>
                                <tr>
                                    <th>Coin</th>
                                    <th>Price</th>
                                    <th>24h Change</th>
                                    <th>Market Cap</th>
                                </tr>
                            </thead>
                            <tbody className='w-full text-center'>
                                {handleSearch()
                                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                                    .map((coin) => {
                                        const profit = coin.price_change_percentage_24h > 0;
                                        return (
                                            // <Link href={`/crypto/${coin.id}`} className='w-full' key={coin.id}>
                                            <tr key={coin.id}
                                                className=' py-1 w-full  border-b border-white'>
                                                <td className='flex-col py-2'>
                                                    <Image src={coin?.image} alt={coin.name} width={50} height={50} className='mx-auto'/>
                                                    <h3 className='uppercase font-semibold'>{coin.symbol}</h3>
                                                    <p className='text-gray-300'>{coin.name}</p>
                                                </td>
                                                <td>${numberWithCommas(coin.current_price.toFixed(2))}</td>
                                                <td className={profit ? 'text-green-600 ' : 'text-red-600'}>
                                                    {profit && '+'}{coin.price_change_percentage_24h.toFixed(2)}%
                                                </td>
                                                <td>{numberWithCommas(coin.market_cap.toString().slice(0, -6))}M</td>
                                            </tr>
                                            // </Link>
                                        )
                                    })}
                            </tbody>
                        </table>

                    )
                }
                {handleSearch() && handleSearch().length > 0 &&
                    (<CryptoPagination page={page} setPage={setPage} handleSearch={handleSearch} />)
                }

            </>
        </div >
    )
}

export default CryptoCoinsTable