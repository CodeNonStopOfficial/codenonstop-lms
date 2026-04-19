import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import AdminToggleMenu from "../common/AdminToggleMenu";
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import AdminSidebarToggle from "../common/AdminSidebarToggle";
import { Input } from "../ui/input";
import { Bell } from "lucide-react";
import { Link } from "react-router";
import { ChevronsUpDown } from "lucide-react";

const AdminNavbar = () => {
  const user = true;
  const logoImage = false;
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="max-w-full border-b bg-gray-100">
      <nav className="flex items-center justify-between px-2 md:px-4 py-3">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetTrigger
              asChild
              className="md:hidden"
              onClick={() => setOpen(!isOpen)}
            >
              <div className="border p-2 rounded">
                <Menu size={20} />
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div className="flex items-center justify-between gap-2 border px-4 py-2 rounded-2xl">
                  <div className="items-center">
                    <Link to="/">
                      {logoImage ? (
                        <img src={logoImage} />
                      ) : (
                        <SheetTitle className="text-[22px] font-bold text-red-700">
                          Code<span className="text-blue-800">Nonstop</span>
                        </SheetTitle>
                      )}
                    </Link>
                    <SheetDescription className="font-semibold text-black">
                      Workspace
                    </SheetDescription>
                  </div>
                  <div className="items-center">
                    <ChevronsUpDown />
                  </div>
                </div>
                <AdminSidebarToggle />
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <Search className=" absolute m-2" size={15} />
            <Input
              type="search"
              name="search"
              className="md:w-84 w-50 px-7 bg-white"
              placeholder="What are you working on..."
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="border p-2 rounded-full bg-white hidden md:block">
            <Link to="admin-message">
              <Bell size={18} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="items-center">
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="border border-blue-800 w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>
                        <User size={20} className="text-blue-800" />
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-55 mt-3">
                    {/* Profile Toggle meneu */}
                    <AdminToggleMenu />
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
