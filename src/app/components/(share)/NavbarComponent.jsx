"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

// import {SearchIcon} from "@/SearchIcon";
import { SearchIcon } from "./../SearchIcon";

const NavbarComponent = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="text-[#2e8b57] sm:block font-bold text-2xl">
            SkillConnect
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem
          // isActive
          >
            <Link
              href="freelancerProfile"
              color="foreground"
              // aria-current="page"
              // color="secondary"
            >
              Freelancers Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="jobPost" color="foreground">
              Job Post
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="solutions">
              Solutions
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>

            <DropdownItem key="freelancerProfile">
              Freelancers Profile
            </DropdownItem>
            <DropdownItem key="jobPost">Jobs Post</DropdownItem>
            <DropdownItem key="about">About</DropdownItem>
            <DropdownItem key="solution">Solutions</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
