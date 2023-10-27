import { FC, PropsWithChildren } from 'react'

import FooterSite from '../../elements/FooterSite/FooterSite'
import HeaderSite from '../../elements/HeaderSite/HeaderSite'

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
