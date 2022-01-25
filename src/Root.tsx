import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
import Layout from "./components/Layout/Layout";

function Root() {
  // const VideoSection = lazy(() => import("sections/VideoSection"));
  const AccordionSection = lazy(() => import("sections/QASection"));
  const UploadFileSection = lazy(() => import("sections/UploadFileSection"));
  const DrawingSection = lazy(() => import("sections/DrawingSection"));

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Suspense fallback={<div>loading...</div>}>
          <VideoSection />
        </Suspense> */}
        <Suspense fallback={<div>loading...</div>}>
          <UploadFileSection />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <AccordionSection />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <DrawingSection />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default Root;
