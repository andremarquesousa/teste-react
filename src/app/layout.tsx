'use client';

import '../../public/assets/stylesheets/style.css'
import { usePathname } from 'next/navigation' 
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { checkRoutes } from '@/utils/check-routes'
import PrivateRoute from '@/components/PrivateRoute';

const Layout = ({children}) => {
  const path = usePathname();
  const isPublic = checkRoutes(path);
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/public/assets/images/favicon.ico" />
        <meta name="og:title" content="Teste de react" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="teste" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="Website" />
        <title>Teste React</title>
      </Head>
      <body>
        <div id="am-general">
          <Header />
          <main>
            {isPublic && children}
            {!isPublic && (
              <PrivateRoute>
                {children}
              </PrivateRoute>
            )}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Layout;