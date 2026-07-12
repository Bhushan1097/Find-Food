import React from 'react'



import NavLinks from '../../../../components/OwnerForm/NavLinks'
import DashIcon from '../../../../assets/Vector.png'
import detailsIcon from '../../../../assets/Group.png'
import menuIcon from '../../../../assets/fluent_food-24-regular.png'
import priceIcon from '../../../../assets/tdesign_money.png'
import timeIcon from '../../../../assets/mingcute_time-line.png'
import feedIcon from '../../../../assets/fluent_person-feedback-16-regular.png'


const Sidebar = () => {
  return (
    <div className='w-[25%] bg-[#F9EEEB] min-h-screen  p-5'>
       <NavLinks navName='Dashboard' icon={DashIcon} navigateTo = 'dashboard'/>
       <NavLinks navName='Details' icon={detailsIcon} navigateTo = 'messData'/>
       <NavLinks navName='Menu' icon={menuIcon} navigateTo = 'menuData'/>
       <NavLinks navName='Price' icon={priceIcon} navigateTo = 'priceData'/>
       <NavLinks navName='Time' icon={timeIcon} navigateTo = 'timeData'/>
       <NavLinks navName='feedback' icon={feedIcon} navigateTo = 'feedbackData'/>
    </div>
  )
}

export default Sidebar