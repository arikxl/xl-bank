
const HeaderUserStats = ({ isScroll , showHeader}) => {
  return (
    <div className={` text-white  text-xl border-b ease-out transform duration-500
           ${isScroll || showHeader ? ' bg-slate-900 text-cyan-400' : 'text-white bg-transparent'}
   
  `}>
          HeaderUserStats
      </div>
  )
}

export default HeaderUserStats