import { SiNextdotjs } from "react-icons/si";
import UserIcon from "./UserIcon";
import Menu from "./Menu";
import Link from "next/link";

export default function AppHeader({ disableMenu }: { disableMenu?: boolean }) {
  return (
    <header
      className={`
        flex w-full p-2 md:px-10
        items-center ${disableMenu ? "justify-center" : "justify-between"}
        bg-white border-b border-gray-200
      `}
    >
      <Link
        href="/applicant"
        className="
          flex space-x-5
          items-center
        "
      >
        <SiNextdotjs className="icon-large" />
        <h1 className="title-large hidden md:block">NEXT Application</h1>
      </Link>
      {disableMenu || (
        <>
          <UserIcon />
        </>
      )}
    </header>
  );
}
