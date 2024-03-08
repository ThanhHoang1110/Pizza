import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CgBell } from "react-icons/cg";

const Index = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed flex top-0 w-full bg-white h-[64px] px-[18px] shadow-xl justify-between'>
      <div className=' h-full  cursor-pointer flex items-center' onClick={()=>navigate("/")}>
          <img className='overflow-clip max-h-[35px]' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/bd3555a.png' alt=':Logo' />
      </div>
      <div className=' h-full w-auto flex items-center '>
        <CgBell className='h-[27px] w-[27px] cursor-pointer'/>
        <div className='flex  items-center p-[20px] cursor-pointer hover:bg-slate-100'>
          <img className='h-[24px] w-[24px] rounded-full' src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/cb1c3b/external-user-networking-tanah-basah-glyph-tanah-basah.png' alt=':Avatar' />
          <p className='font-bold  pl-[8px]'>Thành viên</p>
        </div>
        <div className='h-full flex items-center border-l-2 p-[8px] cursor-pointer hover:bg-slate-100'>
          <img className='h-[24px] w-[24px]' src='https://cdn.pizzahut.vn/images/Web_V3/OrderTracker/track_your_order.svg' alt='Theo dõi đơn hàng' />
          <p className='font-bold pl-1 '>Theo Dõi Đơn Hàng</p>
        </div>
      </div>
    </div>
  )
}

export default Index
