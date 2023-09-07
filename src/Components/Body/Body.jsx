import React from 'react'
import {AiFillStar, AiOutlineAppstoreAdd,AiOutlineSearch} from 'react-icons/ai'
import {MdMonetizationOn} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'
import {BsArrowRightShort} from 'react-icons/bs'

import pizza from '../../Assets/pizza.jpg'
import falooda from '../../Assets/falooda.jpg'



function Body() {
  return (
    <div className='bg-bodyBg  h-[100%] basis-80 p-8 '>
        {/*Tab sction */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center border-b-2 pb-2 basis-1/2 gap-2'>
            <AiOutlineSearch className='text-hoverColor text-[20px] cursor-pointer'/>
            <input type='text' placeholder='Search Your Favourite Food' className='border-none outline-none placeholder:text-sm focus:outline-none'/>
          </div>
    <div className='flex gap-4 items-center '>
      <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[50px] hover:text-[20px] transition-all'/>
      <button className='bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py px-4 rounded-[5px] hover:bg-[#55545e] transition-all'>Go Premium</button>
    </div>
</div>
        {/*Title div */}

    <div className='flex items-center justify-between mt-8'>
    <div className='title'>
       <h1 className='text-[35px] text-[titleColor] tracking-[1px] font-black'>
          Find the best Place
       </h1>
       <span className='text-[16px] opacity-70'><strong>249 Restaurants, </strong> Choose Yours</span>
    </div>
    <div className='flex items-center justify-between'>
      
      <div className='specials px-[4] text-center border-r-2'>
        <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
        <small className='text-[16px] opacity-70'>Specials</small>
      </div>

      <div className='deliveries  px-[4] text-center'>
        <h3 className='text-[20px] font-bold text-titleColor'>90</h3>
        <small className='text-[16px] opacity-70'>Deliveries</small>
      </div>

    </div>
    </div>

        {/*Categories div */}
    <div className='flex mt-8 items-center gap-10'>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
      <div className='singleCategory grid items-center justify-between text-center'>
        <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1 '>
          <img src={pizza} alt='food-image' className='w-[70%] flex justify-center m-auto'/>
        </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>
          Italian
        </span>
      </div>
    </div>
        {/*Restaurants Section */}
      <div className='restaurants mt-8'>
        <div className='flex items-center justify-between'>
          <div className='title'>
            <h1 className='text-[25px] text-textColor font-bold'>
              New Restaurant
            </h1>
            <span className='text-[16px]  opacity-70 pt-2'>
          <strong>9 restaurants,  </strong>have been opened up in town
        </span>

          </div>
          <button className=' cursor-pointer text-[black] font-semibold py px-4 rounded-[5px] hover:bg-[#55545e] hover:text-[white] transition-all'>View all <BsArrowRightShort className='text-[20px]'/></button>
        </div>

        <div className='restaurantContainer py-8 flex justify-between items-center'>
            
            <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]'>
              <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                <img src={falooda} alt="" className='w-full h-full object-cover'/>
              </div>
              <h1 className='restName block text-center folt-bold opacity-90 pt-4'>Alwin</h1>
              <small className='block text-center text-[#6060] font-medium'>Asian Restaurant</small>

              <div className='info mt-5 flex justify-center items-center'>
                <div className='singleInfo grid px-3'>
                  <AiFillStar className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo grid px-3'>
                <GiPathDistance className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>
              </div>

            </div>

            <div className='singleRestaurant w-[220px] bg-colorTwo p-3 rounded-[10px]'>
              <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                <img src={falooda} alt="" className='w-full h-full object-cover'/>
              </div>
              <h1 className='restName block text-center folt-bold opacity-90 pt-4'>Alwin</h1>
              <small className='block text-center text-[#6060] font-medium'>Asian Restaurant</small>

              <div className='info mt-5 flex justify-center items-center'>
                <div className='singleInfo grid px-3'>
                  <AiFillStar className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo grid px-3'>
                <GiPathDistance className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>
              </div>

            </div>

            <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]'>
              <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                <img src={falooda} alt="" className='w-full h-full object-cover'/>
              </div>
              <h1 className='restName block text-center folt-bold opacity-90 pt-4'>Alwin</h1>
              <small className='block text-center text-[#6060] font-medium'>Asian Restaurant</small>

              <div className='info mt-5 flex justify-center items-center'>
                <div className='singleInfo grid px-3'>
                  <AiFillStar className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo grid px-3'>
                <GiPathDistance className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>
              </div>

            </div>

            <div className='singleRestaurant w-[220px] bg-colorFour p-3 rounded-[10px]'>
              <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                <img src={falooda} alt="" className='w-full h-full object-cover'/>
              </div>
              <h1 className='restName block text-center folt-bold opacity-90 pt-4'>Alwin</h1>
              <small className='block text-center text-[#6060] font-medium'>Asian Restaurant</small>

              <div className='info mt-5 flex justify-center items-center'>
                <div className='singleInfo grid px-3'>
                  <AiFillStar className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>

                <div className='singleInfo grid px-3'>
                <GiPathDistance className='flex mt-auto justify-center items-center'/>
                  <h4 className='font-semibold text-[#4f458]'>3.7</h4>
                </div>
              </div>

            </div>
      
        </div>

      </div>        
          
       
     

        

      
        </div>

        

  )
}

export default Body