
// @mui material components
import Card from "@mui/material/Card";

// WedGlobally React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// WedGlobally React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ChatBox from "layouts/chat/components/ChatBox";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "layouts/authentication/sign-in";

function Messages() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [user] = useAuthState(auth);

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Chat Box</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
               {!user ? (
        <SignIn />
      ) : (
        <>
          <ChatBox />
        </>
      )}
            </SoftBox>
          </Card>
        </SoftBox>
     
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Messages;
