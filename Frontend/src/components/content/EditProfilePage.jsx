import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const EditProfilePage = () => {
  return (
     <section>
         <div>
              <form className='space-y-2'>
                 <div className='flex flex-col space-y-1 px-2'>
                     <Label>Full Name:</Label>
                     <Input type="text" name ="name" placeholder="Enter Your Name:" required/>
                 </div>
                  <div className='flex flex-col space-y-1 px-2'>
                     <Label>UserName:</Label>
                     <Input type="text" name ="username" placeholder="Enter Your Username:"/>
                 </div>
                 <div className='flex flex-col space-y-1 px-2'>
                     <Label>Email:</Label>
                     <Input type="email" name ="email" placeholder="Enter Your Email:" required/>
                 </div>
                 <div className='flex flex-col space-y-1 px-2'>
                     <Label>Phone Number:</Label>
                     <Input type="text" name ="phone" placeholder="Enter Your Phone:" required/>
                 </div>
                 <div className='flex flex-col space-y-1 px-2'>
                     <Label>Authenticated Role:</Label>
                     <Input type="text" name ="role" placeholder="Enter Your Name:"/>
                 </div>
                    <div className='flex flex-col space-y-1 px-2'>
                     <Label>Address:</Label>
                     <Input type="text" name ="address" placeholder="Enter Your Name:"/>
                 </div>
                 <div className='mt-4'>
                    <Button className="w-full">Update</Button>
                 </div>
              </form>
         </div>
     </section>
  )
}

export default EditProfilePage
