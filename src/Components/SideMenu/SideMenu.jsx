import React from 'react'
import {GiHamburger} from 'react-icons/gi'
import adminImage from '../../Assets/adminImage.jpg'
import {AiFillHome} from 'react-icons/ai'
import {BiRestaurant} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import '../.././././index.css'
function SideMenu() {
  return (
    <div className='bg-sideMenuBg relative h-[100%] basis-20 p-4'>
       {/*Logo*/}
 <div className='logo mt-4 gap-2 text-[white] flex items-center justidy-center m-auto'>
        <GiHamburger className='text-[20px]'/>Foodie
    <h1 className='text-[20px] align-center justify-center font-black' ></h1>
</div>
{/*User DIv*/}
    <div className='flex items-center justify-center text-[white] flex-col mt-[3rem] admin'>
    <img src={adminImage} alt="Admin Image" className='h-[80px] w-[80px] border-red-200 border-[4px] object-cover rounded-full'/>
    
    <span className='font-bold opacity-70 mt-2 text-grey-400'>Welcome,</span>
    <h3 className='font-bold text-[white] '>Vasanth</h3>
    </div>
{/* Menu*/}
        <div className='m-auto grid justify-center mt-4'>
            <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 transition-all items-center'>
                <AiFillHome className='text-white'/>
                <span className='text-textColor'>Home</span>
            </li>
            <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
                <BiRestaurant className='text-white'/>
                <span className='text-textColor'>Categories</span>
            </li>
            <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
                <BsBookmarkCheckFill className='text-white'/>
                <span className='text-textColor'>Reservations</span>
            </li>
            <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
                <AiFillHeart className='text-white'/>
                <span className='text-textColor'>Favourites</span>
            </li>
     {/*Map div*/}
    <div className='mt-5 h-[14rem] w-full rounded-xl overflow-hidden'>
        


    </div>


        </div> 
    </div>
  )
}

export default SideMenu