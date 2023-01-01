import Head from 'next/head'

const GENERIC_DESCRIPTION =
  'Frontend developer and UI designer with a passion for creating intuitive and engaging user experiences'

const PROD_URL = 'https://jesseajioh.vercel.app'

const faviconSrc = '/favicon.svg'

function SEO({ description = '', title, ogImage, canonicalPath }) {
  let pageTitle = title
    ? title + ' - Jesse Ajioh'
    : 'Jesse Ajioh - Frontend Developer'

  const metaDescription = description || GENERIC_DESCRIPTION

  const ogImageAlt = ogImage
    ? 'Banner for site, showing page title in a creative way'
    : 'Banner for site, featuring a word map and a cute 3D avatar'

  const actualOgImage = PROD_URL + (ogImage || '/images/og-default.png')

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />

      {/* TODO: Are these necessary? */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={actualOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@rehxnation" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={actualOgImage} />
      <meta name="theme-color" content="#060608" />

      <link rel="icon" type="image/svg" href={`${faviconSrc}?v=4`} />

      {typeof canonicalPath === 'string' && (
        <link rel="canonical" href={PROD_URL + canonicalPath} />
      )}
    </Head>
  )
}

export default SEO
