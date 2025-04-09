"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';


const OfferPopup = dynamic(() => import('@/components/OfferPopup'), {
    ssr: false,
    loading: () => <Loading/>
});

const FloatingContact = dynamic(() => import('@/components/FloatingContact'), {
    ssr: false,
    loading: () => <Loading/>
});

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
    ssr: false,
    loading: () => <Loading/>
});

const ScrollToTopOnRouteChange = dynamic(() => import('@/components/ScrollToTopOnRouteChange'), {
    ssr: false,
    loading: () => <Loading/>
});
function NonCritical() {
    return (
      <>
        {/* <Suspense fallback={<Loading />}>
          <OfferPopup />
        </Suspense> */}
        <Suspense fallback={<Loading />}>
          <FloatingContact />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ScrollToTopOnRouteChange />
        </Suspense>
      </>
    );
  }
  
  export default NonCritical;