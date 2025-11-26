"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  CalendarDays,
  Fingerprint,
  LayoutDashboard,
  Leaf,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLogo from "./app-logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const menuItems = [
  { href: "/dashboard", label: "Events & Feed", icon: CalendarDays },
  { href: "/attendance", label: "Attendance", icon: Fingerprint },
  { href: "/eco", label: "Eco Tracker", icon: Leaf },
  { href: "/placement", label: "Placement Prep", icon: Briefcase },
];

export function AppSidebar() {
  const pathname = usePathname();
  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-avatar');

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <AppLogo className="size-8 text-primary" />
            <h2 className="text-xl font-bold font-headline">CampusSync</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userAvatar?.imageUrl} alt="User Avatar" data-ai-hint={userAvatar?.imageHint} />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">Siddharth N.</span>
            <span className="text-xs text-muted-foreground">siddharth@college.ac.in</span>
          </div>
          <Link href="/" className="ml-auto" aria-label="Logout">
            <LogOut className="size-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
