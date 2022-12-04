import { Box, Typography } from "@mui/material";
import { DisplaySearch } from "../components/DisplaySearch";
import StockSearch from "../components/StockSearch";

export default function Home() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        paddingTop: "120px",
      }}
    >
      <Typography variant="h1">Search Stock</Typography>
      <DisplaySearch />
      <StockSearch />
    </Box>
  );
}
