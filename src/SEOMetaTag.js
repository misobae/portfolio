import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTag(props) {
  const { title, description, keywords, imgsrc, url } = props;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgsrc} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTag;