import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router'
import AdminCourseTablePage from '../courses/AdminCourseTablePage';

const AdminCourse = () => {
  const navigate  = useNavigate();
  return (
    <section className='px-4 py-4'>
        <div className='border-b'>
            <Button onClick={()=>navigate("create-course")} variant='outline' className="mb-3 flex items-center">
              <Plus size={20}/>
               Create New Course
            </Button>
        </div>
        <div>
           <AdminCourseTablePage/>
        </div>
    </section>
  )
}

export default AdminCourse
