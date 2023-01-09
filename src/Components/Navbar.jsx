import { NavLink } from "react-router-dom";
import React from "react";
import { Box, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Styles from "../AllCss/Allcss.module.css";
import { Link } from "react-scroll";
import { AddIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {IoIosContacts} from "react-icons/io";
import {GrProjects} from "react-icons/gr";
import {GiSkills} from "react-icons/gi"
import {FcAbout} from "react-icons/fc"
const Navbar = () => {
  return (
    <Box className={Styles.sticky}  >
      <Box className={Styles.MainBox} >
        <Box className={Styles.name}>
          Anmol
          <Image
            src="https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/portfolio-removebg.png?raw=true"
            h="70px"
            w="130px"
            mt="5px"
          />
        </Box>
        <Box className={Styles.SecondBox} display={{sm:"none",base:"none",md:"none",lg:"flex"}} >
          <NavLink
            className={({ isActive }) => {
              return isActive ? Styles.active : Styles.default;
            }}
            to="/"
          >
            <Link activeClass="active" smooth spy>
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
            <a
              href="https://drive.google.com/file/d/1ikGGkMAo--CK5zBIwv4sCI6Ms3fmxa9M/view?usp=sharing"
              target="_blank"
            >
              <Box>Resume  <ExternalLinkIcon ml="3px" /></Box>
            </a>
          {/* </NavLink> */}
        </Box>
         <Box marginRight={{sm:"20px",md:"20px",base:"20px"}} display={{lg:"none",sm:"flex",md:"flex",base:"flex"}} justifyContent={{sm:"center",md:"center",base:"center"}} alignItems={{sm:"center",md:"center",base:"center"}}>
         <Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘H'>
      Home
    </MenuItem>
    <Link activeClass="active" smooth spy to="palwan">
    <MenuItem icon={<FcAbout />} command='⌘A'>
      About
    </MenuItem>
   </Link>
   <Link activeClass="active" smooth spy to="skill">
    <MenuItem icon={<GiSkills />} command='⌘⇧S'>
      Skills
    </MenuItem>
    </Link>
    <Link activeClass="active" smooth spy to="project">
    <MenuItem icon={<GrProjects />} command='⌘P'>
      Project
    </MenuItem>
    </Link>
    <Link activeClass="active" smooth spy to="contact">
    <MenuItem icon={<IoIosContacts />} command='⌘C'>
      Contect
    </MenuItem>
    </Link>
    <a  href="https://drive.google.com/file/d/1ikGGkMAo--CK5zBIwv4sCI6Ms3fmxa9M/view?usp=sharing"
              target="_blank"
            >
    <MenuItem icon={<ExternalLinkIcon />} command='⌘R'>
      Resume
    </MenuItem>
  </a>
  </MenuList>
</Menu>
         </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
