"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(status === "loading");

  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  const isAuthenticated = status === "authenticated";
  const userImage = session?.user?.image;
  const userType = session?.user?.type;
  const userEmail = session?.user?.email;

  // If loading, show the loader
  //  if (loading) {
  //   return <Loader />;
  // }
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effect to track window size and update the state
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px for large screens, you can change the value as needed
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar isBordered className="bg-green-50">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="text-[#2e8b57] sm:block font-bold text-2xl">
            SkillConnect
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link href="dashboard" color="foreground">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="freelancerProfile">
              Freelancer Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="faq">
              FAQ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="us">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          {isLargeScreen ? (
            <Dropdown
              placement="bottom-end"
              className="border-2 border-red-600"
            >
              {isAuthenticated ? (
                <>
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src={userImage}
                    />
                  </DropdownTrigger>
                </>
              ) : (
                <>
                  <NavbarItem>
                    <Button
                      onClick={() => signIn()}
                      color="primary"
                      variant="ghost"
                    >
                      Sign In
                    </Button>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/api/auth/signup">
                      <Button color="primary" variant="ghost">
                        Sign Up
                      </Button>
                    </Link>
                  </NavbarItem>
                </>
              )}

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">
                    <span>{userType}</span>: <span>{userEmail}</span>
                  </p>
                </DropdownItem>
                {/* Other dropdown items for large screen */}
                <DropdownItem href="dashboard" key="dashboard">
                  Dashboard
                </DropdownItem>
                <DropdownItem href="freelancerProfile" key="freelancerProfile">
                  Freelancers Profile
                </DropdownItem>
                <DropdownItem href="jobPost" key="jobPost">
                  Jobs Post
                </DropdownItem>
                <DropdownItem href="about" key="about">
                  About
                </DropdownItem>
                <DropdownItem href="solution" key="solution">
                  Solutions
                </DropdownItem>
                <DropdownItem onClick={() => signOut()} color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Dropdown
              placement="bottom-start"
              className="border-2 border-green-600"
            >
              {/* Render a different dropdown for small screens */}
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src={userImage}
                />
              </DropdownTrigger>

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">
                    <span>{userType}</span>: <span>{userEmail}</span>
                  </p>
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/profile"
                  key="/dashboard/profile"
                >
                  My Profile
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/earnings"
                  key="/dashboard/earnings"
                >
                  Earnings
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/proposals"
                  key="/dashboard/proposals"
                >
                  Proposals
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/messages"
                  key="/dashboard/messages"
                >
                  Messages
                </DropdownItem>
                {/* FOR CLIENT MENU  */}
                <DropdownItem href="/dashboard/job" key="/dashboard/job">
                  Jobs
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/management"
                  key="/dashboard/management"
                >
                  Proposals Management
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/payment"
                  key="/dashboard/payment"
                >
                  Payment Management
                </DropdownItem>
                <DropdownItem
                  href="/dashboard/feedback"
                  key="/dashboard/feedback"
                >
                  Review & Feedback
                </DropdownItem>
                <DropdownItem href="solution" key="solution">
                  Solutions
                </DropdownItem>
                <DropdownItem onClick={() => signOut()} color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
          {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">
                <span>{userType}</span>: <span>{userEmail}</span>
              </p>
            </DropdownItem>
            <DropdownItem href="dashboard" key="dashboard">
              Dashboard
            </DropdownItem>
            <DropdownItem href="freelancerProfile" key="freelancerProfile">
              Freelancer Profile
            </DropdownItem>
            <DropdownItem href="jobPost" key="jobPost">
              Jobs Post
            </DropdownItem>
            <DropdownItem href="about" key="about">
              About
            </DropdownItem>
            <DropdownItem href="solution" key="solution">
              Solutions
            </DropdownItem>
            <DropdownItem onClick={() => signOut()} color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu> */}
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
