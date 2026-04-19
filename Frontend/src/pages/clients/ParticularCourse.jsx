import CourseOngoing from '@/components/content/CourseOngoing'
import CourseSection from '@/components/content/CourseSection'
import CourseTech from '@/components/content/CourseTech'
import CourseUpcoming from '@/components/content/CourseUpcoming'

const ParticularCourse = () => {
  return (
     <main className='max-w-full min-h-screen px-4 md:px-10 py-4'>
      <CourseSection/>
      <CourseOngoing/>
      <CourseUpcoming/>
      <CourseTech/>
     </main>
  )
}

export default ParticularCourse
