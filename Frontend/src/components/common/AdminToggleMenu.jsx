import React from 'react'
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from '../ui/dropdown-menu'
import { UserIcon } from 'lucide-react'
import { SettingsIcon } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { BadgeInfo } from 'lucide-react'
import { Bell } from 'lucide-react'
import { Link } from 'react-router'

const AdminToggleMenu = () => {
    return (
        <div>
            <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <Link to="admin-profile">
                     <DropdownMenuItem>
                         <UserIcon />
                          Profile
                     </DropdownMenuItem>
                </Link>
                <Link to="admin-my-courses">
                    <DropdownMenuItem>
                    <CreditCard />
                    My Courses
                   </DropdownMenuItem>
                </Link>
                <Link to="admin-setting">
                      <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem>
                </Link>
                <Link to="help-center">
                       <DropdownMenuItem>
                    <BadgeInfo />
                    Help Center
                </DropdownMenuItem>
                </Link>
                <Link to="admin-message">
                       <DropdownMenuItem>
                    <Bell />
                     Notification
                </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>
                <LogOutIcon />
                Log out
            </DropdownMenuItem>
        </div>
    )
}

export default AdminToggleMenu
