"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faHome,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const savedInput = typeof window !== "undefined" ? localStorage.getItem("userInput") : null;

  const handleNavigation = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push('/');
      router.refresh();
    }
  };

  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
      </div>
        {savedInput === 'admin' && <div className="flex items-center space-x-4">
        <Link href={`/${savedInput}/Contract/new`} className="text-white">
          <FontAwesomeIcon icon={faFileCirclePlus} className="icon" /> New
          Contract
        </Link>
      </div>}
      <div className="flex gap-5">
        <p className="text-default-text">{savedInput}</p>
        <FontAwesomeIcon
          icon={faPowerOff}
          className="icon cursor-pointer"
          onClick={handleNavigation}
        />
      </div>
    </nav>
  );
};

export default Nav;
