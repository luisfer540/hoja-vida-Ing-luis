

export const ComoponenteSEO = ({
    title,
    description,
    canonical,
    image,
    type='website',
   

}) => {
  return (
   <>
   
   {/* titulo y descripcion */}
   {title && <title>{title}</title>}
   {description && <meta name="description" content={description} />}
   {canonical && <link rel="canonical" href={canonical} />}

    {/* open graph (facebook,whatsapp,linkedin) */}
     {title && <title>{title}</title>}
   {description && <meta name="description" content={description} />}
   {image && <meta property="og:image" content={image} />}
     {canonical && <link rel="canonical" href={canonical} />}
     <meta property="og:type" content={type} />


    {/* twitter  cards */}
    <meta name="twitter:card" content="summary_large_image" />
   {title && <meta name="twitter:title" content={title} />}
   {description && <meta name="twitter:description" content={description} />}
   {image && <meta name="twitter:image" content={image} />}
   {type && <meta name="twitter:type" content={type} />}

   </>
  )
}
