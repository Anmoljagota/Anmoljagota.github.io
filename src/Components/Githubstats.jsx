import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Github.module.css";
import Styles1 from "../AllCss/tech.module.css";
import Styles2 from "../AllCss/About.module.css";
const Githubstats = () => {
  return (
    <div style={{ marginTop: "100px" }} data-aos="fade-up">
      <h1 className={Styles2.about}>
        Github <span className={Styles1.color}>stats</span>
      </h1>
      <Box className={Styles.flex}>
        <Box>
          <Image src="https://github-readme-stats.vercel.app/api?username=anmoljagota&theme=react&hide_border=false&include_all_commits=true&count_private=false" />
        </Box>
        <Box>
          <Image
            h="195px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anmoljagota&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
          />
        </Box>
      </Box>
      <Box>
        <h1>Contributers</h1>
        <Box>
          <Image src="" />
        </Box>
      </Box>
    </div>
  );
};

export default Githubstats;
