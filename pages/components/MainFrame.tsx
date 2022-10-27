import React, { FunctionComponent } from "react";
import { NextPage } from "next";
import { useState, Dispatch } from "react";
import useSWR from "swr";
import axios from "axios";
import PerformerUpdate from "./performer/PerformerUpdate";
import FindDonor from "./donor/FindDonor";
import PerformerCreate from "./performer/PerformerCreate";
import PerformerDelete from "./performer/PerformerDelete";


import {
  Stack,
  VStack,
  HStack,
  Text,
  Center,
  Box,
  SimpleGrid,
  IconButton,
  Flex,
  Container,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import {
  EditIcon,
  CloseIcon,
  WarningIcon,
  HamburgerIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

type Donors = {
  donor_id: number;
  donor_fname: String;
  donor_lname: String;
  donor_amount: number;
  donor_performerBouquet: number;
  donor_performerRose: number;
  donor_performerID: number;
};

export default function MainFrame() {
  const [donors, setDonors] = useState<Donors[]>([]);

  const [radio_FindDonor, setRadio_FindDonor] = React.useState<string>("1");

  /*********************List all performers [] donors*****/
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/performer/findPerformer", fetcher, {
    refreshInterval: 1000,
  });

  //console.log(data, error);
  //console.log("click-donors--", donors);
  return (
    <>
      <Flex verticalAlign="top" w="100%" borderWidth="3px">
        <VStack direction="column" p={5} w="700px" overflowY="auto" borderWidth="3px" borderColor="red.200" verticalAlign="top">
          <HStack>
            <PerformerCreate />
          </HStack>

          <VStack w="100%" borderWidth="0px">
            <RadioGroup defaultValue="">
              {data &&
                data.map((item, index: string) => {
                  //console.log("Performer_id==", item.Performer_id);

                  return (
                    <HStack
                      key={index}
                      backgroundColor="gray.50"
                      height="50px"
                      w="100%"
                      borderWidth="1px"
                    >
                      <Text w="50px">{item.Performer_id}</Text>
                      <Text w="300px">{item.Performer_title}</Text>
                      <PerformerUpdate
                        Performer_id={item.Performer_id}
                        Performer_title={item.Performer_title}
                      />

                      <PerformerDelete Performer_id={item.Performer_id} />

                      <IconButton
                        variant="outline"
                        colorScheme="gray"
                        aria-label="Call Sage"
                        fontSize="10px"
                        color="gray.400"
                        icon={<ArrowRightIcon />}
                        borderWidth={0}
                        onClick={() => {
                          setDonors(item.donors);
                        }}
                      />

                      {/* <FindDonorButton Performer_id={item.Performer_id} /> */}

                      <Radio
                        value={item.Performer_title}
                        onChange={() => setDonors(item.donors)}
                      >
                        {item.donors.length}
                      </Radio>
                    </HStack>
                  );
                })}
            </RadioGroup>
          </VStack>
        </VStack>

        <VStack borderWidth={1} h="90vh" overflowY="auto" w="800px" p={3}>
          <FindDonor donors={donors} />
        </VStack>
      </Flex>
    </>
  );
}
