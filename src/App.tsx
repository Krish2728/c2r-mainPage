import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  redirect,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WhoWeArePage from "./pages/WhoWeArePage";
import VisionMissionPage from "./pages/VisionMissionPage";
import OurTeamPage from "./pages/OurTeamPage";
import WorkingModelPage from "./pages/WorkingModelPage";
import OurValuesPage from "./pages/OurValuesPage";
import JourneyPage from "./pages/JourneyPage";
import ProgramsPage from "./pages/ProgramsPage";
import MentorshipPage from "./pages/MentorshipPage";
import SepfPage from "./pages/SepfPage";
import ResourcesPage from "./pages/ResourcesPage";
import FreeCoursesAuthPage from "./pages/FreeCoursesAuthPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import GetInvolvedVolunteerPage from "./pages/get-involved/GetInvolvedVolunteerPage";
import GetInvolvedCorporatePage from "./pages/get-involved/GetInvolvedCorporatePage";
import GetInvolvedHowItWorksPage from "./pages/get-involved/GetInvolvedHowItWorksPage";
import GetInvolvedDonationPage from "./pages/get-involved/GetInvolvedDonationPage";
import GetInvolvedOtherAlliancesPage from "./pages/get-involved/GetInvolvedOtherAlliancesPage";
import GetInvolvedLifetimeMembershipPage from "./pages/get-involved/GetInvolvedLifetimeMembershipPage";
import GetInvolvedOtherVolunteeringPage from "./pages/get-involved/GetInvolvedOtherVolunteeringPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import DonatePage from "./pages/DonatePage";
import DonationSuccessPage from "./pages/DonationSuccessPage";
import DonationCancelPage from "./pages/DonationCancelPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const whoWeAreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/who-we-are",
  component: WhoWeArePage,
});

const visionMissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/vision-mission",
  component: VisionMissionPage,
});

const ourTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/our-team",
  component: OurTeamPage,
});

const workingModelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/working-model",
  component: WorkingModelPage,
});

const ourValuesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/our-values",
  component: OurValuesPage,
});

const journeyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/journey",
  component: JourneyPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/programs",
  component: ProgramsPage,
});

const mentorshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mentorship",
  component: MentorshipPage,
});

const sepfRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sepf",
  component: SepfPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const freeCoursesAuthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/free-courses-auth",
  component: FreeCoursesAuthPage,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved",
  component: GetInvolvedPage,
});

const getInvolvedVolunteerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/volunteer",
  component: GetInvolvedVolunteerPage,
});

const getInvolvedCorporateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/corporate-partnerships",
  component: GetInvolvedCorporatePage,
});

const getInvolvedHowItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/how-it-works",
  component: GetInvolvedHowItWorksPage,
});

const getInvolvedDonationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/donation",
  component: GetInvolvedDonationPage,
});

const getInvolvedOtherAlliancesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/other-alliances",
  component: GetInvolvedOtherAlliancesPage,
});

const getInvolvedOtherVolunteeringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/other-volunteering-roles",
  component: GetInvolvedOtherVolunteeringPage,
});

const getInvolvedLifetimeMembershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/lifetime-membership",
  component: GetInvolvedLifetimeMembershipPage,
});

const getInvolvedFoundersMessageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved/founders-message",
  beforeLoad: () => {
    throw redirect({ to: "/get-involved/lifetime-membership" });
  },
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const donateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/donate",
  component: DonatePage,
});

const donationSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/donation-success",
  component: DonationSuccessPage,
});

const donationCancelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/donation-cancel",
  component: DonationCancelPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  whoWeAreRoute,
  visionMissionRoute,
  ourTeamRoute,
  workingModelRoute,
  ourValuesRoute,
  journeyRoute,
  programsRoute,
  mentorshipRoute,
  sepfRoute,
  resourcesRoute,
  freeCoursesAuthRoute,
  getInvolvedRoute,
  getInvolvedVolunteerRoute,
  getInvolvedCorporateRoute,
  getInvolvedHowItWorksRoute,
  getInvolvedDonationRoute,
  getInvolvedOtherAlliancesRoute,
  getInvolvedOtherVolunteeringRoute,
  getInvolvedLifetimeMembershipRoute,
  getInvolvedFoundersMessageRoute,
  contactRoute,
  loginRoute,
  donateRoute,
  donationSuccessRoute,
  donationCancelRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
