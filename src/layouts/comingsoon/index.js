import { Container, ListItem, Stack } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ComingSoon() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
    <Container maxWidth="sm">
        <Stack spacing={2}>
  <ListItem>Coming Soon</ListItem>
  <ListItem>This item is under implementation and will be updated soon</ListItem>
  <ListItem>Thank you!!</ListItem>
</Stack>
    </Container>
</DashboardLayout>
  );
}

export default ComingSoon;
