import { Helmet } from 'react-helmet-async';

export const ComponenteSEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
}) => {
  //  URL de imagen optimizada con transformaciones de Cloudinary
  const optimizedImage = image 
    ? `https://res.cloudinary.com/dkz51cyxl/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1760324797/bannerSeo3_ldpupt.jpg`
    : null;

  return (
    <Helmet>
      {/* SEO básico */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {optimizedImage && <meta property="og:image" content={optimizedImage} />}
      {optimizedImage && <meta property="og:image:secure_url" content={optimizedImage} />}
      {optimizedImage && <meta property="og:image:type" content="image/jpeg" />}
      {optimizedImage && <meta property="og:image:width" content="1200" />}
      {optimizedImage && <meta property="og:image:height" content="630" />}
      {optimizedImage && <meta property="og:image:url" content={optimizedImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {optimizedImage && <meta name="twitter:image" content={optimizedImage} />}
    </Helmet>
  );
};
