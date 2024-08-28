"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mMenuItems } from "@/config/mock";
import IconMenu from "@/assets/icons/IconMenu";
import IconSignOut from "@/assets/icons/IconSignOut";

const Header = () => {
  const [isAccountOpen, setisAccountOpen] = useState(false);
  return (
    <>
      <header className="w-full border-b border-elevation-2 text">
        <div className="px-16 md:px-32 mx-auto w-full max-w-1280 h-72 flex items-center gap-12 md:gap-24">
          <div className="px-40 text-16 py-6 text-primary bg-white/5 rounded-8 font-medium mx-8 border-status-success/5 border">
            Logo
          </div>
          <nav className="text-primary lg:flex items-center gap-8 font-semibold hidden">
            {mMenuItems.map((menu, i) => {
              return (
                <Link
                  key={i}
                  className="px-12 py-8 hover:text-primary-hover u-transition-color"
                  href={"#"}
                >
                  {menu}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-8">
            <button className="text-secondary font-semibold px-12 py-10 border border-primary-hover rounded-full bg-elevation-2  hidden md:block">
              How It Works
            </button>
            <div className="relative  ml-4">
              <button
                onClick={() => setisAccountOpen(!isAccountOpen)}
                className={`relative z-10 flex items-center gap-8 rounded-12 text-primary px-12 py-10 ${
                  isAccountOpen ? "bg-elevation-1" : "bg-elevation-3"
                }`}
              >
                <Image
                  className="w-18 h-18 rounded-full"
                  src="/assets/avatar.png"
                  width={18}
                  height={18}
                  alt=""
                />
                bongo.eth
              </button>
              {isAccountOpen && (
                <div className="absolute bg-elevation-3 -m-4 -right-1 -top-1 -left-1 pt-56 rounded-12">
                  <div
                    className="flex gap-8 text-primary items-center justify-center px-12 pt-8 pb-12 font-semibold cursor-pointer"
                    onClick={() => setisAccountOpen(false)}
                  >
                    Sign out <IconSignOut />
                  </div>
                </div>
              )}
            </div>
            <div className="md:hidden cursor-pointer">
              <IconMenu />
            </div>
          </div>
        </div>
      </header>
      <nav className="text-primary flex items-center gap-8 font-semibold lg:hidden mt-24 rounded-24 bg-elevation-1 flex-wrap mx-16 p-8">
        {mMenuItems.map((menu, i) => {
          return (
            <Link
              key={i}
              className="px-12 py-8 hover:text-primary-hover u-transition-color"
              href={"#"}
            >
              {menu}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
