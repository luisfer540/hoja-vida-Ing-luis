export const ComponenteSEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
}) => {
  return (
    <>
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

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
};
