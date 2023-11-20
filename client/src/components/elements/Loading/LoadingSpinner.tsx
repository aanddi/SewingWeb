import Image from 'next/image'
import { FC } from 'react'

import Loading from 'public/LoadingSpinner/Loading.svg'

const LoadingSpinner: FC = () => {
  return (
    <div className="spinerLoading"><Image src={Loading} alt={'Загрузка'} width={40}/></div>
    
  )
}

export default LoadingSpinner