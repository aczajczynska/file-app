import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import Layout from './components/Layout/Layout';

function Root() {
  const UploadFile = lazy(
    () => import('components/DropContent/UploadFIle/UploadFile'),
  );

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <UploadFile />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default Root;
