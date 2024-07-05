import { useContext } from "react";
import {
  // FaTwitter,
  // FaLinkedin,
  FaInstagram,
  FaFacebookF,
  // FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";

const socialIcon = [
  // {
  //   icon: <FaLinkedin />,
  //   link: "",
  // },
  // {
  //   icon: <FaTwitter />,
  //   link: "",
  // },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/6ense.official?igsh=c3F2djhoNm1nZjF3",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61560660062554",
  },
  // {
  //   icon: <FaYoutube />,
  //   link: "",
  // },
];

const LowerBottomFooter = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className=" w-full flex flex-col md:flex-row justify-between items-center py-4 md:py-6 bg-lightBlue md:bg-transparent">
      <div className="flex pb-5 md:hidden">
        {/* <img src={logo} alt="logo" style={{ height: "24px", width: "auto" }} /> */}
        <h1 className="text-3xl font-bold">6ense</h1>
      </div>
      <div className="flex justify-start gap-x-8">
        {socialIcon.map((icon, index) => (
          <Link
            to={icon.link}
            target="_blank"
            key={index}
            className={` font-medium py-1 text-[22px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
              isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
            } `}
          >
            {icon.icon}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 flex-col-reverse md:flex-row justify-end gap-x-16 gap-y-5 mt-5 md:mt-0">
        <Link
          className={` font-medium py-1 text-[14px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
            isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
          } `}
        >
          © 2020-2024 6ENSE Inc.
        </Link>
        <div className="flex justify-end gap-x-16">
          <Link
            className={` font-medium py-1 text-[14px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
              isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
            } `}
          >
            Login
          </Link>
          <Link
            className={` font-medium py-1 text-[14px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
              isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
            } `}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LowerBottomFooter;
