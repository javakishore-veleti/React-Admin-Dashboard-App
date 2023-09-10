import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return ( 
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="Welcome to your dahsboard"></Header>
            </Box>                
        </Box>
     );
}
 
export default Dashboard;