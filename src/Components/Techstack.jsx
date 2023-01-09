import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import cx from "classnames"
import Aos from "aos";
import "aos/dist/aos.css";
import Styles from "../AllCss/tech.module.css";
import Styles1 from "../AllCss/Home.module.css";
import data from "../AllData/db.json";
const Techstack = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { images } = data;
  console.log(images);
  return (
    <Box mt="140px"  className={cx(Styles.upper,Styles1.middletech)} id="skill">
      <h1 data-aos="fade-up" >
        Tech <span className={Styles.color}>Stack</span> & Tools
      </h1>
      <Box className={Styles.main} >
        <SimpleGrid columns={[3, 3, 6]} spacing="20px"  className={Styles1.mobilegrid}>
          {images.map((skillsimages) => (
            <Box
              key={skillsimages.imgtec}
              // className={Styles.images}
              width={{ lg: "125px" }}
              height={{ lg: "125px" }}
              className={cx(Styles.images,Styles1.mobileimages1)}
              // border="1px solid red"
              data-aos="zoom-in"
            >
              <Image src={skillsimages.imgtec}   className={cx(Styles.all,Styles1.middlegridimages)}/>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Techstack;
