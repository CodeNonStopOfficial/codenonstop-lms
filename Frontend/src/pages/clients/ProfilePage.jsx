import Calendar from '@/components/content/Calendar'
import ProfileContent from '@/components/content/ProfileContent'
import ProfileMenuData from '@/components/content/ProfileMenuData'
import React from 'react'

const ProfilePage = () => {
  return (
    <section className='max-w-full min-h-screen px-2 md:px-8 py-5 '>
       <div className='flex flex-col md:flex-row gap-3 justify-between px-2 md:px-4 py-5 border rounded-2xl'>
           <div className='w-full'>
               <ProfileContent/>
           </div>
           <div className='w-full'>
               <div className='border rounded-2xl'> 
                <ProfileMenuData/>
               </div>
               <Calendar/>
           </div>
       </div>
    </section>
  )
}

export default ProfilePage
