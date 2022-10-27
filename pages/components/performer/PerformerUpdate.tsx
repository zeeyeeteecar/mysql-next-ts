import React, { FunctionComponent } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import {
  IconButton,
  Button,
  HStack,
  Input,
  useToast,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  EditIcon,
  CloseIcon,
  WarningIcon,
  HamburgerIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  Performer_id: number;
  Performer_title: string;
}

// const EditPerformerButton: FunctionComponent<Props> = ({
//   Performer_id,
//   Performer_title,
// }) => {
export default function EditPerformer({
  Performer_id,
  Performer_title,
}: {
  Performer_id: number;
  Performer_title: string;
}) {
  //const { Performer_id } = props;
  //const { Performer_title } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const toast = useToast({
    position: "top",
    title: "record updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  /***************************update********* */
  const handleUpdate = async (item) => {
    console.log(item.Performer_id);
    console.log(item.Performer_title);

    try {
      const body = {
        Performer_id: item.Performer_id,
        Performer_title: item.Performer_title,
      };
      //alert(JSON.stringify(body));
      await fetch("../../api/performer/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        containerStyle: {
          border: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Search database"
        icon={<EditIcon />}
        fontSize="15px"
        color="gray.400"
        borderWidth={0}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(handleUpdate)}>
              <VStack spacing={5}>
                <Input
                  {...register("Performer_id")}
                  defaultValue={Performer_id}
                  readOnly={true}
                ></Input>
                <Input
                  {...register("Performer_title")}
                  defaultValue={Performer_title}
                ></Input>

                <Button type="submit" colorScheme="blue" w="300px">
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter>

            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

//export default EditPerformerButton;
