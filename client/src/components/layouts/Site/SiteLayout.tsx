import { FC, PropsWithChildren } from 'react'

import FooterSite from '../../elements/Layout/FooterSite/FooterSite'
import HeaderSite from '../../elements/Layout/HeaderSite/HeaderSite'

interface Props {
  background?: string
}

const SiteLayout: FC<PropsWithChildren<Props>> = ({ children, background }) => {
  return (
    <>
      <HeaderSite />
      <main style={{ backgroundColor: background }} className="page">
        {children}
      </main>
      <FooterSite />
    </>
  )
}

export default SiteLayout
