import React from "react";
import { useForm } from "react-hook-form";

import {
  IconButton,
  Button,
  HStack,
  Input,
  useToast,
  Text,
  Flex,
  Box,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

export default function PerformerCreate() {
  const { isOpen, onToggle } = useDisclosure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /*********************Add New*****/
  const handleCreate = async (data) => {
    console.log("data.lname---", data.Performer_title);
    //alert(JSON.stringify(data));
    //data.preventDefault();
    try {
      const body = {
        Performer_title: data.Performer_title,
      };
      //alert(JSON.stringify(body));
      await fetch("/api/performer/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={onToggle}>Add New</Button>
      <Collapse in={isOpen} animateOpacity>
        <form onSubmit={handleSubmit(handleCreate)}>
          <HStack spacing={5}>
            <Input
              {...register("Performer_title")}
              defaultValue=""
              id="create_performer"
            ></Input>

            <Button type="submit" colorScheme="blue" w="300px">
              Submit
            </Button>
          </HStack>
        </form>
      </Collapse>
    </>
  );
}
