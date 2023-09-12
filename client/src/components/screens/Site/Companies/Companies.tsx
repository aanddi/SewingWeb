import SiteLayout from "@/src/components/layouts/Site/SiteLayout"
import styles from "./Companies.module.scss"

import { NextPage } from "next";

interface Props {
  
}

const Companies: NextPage<Props> = (props) => {
  return (
    <SiteLayout>
      Предприятия
    </SiteLayout>
  ) 
};

export default Companies;