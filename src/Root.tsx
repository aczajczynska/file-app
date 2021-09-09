import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import Layout from './components/Layout/Layout';

function Root() {
  const HeaderSection = lazy(() => import('sections/HeaderSection'));

  const AccordionSection = lazy(() => import('sections/QASection'));

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <HeaderSection />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <AccordionSection />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default Root;
