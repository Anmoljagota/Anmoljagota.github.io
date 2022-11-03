import { Box, Button, Image, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Styles from "../AllCss/About.module.css";
import Styles1 from "../AllCss/Home.module.css";
import Styles2 from "../AllCss/tech.module.css";
import data from "../AllData/db.json";
const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { education } = data;
  return (
    <Box mt={{sm: '550px', md: '550px', lg: '80px'}} >
      <h1 className={Styles.about}>
        E<span className={Styles2.color}>d</span>u
        <span className={Styles2.color}>c</span>a
        <span className={Styles2.color}>t</span>i
        <span className={Styles2.color}>o</span>n
      </h1>

      <Box style={{ display: "flex",justifyContent:"space-evenly",alignItems:"center" }}>
        <Stack className={Styles1.education} style={{ height: "50vw" }}>
          {education.map((details) => (
            
              <Box
              width={{sm: '100%', md: '100%', lg: '70%'}}
                key={details.title}
                className={Styles1.flex}
                style={{
                  marginTop: "60px",
                  padding: "25px",
                  borderRadius: "20px",
                }}
                data-aos="fade-up"
              >
                <Image
                  src={details.img}
                  alt="education error"
                  className={Styles.images}
                  border="1px solid red"
                />
                <Box className={Styles.data} data-aos="zoom-in">
                  <Box className={Styles.title}>{details.title}</Box>
                  <Box className={Styles.palace}>{details.palace}</Box>
                  <Box className={Styles.field}>
                    <Button
                      p="0px 15px 0px 15px"
                      bg="white"
                      border="0.5px solid grey"
                      borderRadius="15px"
                      marginTop="15px"
                    >
                      {details.field}
                    </Button>
                  </Box>
                </Box>
              </Box>
            
          ))}
        </Stack>
        <Box mr="50px">
          <Image
            src="https://jayvaish.github.io/static/media/purpleTheme-girl.593f901e.svg"
            h="50vw"
            w="70%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
