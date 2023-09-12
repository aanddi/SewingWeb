import { NextPage } from "next";

import Home from "@/src/components/screens/Site/Home/Home"
import Head from "next/head";

interface Props {
  
}

const HomePage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>SewingWeb - найди работу легпрома у нас!</title>
      </Head>
      <Home />
    </>
  ) 
};

export default HomePage;