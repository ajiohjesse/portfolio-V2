import Head from 'next/head';

const GENERIC_DESCRIPTION =
  'Frontend developer and UI designer with a passion for creating intuitive and engaging user experiences';

const PROD_URL = 'https://jesseajioh.vercel.app';

// const faviconSrc = '/favicon.svg'

function SEO({
  description = '',
  title,
  ogImage,
  canonicalPath,
  type = '',
  published = '',
  slug = '',
}) {
  let pageTitle = title
    ? title + ' - Jesse Ajioh'
    : 'Jesse Ajioh - Frontend Developer';

  const postUrl = PROD_URL + '/' + slug;
  const iconUrl = PROD_URL + '/svg/JALogo.svg';

  const metaDescription =
    description || GENERIC_DESCRIPTION;

  const ogImageAlt = ogImage
    ? 'Banner for site, showing page title in a creative way'
    : 'Banner for site, featuring and a cute 3D avatar';

  const actualOgImage =
    PROD_URL + (ogImage || '/images/banner.jpg');

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />

      {/* TODO: Are these necessary? */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={actualOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:creator" content="@rehxnation" />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content={metaDescription}
      />
      <meta name="twitter:image" content={actualOgImage} />
      <meta name="theme-color" content="#060608" />

      <link rel="icon" type="image/svg" href={iconUrl} />

      {typeof canonicalPath === 'string' && (
        <link
          rel="canonical"
          href={PROD_URL + canonicalPath}
        />
      )}

      {type === 'post' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${postUrl}"
            },
            "headline": "${pageTitle}",
            "image": {
              "@type": "ImageObject",
              "url": "${actualOgImage}"
            },
            "datePublished": "${published}",
            "dateModified": "${published}",
            "author": {
              "@type": "Person",
              "name": "Jesse Ajioh"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Jesse Ajioh Website",
              "logo": {
                "@type": "ImageObject",
                "url": "${iconUrl}",
                "width": 600,
                "height": 60
              }
            },
            "description": "${metaDescription}"
          }
        `,
          }}
        />
      )}
    </Head>
  );
}

export default SEO;
