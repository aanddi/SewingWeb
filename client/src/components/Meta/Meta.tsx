import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

interface ISeo {
  title: string
  desc?: string
}

export const titleMerge = (title: string) => {
  return `${title} | SewingWeb`
}

const Meta: FC<PropsWithChildren<ISeo>> = ({ title, desc, children }) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.APP_URL}${asPath}`

  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <title itemProp="headline">{titleMerge(title)}</title>
        {desc ? (
          <>
            <meta itemProp="description" name="description" content={desc} />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="ru" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="SewingWeb" />
            <meta property="og:description" content={desc} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  )
}

export default Meta
