import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import logo from "../assets/Logo.svg"
import homeIcon from "../assets/ydntkwia_Planet - Ring - Outline.svg"
import mapIcon from "../assets/map.svg"
import gamesIcon from "../assets/star.svg"
import searchIcon from "../assets/search.svg"
import profileIcon from "../assets/profile.svg"

const items = [
  {
    title: "Accueil",
    url: "#",
    icon: homeIcon,
  },
  {
    title: "Carte",
    url: "#",
    icon: mapIcon,
  },
  {
    title: "Jeux",
    url: "#",
    icon: gamesIcon,
  },
  {
    title: "Chercher",
    url: "#",
    icon: searchIcon,
  },
  {
    title: "Profil",
    url: "#",
    icon: profileIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10 bg-[#101317]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Naos" className="w-8 h-8" />
          <span className="font-['Silom:Regular',sans-serif] text-sm tracking-[0.2em] text-[#DCCCFF] uppercase">NAOS</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#DCCCFF]/50 px-6 py-4 text-[10px] uppercase tracking-widest font-bold">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-white/5 transition-colors h-12 rounded-xl group">
                    <a href={item.url} className="flex items-center gap-4 px-4">
                      <img src={item.icon} alt="" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-white font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
