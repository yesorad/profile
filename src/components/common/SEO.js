import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, keywords, description }) {
  return (
    <div>
      <Helmet>
        <title>YesRoad Profile - {title}</title>
        <meta name="author" content="Kim Eung Gil" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Helmet>
    </div>
  );
}

export default SEO;
