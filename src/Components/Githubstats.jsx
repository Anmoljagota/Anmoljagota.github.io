import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Github.module.css";
import Styles1 from "../AllCss/tech.module.css";
import Styles2 from "../AllCss/About.module.css";
const Githubstats = () => {
  return (
    <Box mt={{ sm: "196px", md: "196px", lg: "100px" }} data-aos="fade-up">
      <h1 className={Styles2.about}>
        Github <span className={Styles1.color}>stats</span>
      </h1>
      <Box display={{ sm: "block", md: "block", lg: "flex" }}>
        <Box>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=anmoljagota&theme=react&hide_border=false&include_all_commits=true&count_private=false"
            width={{ sm: "75%", md: "75%" }}
            margin={{ sm: "auto", md: "auto" }}
            mt={{ sm: "50px", md: "50px" }}
          />
        </Box>
        <Box>
          <Image
            h="195px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anmoljagota&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            height={{ sm: "232px", md: "232px" }}
            margin={{ sm: "auto", md: "auto" }}
            mt={{ sm: "50px", md: "50px" }}
          />
        </Box>
      </Box>
      <Box>
        <h1>Contributers</h1>
        <Box>
          <Image src="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Githubstats;
