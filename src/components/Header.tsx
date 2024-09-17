import darkLogo from "../assets/logo_dark.png";
import lightLogo from "../assets/logo_light.png";
import {
  Button,
  DarkThemeToggle,
  Dropdown,
  useThemeMode,
} from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const router = useNavigate();
  const theme = useThemeMode();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-2 backdrop-blur-md">
      <div className="flex items-center gap-1">
        <img
          src={theme.mode === "dark" ? darkLogo : lightLogo}
          className="size-5"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold text-[#6b7280] dark:text-white">
          BlogI
        </h1>
      </div>
      <Link to="/" className="flex items-center">
        <FaHome className="size-6 text-[#6b7280] dark:text-white" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex gap-5">
        <DarkThemeToggle />
        <Button
          size={"xs"}
          className="items-center border-2 border-[#0e7490] bg-transparent px-2 text-[#0e7490] hover:text-white dark:border-white dark:bg-transparent dark:text-white max-sm:hidden "
          onClick={() => router("/register")}
        >
          Sign Up
        </Button>
        <Button
          size={"xs"}
          className="items-center px-2 max-sm:hidden"
          onClick={() => router("/login")}
        >
          Sign In
        </Button>
        <Dropdown
          label={
            <MdOutlineMenu
              className="size-6 text-[#6b7280] dark:text-white "
              style={
                windowWidth > 767 ? { display: "none" } : { display: "block" }
              }
            />
          }
          arrowIcon={false}
          dismissOnClick={false}
          inline
        >
          <Dropdown.Item onClick={() => router("/register")}>
            Sign Up
          </Dropdown.Item>
          <Dropdown.Item onClick={() => router("/login")}>
            Sign In
          </Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Header;
