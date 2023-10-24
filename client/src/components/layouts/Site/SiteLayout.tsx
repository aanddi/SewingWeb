import { FC, PropsWithChildren, useRef, useState } from 'react'

import FooterSite from '../../elements/FooterSite/FooterSite'
import HeaderSite from '../../elements/HeaderSite/HeaderSite'

const SiteLayout: FC<PropsWithChildren> = ({ children }) => {
  // закрытие модального меню
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <div className='wrapper' onClick={() => closeModal()}>
      <HeaderSite modalOpen={modalOpen} setModalOpen={setModalOpen} closeModal={closeModal} />
      <main className="page">{children}</main>
      <FooterSite />
    </div>
  )
}

export default SiteLayout
