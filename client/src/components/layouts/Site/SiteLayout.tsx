import { FC, PropsWithChildren, useState } from 'react'

import FooterSite from '../../elements/FooterSite/FooterSite'
import HeaderSite from '../../elements/HeaderSite/HeaderSite'

interface Props {
  background?: string
}

const SiteLayout: FC<PropsWithChildren<Props>> = ({ children, background }) => {
  // закрытие модального меню
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="wrapper" onClick={() => closeModal()}>
      <HeaderSite modalOpen={modalOpen} setModalOpen={setModalOpen} closeModal={closeModal} />
      <main style={{ backgroundColor: background }} className="page">
        {children}
      </main>
      <FooterSite />
    </div>
  )
}

export default SiteLayout
