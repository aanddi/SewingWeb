import SiteLayout from "@/src/components/layouts/Site/SiteLayout"
import styles from "./Professions.module.scss"

import { NextPage } from "next";

interface Props {
  
}

const Professions: NextPage<Props> = (props) => {
  return (
    <SiteLayout>
      Профессии
    </SiteLayout>
  ) 
};

export default Professions;