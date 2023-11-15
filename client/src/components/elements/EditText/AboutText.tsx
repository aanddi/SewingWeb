import { FC } from 'react'

interface Props {
  about: string | undefined
}

const AboutText: FC<Props> = ({ about }) => {
  return <>{about ? <div className={'about-text'} dangerouslySetInnerHTML={{ __html: about }} /> : null}</>
}

export default AboutText
