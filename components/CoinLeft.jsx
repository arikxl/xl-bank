import { numberWithCommas } from '@/lib/utils/utils'
import Image from 'next/image'
import React from 'react'

const CoinLeft = ({ coin }) => {
    
    if(!coin) return 'LOADING...'
  return (
      <div className='md:w-1/3 w-full flex flex-col border-b-2 md:border-b-0 md:border-r-2 px-2'>
          
          <Image src={coin?.image.large} alt={coin?.name } width={150} height={150} className='mb-4 mx-auto'/>
          <h1 className='text-center sm:text-left text-3xl font-bold mb-4 text-cyan-400'>{ coin?.name}</h1>
          <p className=' text-lg mb-4'>
              {coin?.description.en.split(". ")[0]}.
          </p>
          <div className='flex flex-col sm:flex-row md:flex-col items-start sm:justify-between'>
              <h3 className=' text-2xl sm:text-xl mb-4 md:text-2xl'>
                  <b>Rank:</b>&nbsp;&nbsp;{coin?.market_cap_rank}
              </h3>
              <h3 className=' text-2xl mb-4 sm:text-xl md:text-2xl'>
                  <b>Current Price:</b>&nbsp;&nbsp;${numberWithCommas(coin?.market_data.current_price.usd)}
              </h3>
              <h3 className=' text-2xl mb-4 sm:text-xl md:text-2xl '>
                  <b>Market Cap:</b>&nbsp;&nbsp;${numberWithCommas(coin?.market_data.market_cap.usd.toString().slice(0, -6))}M
              </h3>
          </div>
      </div>
  )
}

export default CoinLeft