"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  const userId = 1;
  return (
    <>
      {sidebarLinks.map((link, i) => {
        const isActive =
          (pathName.includes(link.label) && link.route.length > 1) ||
          pathName === link.route;

        if (link.route === "/profile") {
          if (userId) link.route = `${link.route}/${userId}`;
        }

        const LinkComponent = (
          <Link
            key={i}
            href={link.route}
            className={`flex flex-1 items-center gap-4 bg-transparent p-4 ${cn(isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900")}`}
          >
            <Image
              src={link.imgURL}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
              alt={link.label}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {link.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <div key={link.route} className="flex">
            {LinkComponent}
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
