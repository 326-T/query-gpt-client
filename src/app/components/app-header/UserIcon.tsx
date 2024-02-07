"use client";

import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export default function UserIcon() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn rounded-full">
        <div
          className="
            flex space-x-2
            items-centor
          "
        >
          <IoMenu className="icon-small" />
          <FaCircleUser className="icon-small" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="
          dropdown-content
          z-[1] p-5
          space-y-3
          shadow bg-base-100 rounded-box w-52
          body-medium
          overflow-scroll
        "
      >
        <li>
          <a>山田 太郎</a>
        </li>
        <li>
          <a>sample@example.org</a>
        </li>
      </ul>
    </div>
  );
}
