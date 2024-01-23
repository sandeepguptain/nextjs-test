import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/Contract/new" className="text-white">
          <FontAwesomeIcon icon={faFileCirclePlus} className="icon" /> New Contract
        </Link>
        </div>
      <div>
        <p className=" text-default-text">sandeep.kumar@novigo.com</p>
      </div>
    </nav>
  );
}

export default Nav;
