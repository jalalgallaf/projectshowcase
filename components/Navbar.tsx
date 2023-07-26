import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      {session ? (
        <>
          User photo
          <Link href="/create-project">Share your works</Link>
        </>
      ) : (
        <AuthProvider />
      )}
    </nav>
  );
};

export default Navbar;
