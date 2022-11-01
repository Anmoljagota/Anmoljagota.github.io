import { NavLink } from "react-router-dom";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Styles from "../AllCss/Allcss.module.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <Box className={Styles.sticky}>
      <Box className={Styles.MainBox}>
        <Box className={Styles.name}>
          Anmol
          <Image
            src="https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/portfolio-removebg.png?raw=true"
            h="70px"
            w="130px"
            mt="5px"
          />
        </Box>
        <Box className={Styles.SecondBox}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/"
          >
            <Link activeClass="active" smooth spy >
              Home{" "}
            </Link>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/about"
          >
            <Link activeClass="active" smooth spy to="palwan">
              About{" "}
            </Link>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/skills"
          >
            <Link activeClass="active" smooth spy to="skill">
              Skills{" "}
            </Link>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/project"
          >
            <Link activeClass="active" smooth spy to="project">
              Project{" "}
            </Link>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/contact"
          >
            <Link activeClass="active" smooth spy to="contact">
              Contact{" "}
            </Link>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/resume"
          >
            <Link activeClass="active" smooth spy to="palwan">
              Resume{" "}
            </Link>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
