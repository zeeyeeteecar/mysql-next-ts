import type { NextPage } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainFrame from "./components/MainFrame";
import { Stack } from "@chakra-ui/react";


const Home: NextPage = () => {
  return (
    <Stack w="100%" h="100vh" borderColor="red.400" border="3px">
      <Header />

      <MainFrame />
      <Footer />
    </Stack>
  );
};

export default Home;
