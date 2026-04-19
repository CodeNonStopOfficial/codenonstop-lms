import CourseDetailsPreview from '@/components/courses/CourseDetailsPreview'
import CoursesDetails from '@/components/courses/CoursesDetails'
import CoursesDetailsMenu from '@/components/courses/CoursesDetailsMenu'
import React from 'react'


const CourseDetailsPage = () => {
  return (
    <section className='max-w-full min-h-screen'>
          <CoursesDetails/>
          <CoursesDetailsMenu/>
          <CourseDetailsPreview/>
    </section>
  )
}

export default CourseDetailsPage
