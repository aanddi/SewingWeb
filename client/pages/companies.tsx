import { NextPage } from "next";

import Companies from "@/src/components/screens/Site/Companies/Companies"
import Head from "next/head";

interface Props {
  
}

const CompaniesPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>SewingWeb - информация работодателям</title>
      </Head>
      <Companies />
    </>
  ) 
};

export default CompaniesPage;