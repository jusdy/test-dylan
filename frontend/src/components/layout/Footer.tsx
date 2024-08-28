"use client";
import IconDiscord from "@/assets/icons/IconDiscord";
import IconGithub from "@/assets/icons/IconGithub";
import IconInstagarm from "@/assets/icons/IconInstagram";
import IconLogo from "@/assets/icons/IconLogo";
import IconX from "@/assets/icons/IconX";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-elevation-2 ">
      <div  className=" p-24 md:p-8 md:px-32 flex flex-col md:flex-row gap-32 mx-auto w-full max-w-1280">
      <div className="flex items-center justify-between">
        <div className="px-40 text-16 py-6 text-primary bg-white/5 rounded-8 font-medium border-status-success/5 border md:hidden">
          Logo
        </div>
        <div className="flex items-center gap-16">
          <a href="#">
            <IconDiscord />
          </a>
          <a href="#">
            <IconX />
          </a>
          <a href="#">
            <IconInstagarm />
          </a>
          <a href="#">
            <IconGithub />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden">
        <a href="#">Doc</a>
        <a href="#">Blog</a>
        <a href="#">Support</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <div className="w-full flex justify-center">
        <IconLogo />
      </div>
      <div className="hidden md:block"></div></div>
    </footer>
  );
};

export default Footer;
