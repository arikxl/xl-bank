
const HeaderUserStats = ({ isScroll, showHeader, isSideBarShow }) => {
  return (
    <div className={`${isSideBarShow && 'hidden'} text-white
      text-xl border-b ease-out transform duration-500 z-50   
        ${isScroll || showHeader
        ? ' bg-slate-900 text-cyan-400'
        : 'text-white bg-transparent'}
    `}>
      <div className='overflow-x-hidden overflow-y-clip	m-0 p-0'>
        <p className=' user-stats sm:green'>
          money:$1000000 coins: BIT:1
        </p>
      </div>
    </div>
  )
}

export default HeaderUserStats