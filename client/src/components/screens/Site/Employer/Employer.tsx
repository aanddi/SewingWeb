import SiteLayout from "@/src/components/layouts/Site/SiteLayout"
import styles from "./Employer.module.scss"

import { NextPage } from "next";

interface Props {
  
}

const Employer: NextPage<Props> = (props) => {
  return (
    <SiteLayout>
      Работодателю
    </SiteLayout>
  ) 
};

export default Employer;