import Image from 'next/image'
import { FC } from 'react'

import spiner from 'public/Loading/LoadingSpiner.svg'

const LoadingSpinner: FC = () => {
  return (
    <div className="spinerLoading">
      <Image src={spiner} alt={'Загрузка'} width={40} />
    </div>
  )
}

export default LoadingSpinner
