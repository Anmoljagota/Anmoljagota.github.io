import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Styles from "../AllCss/tech.module.css";
import data from "../AllData/db.json";
const Techstack = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { images } = data;
  console.log(images);
  return (
    <Box className={Styles.upper}>
      <h1 data-aos="fade-up">
        Tech <span className={Styles.color}>Stack</span> & Tools
      </h1>
      <Box className={Styles.main}>
        <SimpleGrid columns={[1, 3, 6]} spacing="25px">
          {images.map((skillsimages) => (
            <Box
              key={skillsimages.imgtec}
              className={Styles.images}
              data-aos="zoom-in"
            >
              <Image src={skillsimages.imgtec} className={Styles.all} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Techstack;
