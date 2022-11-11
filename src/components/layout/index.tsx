/* eslint-disable react/no-unknown-property */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import validator from 'validator';
import { useRouter } from 'next/router';
import { Box, useTheme } from '@mui/material';
import Nav from '../nav';

type Props = {
  navLink: string;
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  image?: string;
};

const Layout = ({
  navLink,
  children,
  title = 'Bitcoin Price Tracker',
  description = 'A web app displaying bitcoin exchange rates for multiple currencies',
  keywords = [],
  type = 'website',
  image,
}: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const currentPath = router.asPath === '/' ? '/' : `${router.asPath}`;
  const url = process.env.NEXT_PUBLIC_URL;
  let ogImage = image ?? `${url}/static/icons/favicon-96x96.png`;
  // let metaTwitterImage = twitterImage ?? ogImage;
  // const baseKeywords = ['Forbole', 'blockchain', 'social network'];
  // const formattedKeyworks = R.uniq(R.concat(keywords, baseKeywords));
  if (!validator.isURL(ogImage)) {
    ogImage = `${url}${ogImage}`;
  }
  // if (!validator.isURL(metaTwitterImage)) {
  //   metaTwitterImage = `${url}${metaTwitterImage}`;
  // }
  // React.useEffect(() => {
  //   if (navLink !== '/blog' && theme.palette.mode === 'light') {
  //     setTheme('dark');
  //   } else if (navLink !== '/careers' && theme.palette.mode === 'light') {
  //     setTheme('dark');
  //   }
  // }, [navLink]);
  return (
    <Box position="relative">
      <Head>
        <title>{title}</title>
        {!!(url === 'https://staging.forbole.com') && (
          <meta name="googlebot" content="noindex" />
        )}
        <meta name="description" content={description} />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content={type}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={title}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:site_name"
          content="Forbole"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={`${url}${currentPath}`}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={description}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content={ogImage}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${url}/icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${url}/icons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${url}/icons/site.webmanifest`} />
      </Head>
      <Box
        sx={{
          background: 'transparent',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0',
            backgroundSize: 'cover',
            [theme.breakpoints.up('laptop')]: {
              backgroundSize: '100%',
            },
          }}
        >
          <Nav navLink={navLink} />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
