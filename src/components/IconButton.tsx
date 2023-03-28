import React from "react";

interface IconButtonProps {
  iconName: string;
  onClick?: () => void;
}

export const IconButton = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/50 transition"
    >
      <span className="material-symbols-outlined">{iconName}</span>
    </button>
  );
};
