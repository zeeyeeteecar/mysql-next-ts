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
  Flex,
} from "@chakra-ui/react";
import {
  EditIcon,
  CloseIcon,
  WarningIcon,
  HamburgerIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

import DonorUpdate from "./DonorUpdate";

interface Donor {
  donor_id: number;
  donor_fname: String;
  donor_lname: String;
  donor_amount: number;
  donor_performerBouquet: number;
  donor_performerRose: number;
  donor_performerID: number;
}

//interface Donors extends Array<Donor> {}

export default function FindDonor({ donors }) {
  //console.log("donorssss==", donors);
  //alert(JSON.stringify(donors));

  //console.log(donors);
  return (
    <>
      {donors &&
        donors.map((donor: Donor, index: number) => {
          //console.log("donor==", donor.donors.donor_id);

          return (
            <HStack
              key={index}
              bg="blue.50"
              height="40px"
              w="100%"
              border="0px"
              _hover={{
                background: "blue.100",
              }}
            >
              <Text w="50px">{donor.donor_id}</Text>
              <Text w="150px">{donor.donor_fname}</Text>
              <Text w="150px">{donor.donor_lname}</Text>
              <Text w="50px">{donor.donor_amount}</Text>
              <Text w="50px">{donor.donor_performerBouquet}</Text>
              <Text w="50px">{donor.donor_performerRose}</Text>
              <Text w="50px">{donor.donor_performerID}</Text>

              <DonorUpdate donor={donor} />
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Call Sage"
                fontSize="13px"
                color="gray.400"
                borderWidth={0}
                icon={<CloseIcon />}
              />
            </HStack>
          );
        })}
    </>
  );
}
