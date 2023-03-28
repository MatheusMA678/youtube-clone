import React, { useState } from "react";
import { v4 } from "uuid";

interface SidebarProps {
  isExtended: boolean;
}

const links = [
  { id: v4(), label: "Início", href: "/", icon: "home" },
  { id: v4(), label: "Shorts", href: "/shorts", icon: "bolt" },
  { id: v4(), label: "Inscrições", href: "/subs", icon: "subscriptions" },
];

export const Sidebar = ({ isExtended }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`p-4 overflow-y-auto`}>
      <nav>
        <ul className="flex flex-col">
          {links.map((link, index: any) => (
            <li key={link.id} onClick={() => setActiveIndex(index)}>
              <div
                className={`flex ${
                  isExtended ? "" : "flex-col text-xs"
                } items-center gap-4 p-2 rounded-lg ${
                  activeIndex === index
                    ? `${
                        isExtended ? "bg-white/20" : ""
                      } hover:bg-white/20 font-semibold`
                    : "hover:bg-white/10"
                } cursor-pointer`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
