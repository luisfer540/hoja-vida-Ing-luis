import { Helmet } from 'react-helmet-async';

export const ComponenteSEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
}) => {
  return (
    <Helmet>
      {/* SEO básico */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
