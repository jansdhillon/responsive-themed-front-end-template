"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/lib/utils";

export const Nav = ({ ...props }) => {
  return (
    <div
      className={cn(
        "bg-background text-lg md:text-4xl font-bold flex items-start text-left w-full flex-col p-3 shadow-sm fixed z-50",
        props.className
      )}
    >
      <div className="flex items-center gap-3 justify-between w-full p-2">
        <div className="text-primary text-lg font-bold">Brand</div>

        <nav className="flex  gap-4 justify-center items-center">
          <Sheet>
            <SheetTrigger asChild>
              <RxHamburgerMenu className="h-4 w-4 flex md:hidden" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-3">
                <Link
                  className={`text-sm font-medium hover:underline underline-offset-4`}
                  href="#"
                >
                  <SheetClose asChild>
                    <div>Link 1</div>
                  </SheetClose>
                </Link>
                <Separator />
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  <SheetClose asChild>
                    <div>Link 2</div>
                  </SheetClose>
                </Link>
                <Separator />
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  <SheetClose asChild>
                    <div>Link 3</div>
                  </SheetClose>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <div className="gap-3 hidden md:flex">
            <Link
              className={`text-sm font-semibold hover:underline underline-offset-4`}
              href="#"
            >
              <div className="">Link 1</div>
            </Link>
            <Link
              className="text-sm font-semibold hover:underline underline-offset-4"
              href="#"
            >
              <div className=" hidden md:flex">Link 2</div>
            </Link>
            <Link
              className="text-sm font-semibold hover:underline underline-offset-4"
              href="#"
            >
              <div className=" hidden md:flex">Link 3</div>
            </Link>
          </div>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};
