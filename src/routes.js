

// WedGlobally React layouts
import Dashboard from "layouts/dashboard";
import Messages from "layouts/messages";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// WedGlobally React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import SignOut from "layouts/authentication/sign-out";
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ComingSoon from "layouts/comingsoon";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Marketplace from "layouts/marketplace/components";
import ChatWindow from "layouts/chat/components/ChatWindow";
import PremiumFeatures from "layouts/premiumfeatures/components";
import InterestedProfiles from "layouts/interestedprofiles";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Chats",
    key: "chats",
    route: "/chats",
    icon: <ChatBubbleOutlineIcon size="12px" />,
    component: <ChatWindow />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Intersted Profiles",
    key: "interestedprofiles",
    route: "/interestedprofile",
    icon: <GroupIcon size="12px" />,
    component: <InterestedProfiles />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <SummarizeIcon size="12px" />,
    component: <ComingSoon />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Premium Features",
    key: "premium",
    route: "/premium-features",
    icon: <WorkspacePremiumIcon size="12px" />,
    component: <PremiumFeatures />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "MarketPlace",
    key: "marketplace",
    route: "/marketplace",
    icon: <StorefrontIcon size="12px" />,
    component: <Marketplace />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <Settings size="12px" />,
    component: <ComingSoon />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    route: "/authentication/sign-out",
    icon: <LogoutIcon size="12px" />,
    component: <SignOut />,
    noCollapse: true,
  },
];

export default routes;
