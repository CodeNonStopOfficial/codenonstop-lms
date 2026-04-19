import React from 'react'
import CourseCard from '../custom/CourseCard'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'


const GettingCourse = () => {
  return (
   <section className='min-h-screen py-5 px-2 md:px-10 bg-[#F8F8FD]'>
       <div>
            <div className='flex items-center gap-1 border rounded px-2 py-2 mb-3 w-fit'>
                 <h1 className='text-muted-foreground text-2xl font-bold'>UP-Comming Course</h1>
                 <ArrowRight size={15}/>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
               {Array.from({length:8}).map((data,index)=>(
                  <CourseCard key={index}/>
               ))
               }
           </div>
           <div className='mt-5 flex items-center'>
              <Button variant='outline'>See More Course <ArrowRight/></Button>
           </div>
       </div>
   </section>
  )
}

export default GettingCourse
