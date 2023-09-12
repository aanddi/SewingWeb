import { NextPage } from "next";

import Professions from "@/src/components/screens/Site/Professions/Professions"
import Head from "next/head";

interface Props {
  
}

const ProfessionsPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>SewingWeb - профессии на сайте</title>
      </Head>
      <Professions />
    </>
  ) 
};

export default ProfessionsPage;