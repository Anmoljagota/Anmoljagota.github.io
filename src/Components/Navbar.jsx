import { NavLink } from "react-router-dom";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Styles from "../AllCss/Allcss.module.css";
import { Link } from "react-scroll";
let info = [
  { Link: "/", title: "Home" },
  { Link: "/about", title: "About" },
  { Link: "/skill", title: "Skills" },
  { Link: "/project", title: "Projects" },
  { Link: "/contact", title: "Contact" },
  { Link: "/resume", title: "Resume" },
];
const Navbar = () => {
  return (
    <Box className={Styles.sticky}>
      <Box className={Styles.MainBox}>
        <Box className={Styles.name}>
          Anmol Jagota
          <Image src="https://cdn.lifehacker.ru/wp-content/uploads/2014/01/15053637-shutterstock_123609076.jpg" h="45px" w="130px"/>
        </Box>
        <Box className={Styles.SecondBox}>
          {info.map((data) => (
            <NavLink
              key={data.title}
              className={({ isActive }) => {
                return isActive ? Styles.active : Styles.default;
              }}
              to={data.Link}
            >
              <Link to="palwan" smooth={true} duration={2000}>
                {data.title}
              </Link>
            </NavLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
