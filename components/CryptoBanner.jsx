'use client'

import Link from 'next/link';
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel';
import { useEffect, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';

import { TrendingCoins } from '@/lib/api/apiCoins'
import { numberWithCommas } from '@/lib/utils/utils';
import { responsiveCarousel } from '@/data/data';


const CryptoBanner = () => {
    const [trending, setTrending] = useState([]);

    const fetchTrendingCoins = async () => {
        const response = await fetch((TrendingCoins('usd')));
        const data = await response.json();
        setTrending(data)
    }

    // useEffect(() => {
    //     fetchTrendingCoins()
    // }, [])

    const items = trending?.map((coin) => {
        const profit = coin?.price_change_percentage_24h >= 0;
        return (
            <Link href={`/crypto/${coin.id}`} key={coin.id}
                className='flex flex-col items-center'>
                <Image src={coin?.image} alt={coin.name} width={100} height={100} />
                <p className='uppercase font-bold'>{coin?.symbol}&nbsp;
                    <span className={profit ? 'text-green-600 ' : 'text-red-600'}>
                        {profit && '+'}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
                </p>
                <p>${numberWithCommas(coin?.current_price.toFixed(2))}</p>
            </Link>
        )
    });


    return (
        <section className="bg-[url('https://media.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif')]
        w-[100%]  py-6  bg-cover bg-no-repeat	">
            <h1 className='text-center text-3xl font-bold mb-6'>Crypto World</h1>
            <p className='text-cyan-400 text-center text-lg mb-4'>
                Get all the info regarding your crypto &#xa2;urrency
            </p>
            <div className='flex items-center justify-center '>
                <AliceCarousel mouseTracking infinite autoPlayInterval={1000}
                    animationDuration={1500} disableButtonsControls
                    disableDotsControls responsive={responsiveCarousel} autoPlay items={items}
                />
            </div>
        </section>
    )
}

export default CryptoBanner