'use client'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from '@/lib/api/apiCoins'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';



const CryptoBanner = () => {
    const [trending, setTrending] = useState([]);

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins('usd'));
        setTrending(data)
    }

    useEffect(() => {
        fetchTrendingCoins()
    }, [])

    const handleDragStart = (e) => e.preventDefault();

    const items = trending.map((coin) => {
        const profit = coin?.price_change_percentage_24h >= 0;
        return (
            <Link href={`/crypto/${coin.id}`} key={coin.id}
                className='flex flex-col items-center'>
                <Image src={coin?.image} alt={coin.name} width={100} height={100} />
                <p>{coin?.symbol}&nbsp;
                    <span className={profit ? 'text-green-600' : 'text-red-600'}>
                        {profit ? '+' : '-'}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
                </p>
                <p>${ numberWithCommas(coin?.current_price.toFixed(2))}</p>
            </Link>
        )
    })
    const responsive = {

        0: {
            items: 2,
        },
        512: {
            items: 4,

        }

    }

    return (
        <section className="bg-[url('https://res.cloudinary.com/arikxl/image/upload/v1692368614/Ella2023/ojae1affp5husxkqbzez.jpg')]
        w-[100%]  py-6 ">
            <h1 className='text-center text-3xl font-bold mb-6'>Crypto World</h1>
            <p className='text-cyan-400 text-center text-lg mb-4'>Get all the info regarding your crypto &#xa2;urrency</p>
            <div className='flex items-center justify-center bg-red-400'>
                <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1500}
                    disableDotsControls responsive={responsive} autoPlay items={items} disableButtonsControls />
            </div>
        </section>
    )
}

export default CryptoBanner