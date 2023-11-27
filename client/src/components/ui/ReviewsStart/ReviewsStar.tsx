import { FC } from 'react'

import { FaStar } from 'react-icons/fa'

interface Props {
  grade: number
  sizeStar?: number
}

const ReviewsStar: FC<Props> = ({ grade, sizeStar = 15 }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} style={{ color: index < grade ? '#F4A815' : '#C0C0C0' }} size={sizeStar} />
      ))}
    </div>
  )
}

export default ReviewsStar
