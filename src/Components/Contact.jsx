import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import Styles from "../AllCss/About.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import React from "react";
const Contact = () => {
  return (
    <Box  marginTop="20px" data-aos="zoom in">
      <Box>
        <h1 className={Styles.about} id="contact">Contact me</h1>
        <h1 className={Styles.touch}>Get in Touch</h1>
      </Box>
      <Container
        p={{ base: "5", sm: "none" }}
        marginBottom={{ base: "150px", md: "0px" }}
        id="contact"
        bg="#ebf8ff"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
            bg="#e74d4d"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
             <Box p={{ base: "5", sm: "10" }}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          fontWeight="medium"
                          _hover={{ border: "2px solid white" }}
                          leftIcon={<MdPhone size="20px" />}
                        >
                          +91-9888533294
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          fontWeight="medium"
                          _hover={{ border: "2px solid white" }}
                          leftIcon={<MdEmail size="20px" />}
                        >
                          anmoljagota08@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          fontWeight="medium"
                          _hover={{ border: "2px solid white" }}
                          leftIcon={<MdLocationOn size="20px" />}
                        >
                          Punjab India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <a href="https://github.com/Anmoljagota" target="_blank">
                        <IconButton
                          size="md"
                          fontSize="4xl"
                          colorScheme="red"
                          variant="solid"
                          _hover={{ fontSize: "5xl" }}
                          icon={<AiFillGithub />}
                        />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/anmol-jagota-69a861192/"
                        target="_blank"
                      >
                        <IconButton
                          size="md"
                          fontSize="3xl"
                          colorScheme="red"
                          variant="solid"
                          _hover={{ fontSize: "4xl" }}
                          icon={<BsLinkedin />}
                        />
                      </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            fontWeight="medium"
                            color="white"
                            colorScheme="red"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
        {/* <Box className={Styles.black}>
          <Text fontSize={{ base: "sm", md: "18px" }}>
            @2022 All Rights Reserved made by Anmol jagota
          </Text>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Contact;
