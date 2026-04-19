import ScrollToTop from '@/components/custom/ScrollToTop';
import StudentFooter from '@/components/layouts/StudentFooter';
import StudentNavbar from '@/components/layouts/StudentNavbar';
import React from 'react'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <section>
            <div className='w-full sticky top-0 z-50'>
                 <StudentNavbar/>
            </div>
            <main>
                <ScrollToTop/>
                <Outlet/>
            </main>
            <div>
                <StudentFooter/>
            </div>
        </section>
    )
}

export default AuthLayout;
