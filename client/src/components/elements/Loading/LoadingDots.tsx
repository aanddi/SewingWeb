import Image from 'next/image'
import { FC } from 'react'

import dots from 'public/Loading/LoadingDots.svg'

const LoadingSpinner: FC = () => {
  return <Image src={dots} alt={'Загрузка'} width={30} />
}

export default LoadingSpinner
