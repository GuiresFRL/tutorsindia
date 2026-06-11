import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const MastersDissertationPage = lazy(() => import('../pages/MastersDissertationPage'));
const FullDissertationPage = lazy(() => import('../pages/FullDissertationPage'));
const DissertationPartPage = lazy(() => import('../pages/DissertationPartPage'));
const SpecificDissertationPage = lazy(() => import('../pages/SpecificDissertationPage'));
const ResitDissertationPage = lazy(() => import('../pages/ResitDissertationPage'));
const StatisticalAnalysisPage = lazy(() => import('../pages/StatisticalAnalysisPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  </div>
);

function withSuspense(Component) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  { path: '/', element: withSuspense(HomePage) },
  { path: '/our-services/masters-dissertation-writing-services', element: withSuspense(MastersDissertationPage) },
  { path: '/our-services/masters-dissertation-writing-services/full-dissertation', element: withSuspense(FullDissertationPage) },
  { path: '/our-services/masters-dissertation-writing-services/dissertation-part', element: withSuspense(DissertationPartPage) },
  { path: '/our-services/masters-dissertation-writing-services/specific-dissertation', element: withSuspense(SpecificDissertationPage) },
  { path: '/our-services/masters-dissertation-writing-services/resit-dissertation', element: withSuspense(ResitDissertationPage) },
  { path: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis', element: withSuspense(StatisticalAnalysisPage) },
  { path: '*', element: withSuspense(HomePage) },
]);
