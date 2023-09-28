import { NextPage } from "next";

import Vacancies from "@/src/components/screens/Site/Vacancies/Vacancies"
import Head from "next/head";

interface Props {}

const VacanciesPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Вакансия</title>
      </Head>
      <Vacancies />
    </>
  ) 
};

export default VacanciesPage;