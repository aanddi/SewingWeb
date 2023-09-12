import { NextPage } from "next";

import Employer from "@/src/components/screens/Site/Employer/Employer"
import Head from "next/head";

interface Props {
  
}

const EmployerPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>SewingWeb - информация работодателям</title>
      </Head>
      <Employer />
    </>
  ) 
};

export default EmployerPage;