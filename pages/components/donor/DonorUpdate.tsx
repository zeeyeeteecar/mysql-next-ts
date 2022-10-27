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
import { Decimal } from "@prisma/client/runtime";

interface Donor {
  donor_id: number;
  donor_fname: string;
  donor_lname: string;
  donor_amount: Decimal;
  donor_performerBouquet: number;
  donor_performerRose: number;
  donor_performerID: number;
}

// const EditPerformerButton: FunctionComponent<Props> = ({
//   Performer_id,
//   Performer_title,
// }) => {
export default function EditPerformer({
  donor_id,
  donor_fname,
  donor_lname,
  donor_amount,
  donor_performerBouquet,
  donor_performerRose,
  donor_performerID,
}) {
  //console.log(donor);
  //const { Performer_id } = props;
  //const { Performer_title } = props;
  // const donor_id = donor.donor_id;
  // const donor_fname = donor.donor_fname;
  // const donor_lname = donor.donor_lname;
  // const donor_amount = donor.donor_amount;
  // const donor_performerBouquet = donor.donor_performerBouquet;
  // const donor_performerRose = donor.donor_performerRose;
  // const donor_performerID = donor.donor_performerID;

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
  const handleUpdate = async (donor) => {
    console.log(donor.donor_id);
    console.log(donor.donor_fname);

    // try {
    //   const body = {
    //     donor_id: donor.donor_id,
    //     donor_fname: donor.donor_fname,
    //   };
    //   //alert(JSON.stringify(body));
    //   await fetch("../../api/donor/donor_update", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    //   toast({
    //     containerStyle: {
    //       border: "0",
    //     },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
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
              <VStack>
                <Input
                  {...register("donor_id")}
                  defaultValue={donor_id}
                  readOnly={true}
                ></Input>
                <Input
                  {...register("donor_fname")}
                  defaultValue={donor_fname}
                ></Input>

                <Input
                  {...register("donor_lname")}
                  defaultValue={donor_lname}
                ></Input>

                <Input
                  {...register("donor_amount")}
                  defaultValue={"" + donor_amount}
                ></Input>

                <Input
                  {...register("donor_performerBouquet")}
                  defaultValue={donor_performerBouquet}
                ></Input>

                <Input
                  {...register("donor_performerRose")}
                  defaultValue={donor_performerRose}
                ></Input>

                <Input
                  {...register("donor_performerID")}
                  defaultValue={donor_performerID}
                ></Input>

                <Button type="submit" colorScheme="blue" w="300px">
                  Submit
                </Button>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

//export default EditPerformerButton;
