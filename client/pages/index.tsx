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
        padding: "20px",
        height: "100vh",
      }}
    >
      <Typography variant="h1">Stock API</Typography>
      <DisplaySearch />
      <StockSearch />
    </Box>
  );
}
