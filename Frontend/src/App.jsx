import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import StudentLayout from './layouts/StudentLayout'
import Home from './pages/clients/Home'
import AuthLayout from './layouts/AuthLayout'
import GettingPage from './pages/clients/GettingPage'
import ParticularCourse from './pages/clients/ParticularCourse'
import NotFoundPage from './components/errors/NotFoundPage'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import AuthRootLayout from './layouts/AuthRootLayout'
import CourseDetailsPage from './pages/courses/CourseDetailsPage'
import ProfilePage from './pages/clients/ProfilePage'
import RootLayout from './layouts/RootLayout'
import MyLearningPage from './pages/clients/MyLearningPage'
import SettingPage from './pages/setting/SettingPage'
import HelpCenter from './pages/clients/HelpCenter'
import Notification from './pages/clients/Notification'
import ReferalPage from './pages/clients/ReferalPage'
import EducatorPage from './pages/clients/EducatorPage'
import CourseBatchPage from './pages/service/CourseBatchPage'
import CouseStorePage from './pages/service/CouseStorePage'
import SubscriptionPage from './pages/service/SubscriptionPage'
import SearchCoursePage from './pages/courses/SearchCoursePage'
import AdminLayout from './layouts/AdminLayout'
import DashboardPage from './pages/admin/DashboardPage'
import AdminCourse from './pages/admin/AdminCourse'
import AnalyticesPage from './pages/admin/AnalyticesPage'
import AdminLiveClassesPage from './pages/admin/AdminLiveClassesPage'
import AdminPravateClassesPage from './pages/admin/AdminPravateClassesPage'
import AdminLibraryPage from './pages/admin/AdminLibraryPage'
import AdminStudentPage from './pages/admin/AdminStudentPage'
import AdminDepartmentPage from './pages/admin/AdminDepartmentPage'
import AdminHelpCenterPage from './pages/admin/AdminHelpCenterPage'
import AdminSettingPage from './pages/admin/AdminSettingPage'
import AdminMessagePage from './pages/admin/AdminMessagePage'
import AdminCourseCreate from './pages/courses/AdminCourseCreate'
import AdminCourseDetailsPage from './pages/courses/AdminCourseDetailsPage'
import AdminSessionCreate from './pages/courses/AdminSessionCreate'
import CourseSessionLive from './pages/courses/CourseSessionLive'
import CourseSessionRecorded from './pages/courses/CourseSessionRecorded'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentLayout />,
    children: [
      {index : true, element :<Home/>},
      {path : "educator" , element : <EducatorPage/>},
      {path:"batch" , element : <CourseBatchPage/>},
      {path:"store", element : <CouseStorePage/>},
      {path :"subscription", element : <SubscriptionPage/>},
      {path:"course", element : <SearchCoursePage/>}
    ]
  },
  {
     path: "/get-started",
     element : <RootLayout/>,
     children : [
       {path:"profile", element : <ProfilePage/>},
       {path :"my-purchases", element : <MyLearningPage/>},
       {path:"setting", element : <SettingPage/>},
       {path:"help-center",element : <HelpCenter/>},
       {path:"notification",element:<Notification/>},
       {path :"referal", element : <ReferalPage/>}
     ]
  },
  {
       path : "/get-started",
       element : <AuthLayout/>,
       children:[
         {index : true , element : <GettingPage/>},
         {path :"course", element : <ParticularCourse/>},
         {path :"course/:id", element : <CourseDetailsPage/>},
       ]
  },
  {
      path:"/",
      element : <AuthRootLayout/>,
      children:[
         {path:"auth/sign-in", element : <LoginPage/>},
         {path:"/auth/join-for-free", element : <LoginPage/>},
         {path:"auth/sign-up", element : <SignupPage/>},
      ]
  },
  {
     path :"/get-started/admin",
     element : <AdminLayout/>,
     children : [
        {path :"dashboard" , element : <DashboardPage/> },
        {path : "courses" , element : <AdminCourse/>},
        {path : "analytices" , element : <AnalyticesPage/>},
        {path : "live-classes" , element : <AdminLiveClassesPage/>},
        {path : "private-classes" , element : <AdminPravateClassesPage/>},
        {path : "liberary", element : <AdminLibraryPage/>},
        {path : "students" , element : <AdminStudentPage/>},
        {path : "department" , element : <AdminDepartmentPage/>},
        {path : "help-center", element : <AdminHelpCenterPage/>},
        {path : "admin-setting" , element : <AdminSettingPage/>},
        {path : "admin-message" , element : <AdminMessagePage/>},
        {path : "courses/create-course" , element : <AdminCourseCreate/>},
        {path : "courses/course-details/:courseId" , element : <AdminCourseDetailsPage/>},
        {path : "courses/course-details/:courseId/session-create/", element : <AdminSessionCreate/>},
        {path : "courses/course-details/:courseId/session-create/live-video" , element : <CourseSessionLive/>},
        {path : "courses/course-details/:courseId/session-create/recorded-video" , element : <CourseSessionRecorded/>}
      
     ]
  },
  {
    path:"*", element : <NotFoundPage/>
  }
])
const App = () => {
  return (
    <main>
       <RouterProvider router={router}/>
    </main>
  )
}

export default App;
