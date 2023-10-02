import { FC, PropsWithChildren } from 'react'

import FooterSite from '../../elements/FooterSite/FooterSite'
import HeaderSite from '../../elements/HeaderSite/HeaderSite'

const SiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderSite />
      <main className="page">{children}</main>
      <FooterSite />
    </>
  )
}

export default SiteLayout
