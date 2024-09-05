
import Link from "next/link";
import Image from "next/image";
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {List} from "@radix-ui/react-navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
        "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
        "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
const Navbar = () => {

  return (
    <header className="sticky top-0 z-[50] flex h-16 items-center gap-4 border-b bg-white transition-all duration-300 shadow-md">
      <nav className="hidden container w-full h-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="max-h-full max-w-full text-xl font-semibold text-black">
          <Image src="/images/logo.svg" height={30} width={147} alt="logo"/>
        </Link>
        <div className="hidden flex-col gap-6 text-base font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuItem>
                <NavigationMenuTrigger className={"bg-transparent hover:bg-transparent data-[active]:bg-transparent p-0 data-[active]:text-primary data-[state=open]:text-primary data-[state=open]:bg-transparent focus:bg-transparent active:bg-transparent text-base"}>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="nav-dropdown-list">
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">Software Design</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">Hardware Design</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">OTT Design</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">IOT Service</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">Vehicle Management System</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">Fleet Management System</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">GSM Attendance</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link href="#" className="nav-dropdown-link">Set Top Box</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="#" className="text-foreground transition-colors hover:text-primary">
            Protfolio
          </Link>
          <Link
              href="#"
              className="text-foreground transition-colors hover:text-primary"
          >
            Life At A Glance
          </Link>
          <Link
              href="#"
              className="text-foreground transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            <Search className="h-5 w-5 text-black hover:text-primary cursor-pointer"/>
            <Button className={"btn btn-blue btn-sm border-border"}>Contact Us</Button>
          </div>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className={"bg-white"} side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="max-h-full max-w-full text-xl font-semibold text-black">
              <Image src="/images/logo.svg" height={30} width={147} alt="logo"/>
            </Link>
            <NavigationMenu>
              <NavigationMenuList >
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"bg-transparent hover:bg-transparent data-[active]:bg-transparent p-0 data-[active]:text-primary data-[state=open]:text-primary data-[state=open]:bg-transparent focus:bg-transparent active:bg-transparent text-base"}>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="nav-dropdown-list">
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">Software Design</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">Hardware Design</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">OTT Design</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">IOT Service</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">Vehicle Management System</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">Fleet Management System</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">GSM Attendance</Link>
                      </li>
                      <li className="nav-dropdown-item">
                        <Link href="#" className="nav-dropdown-link">Set Top Box</Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="#" className="text-foreground transition-colors hover:text-primary">
              Protfolio
            </Link>
            <Link
                href="#"
                className="text-foreground transition-colors hover:text-primary"
            >
              Life At A Glance
            </Link>
            <Link
                href="#"
                className="text-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Button className={"btn btn-blue btn-sm border-border"}>Contact Us</Button>
          </nav>
        </SheetContent>
      </Sheet>

    </header>

  );
};

export default Navbar;