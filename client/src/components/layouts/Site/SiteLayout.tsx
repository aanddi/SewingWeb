import { FC, PropsWithChildren } from 'react'
import HeaderSite from "../../elements/HeaderSite/HeaderSite";
import FooterSite from "../../elements/FooterSite/FooterSite";

const SiteLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <HeaderSite />
        <main  className='page'>
          {children}
        </main>
      <FooterSite />
    </>
  ) 
};

export default SiteLayout;