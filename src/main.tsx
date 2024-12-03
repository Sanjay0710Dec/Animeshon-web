import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Anime = lazy(() => import("./pages/Anime"));

const Misc = lazy(() => import("./pages/Misc"));
const DMCAPage = lazy(() => import("./components/misc/DMCAPage"));
const PrivacyPolicyPage = lazy(
  () => import("./components/misc/PrivacyPolicyPage"),
);
const TermsPage = lazy(() => import("./components/misc/TermsPage"));
const Auth = lazy(() => import("./pages/Auth"));
const Signup = lazy(() => import("./components/auth/signUp/Signup"));
const SignIn = lazy(() => import("./components/auth/signIn/SignIn"));
const AnimeInfo = lazy(() => import("./pages/AnimeInfo"));
const EmailVerification = lazy(
  () => import("./components/auth/EmailVerification"),
);
const AnimeStream = lazy(() => import("./pages/AnimeStream"));
const AnimePageMainComponent = lazy(
  () => import("./components/animeshon/maincomps/AnimePageMainComponent"),
);
const AnimePopularPageMainComponent = lazy(
  () =>
    import("./components/animeshon/maincomps/AnimePopularPageMainComponent"),
);
const AnimeTrendingPageMainComponent = lazy(
  () =>
    import("./components/animeshon/maincomps/AnimeTrendingPageMainComponent"),
);
const AnimeFilterPageMainComponent = lazy(
  () => import("./components/animeshon/maincomps/AnimeFilterPageMainComponent"),
);
const AnimeFeedBackMainComponent = lazy(
  () => import("./components/animeshon/maincomps/AnimeFeedBackMainComponent"),
);
import ErrorPage from "./pages/ErrorPage";
import FallBackMain from "./components/fallbacks/FallBackMain";
import ErrorFallBack from "./components/fallbacks/ErrorFallBack";
import FallBackSub from "./components/fallbacks/FallBackSub";

const animeRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <Home />
      </Suspense>
    ),
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/anime",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <Anime />
      </Suspense>
    ),
    children: [
      {
        path: "/anime",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <AnimePageMainComponent />
          </Suspense>
        ),
      },
      {
        path: "/anime/popular",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <AnimePopularPageMainComponent />
          </Suspense>
        ),
      },
      {
        path: "/anime/trending",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <AnimeTrendingPageMainComponent />
          </Suspense>
        ),
      },
      {
        path: "/anime/filter",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <AnimeFilterPageMainComponent />
          </Suspense>
        ),
      },
      {
        path: "/anime/feedback",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <AnimeFeedBackMainComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/anime/info/:infoId",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <AnimeInfo />
      </Suspense>
    ),
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/anime/watch/:animeTitle",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <AnimeStream />
      </Suspense>
    ),
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/misc",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <Misc />
      </Suspense>
    ),
    children: [
      {
        path: "/misc/dmca",
        element: (
          <Suspense fallback={<FallBackSub />}>
            <DMCAPage />
          </Suspense>
        ),
      },
      {
        path: "/misc/privacy-policy",
        element: (
          <Suspense fallback={<FallBackSub />}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: "/misc/terms-of-service",
        element: (
          <Suspense fallback={<FallBackSub />}>
            <TermsPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <Auth />
      </Suspense>
    ),
    children: [
      {
        path: "/auth/signup",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<FallBackMain />}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorFallBack />,
  },
  {
    path: "/auth/registration/verify/:verificationId",
    element: (
      <Suspense fallback={<FallBackMain />}>
        <EmailVerification />
      </Suspense>
    ),
    errorElement: <ErrorFallBack />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={animeRouter} />,
);
