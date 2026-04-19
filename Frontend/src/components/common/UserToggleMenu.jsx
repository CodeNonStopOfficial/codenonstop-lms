import React from 'react'
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from '../ui/dropdown-menu'
import { UserIcon } from 'lucide-react'
import { SettingsIcon } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { LayoutDashboard } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { BadgeInfo } from 'lucide-react'
import { Bell } from 'lucide-react'
import { Link } from 'react-router'

const UserToggleMenu = () => {
    const user = true;
    return (
        <div>
            <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <Link to="/get-started/profile">
                     <DropdownMenuItem>
                         <UserIcon />
                          Profile
                     </DropdownMenuItem>
                </Link>
                <Link to="/get-started/my-purchases">
                    <DropdownMenuItem>
                    <CreditCard />
                    My Purchases
                   </DropdownMenuItem>
                </Link>
                <Link to="/get-started/setting">
                      <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem>
                </Link>
                <Link to="/get-started/help-center">
                       <DropdownMenuItem>
                    <BadgeInfo />
                    Help Center
                </DropdownMenuItem>
                </Link>
                <Link to="/get-started/notification">
                       <DropdownMenuItem>
                    <Bell />
                     Notification
                </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {
                user && (
                    <Link to="/get-started/admin/dashboard">
                        <DropdownMenuItem>
                         <LayoutDashboard />
                           Dashboard
                         </DropdownMenuItem>
                    </Link>
              )
            }
            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>
                <LogOutIcon />
                Log out
            </DropdownMenuItem>
        </div>
    )
}

export default UserToggleMenu
