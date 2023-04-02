// @mui material components
import Icon from '@mui/material/Icon'

// Pages
import CoworkingPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/landing-pages/coworking'
import Rental from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/landing-pages/rental'
import AboutUs from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/company/about-us'
import Pricing from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/company/pricing'
import HelpCenter from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/support/help-center'
import ContactUs from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/support/contact-us'
import Faq from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/support/faq'
import Privacy from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/support/privacy'
import DesktopApp from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/apps/desktop-app'
import SingleArticle from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/blogs/single-article'
import Author from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/blogs/author'
import VirtualRealityPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/pages/extra/virtual-reality'

// Account
import SignInBasicPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/sign-in/basic'
import SignInCoverPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/sign-in/cover'
import SignInIllustration from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/sign-in/illustration'
import SignInSimplePage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/sign-in/simple'
import SignUpCoverPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/sign-up/cover'
import ResetPasswordPage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/authentication/reset-password/cover'

// Sections
import PageHeaders from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/page-headers'
import Features from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/featuers'
import PricingSection from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/pricing'
import FaqSection from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/faq'
import BlogPosts from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/blog-posts'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/testimonials'
import Teams from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/teams'
import Stats from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/stats'
import Cta from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/cta'
import Applications from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/applications'
import LogoAreas from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/logo-areas'
import Footers from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers'
import GeneralCards from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards'
import ContentSections from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/content-sections'
import Navbars from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/navbars'
import NavTabs from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/nav-tabs'
import Pagination from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination'
import Newsletters from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/newsletters'
import ContactSections from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/contact-sections'
import Inputs from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs'
import Forms from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/forms'
import Alerts from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/alerts'
import Notifications from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/notifications'
import Modals from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/modals'
import TooltipsPopovers from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/tooltips-popovers'
import Avatars from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/avatars'
import Badges from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/badges'
import BreadcrumbsEl from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/breadcrumbs'
import Buttons from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons'
import Dropdowns from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/dropdowns'
import ProgressBars from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/progress-bars'
import SocialButtons from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/social-buttons'
import Tables from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/tables'
import Toggles from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/toggles'
import Typography from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/typography'
import DashboardIcon from '@mui/icons-material/Dashboard'

const routes = [
  {
    name: 'about us',
    icon: <DashboardIcon />,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'landing pages',
        collapse: [
          {
            name: 'coworking',
            route: '/pages/landing-pages/coworking',
            component: <CoworkingPage />,
          },
          {
            name: 'rental',
            route: '/pages/landing-pages/rental',
            component: <Rental />,
          },
        ],
      },
      {
        name: 'company',
        collapse: [
          {
            name: 'about us',
            route: '/pages/company/about-us',
            component: <AboutUs />,
          },
          {
            name: 'pricing',
            route: '/pages/company/pricing',
            component: <Pricing />,
          },
        ],
      },
      {
        name: 'support',
        collapse: [
          {
            name: 'help center',
            route: '/pages/support/help-center',
            component: <HelpCenter />,
          },
          {
            name: 'contact us',
            route: '/pages/support/contact-us',
            component: <ContactUs />,
          },
          {
            name: 'faq',
            route: '/pages/support/faq',
            component: <Faq />,
          },
          {
            name: 'privacy',
            route: '/pages/support/privacy',
            component: <Privacy />,
          },
        ],
      },
      {
        name: 'apps',
        collapse: [
          {
            name: 'desktop app',
            route: '/pages/apps/desktop-app',
            component: <DesktopApp />,
          },
        ],
      },
      {
        name: 'blogs',
        collapse: [
          {
            name: 'single article',
            route: '/pages/blogs/single-article',
            component: <SingleArticle />,
          },
          {
            name: 'author',
            route: '/pages/blogs/author',
            component: <Author />,
          },
        ],
      },
      {
        name: 'extra',
        collapse: [
          {
            name: 'virtual reality',
            route: '/pages/extra/virtual-reality',
            component: <VirtualRealityPage />,
          },
        ],
      },
    ],
  },
]

export default routes
