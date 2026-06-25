import menu from "../../assets/menu.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

import logo from "../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-10 md:top-[72px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px] xl:px-[50px] px-4 md:px-8 lg:px-10">
        <div className="bg-transparent lg:backdrop-blur-xl lg:bg-white/5 rounded-full px-5 py-3">

  {/* Mobile Header */}
  <div className="flex lg:hidden items-center justify-between">
    <img
      src={logo}
      alt="Logo"
      className="w-20 h-20 object-contain"
    />

    <button
      onClick={() => setOpen(true)}
      className="cursor-pointer"
    >
      <img
        src={menu}
        alt="Menu"
        className="w-8 h-8"
      />
    </button>
  </div>

  {/* Desktop Header */}
  <div className="hidden lg:flex items-center justify-between">

    {/* Left */}
    <div className="flex items-center gap-8 py-2.5">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        <img src={menu} alt="Menu" />
      </button>

      <nav className="flex gap-4 xl:gap-8">
        <a className="text-white text-xs xl:text-base">About</a>
        <a className="text-white text-xs xl:text-base">C&I Solar</a>
        <a className="text-white text-xs xl:text-base">EPC Advantages</a>
        <a className="text-white text-xs xl:text-base">Critical Infrastructure</a>
      </nav>
    </div>

    {/* Logo */}
    <div className="absolute left-1/2 -translate-x-1/3 top-1/2 -translate-y-1/2 animate-float">
      <div className="h-40 w-40 rounded-full bg-white/5 backdrop-blur-3xl flex items-center justify-center">
        <img
          src={logo}
          alt=""
          className="w-24 h-24 object-contain"
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 xl:gap-4 items-center">
      <button className="cursor-pointer bg-[#F5A623] hover:bg-transparent hover:border hover:border-[#F5A623] hover:text-[#F5A623] rounded-full p-2 xl:px-7 xl:py-4 font-semibold text-sm xl:text-base">
        Request Consultation
      </button>

      <button className="cursor-pointer border border-white/30 text-white rounded-full p-2 xl:px-7 xl:py-4 text-sm xl:text-base border-flow overflow-hidden">
        Download Overview
      </button>
    </div>

  </div>
</div>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}