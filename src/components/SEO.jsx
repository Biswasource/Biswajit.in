import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, url, image }) {
  const siteName = "Biswajit Das | Full Stack Developer";
  const defaultTitle = siteName;
  const defaultDescription = "Portfolio of Biswajit Das, a Full Stack Developer specializing in MERN, Next.js, and modern web technologies.";
  const defaultUrl = "https://biswajitdev.site"; // Replace with your actual domain

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={title || defaultTitle} />
      <meta property='og:description' content={description || defaultDescription} />
      <meta property='og:url' content={url || defaultUrl} />
      {image && <meta property='og:image' content={image} />}
      <meta property='og:site_name' content={siteName} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name='twitter:creator' content={name || siteName} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || defaultTitle} />
      <meta name='twitter:description' content={description || defaultDescription} />
      {image && <meta name='twitter:image' content={image} />}
      {/* End Twitter tags */}
    </Helmet>
  );
}
