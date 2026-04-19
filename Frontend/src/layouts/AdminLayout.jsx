import ScrollToTop from "@/components/custom/ScrollToTop";
import AdminNavbar from "@/components/layouts/AdminNavbar";
import AdminSidebarLayout from "@/components/layouts/AdminSidebarLayout";
import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <section className="flex max-w-full">
      <div className="w-[25%] sticky h-screen top-0 hidden md:block">
        <AdminSidebarLayout />
      </div>
      <main className="w-full">
        <div className="w-full sticky top-0">
          <AdminNavbar />
        </div>
        <div>
          <ScrollToTop />
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default AdminLayout;
