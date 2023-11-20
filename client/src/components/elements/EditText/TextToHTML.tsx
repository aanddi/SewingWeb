import { FC } from 'react'

interface Props {
  text: string | undefined
}

const TextToHTML: FC<Props> = ({ text }) => {
  return <>{text ? <div className={'text'} dangerouslySetInnerHTML={{ __html: text }} /> : null}</>
}

export default TextToHTML
