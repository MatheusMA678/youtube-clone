import {
  List,
  MagnifyingGlass,
  CameraPlus,
  Bell,
  User,
} from "@phosphor-icons/react";
import React from "react";

interface TopbarProps {
  onClick: () => void;
  isExtended: boolean;
}

import Logo from "../assets/logo.png";
import { IconButton } from "../components/IconButton";

export const Topbar = ({ onClick, isExtended }: TopbarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="col-span-2 flex items-center justify-between px-4 relative">
      <div className="flex items-center gap-4">
        <IconButton onClick={onClick} iconName="menu" />
        <a href="/">
          <img
            src={Logo}
            alt="YouTube"
            title="Página inicial do YouTube."
            className="h-6"
          />
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-stretch rounded-3xl border border-white/20 bg-[#121212] h-3/4 overflow-hidden justify-between w-[30rem]"
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className="px-4 bg-transparent outline-none placeholder:text-white/50 flex-1"
        />
        <button className="px-4 flex items-center justify-center bg-white/10 hover:bg-white/20">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      <div className="flex items-center gap-2">
        <IconButton iconName="video_call" />
        <IconButton iconName="notifications" />
        <IconButton iconName="person" />
      </div>
      <div
        className={`absolute h-12 px-4 top-full ${
          isExtended ? "left-60" : "left-20"
        } right-0 bg-dark flex items-center gap-2 overflow-x-auto filter--list`}
      >
        {[...Array(50).keys()].map((item) => (
          <span
            className="min-w-[100px] bg-white/20 py-1 px-2 rounded-lg"
            key={item}
          >
            Item {item}
          </span>
        ))}
      </div>
    </div>
  );
};
