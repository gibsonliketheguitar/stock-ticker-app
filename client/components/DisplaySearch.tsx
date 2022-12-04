import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchResult } from "../atoms/search";

export function DisplaySearch() {
  const result = useRecoilValue(searchResult);
  if (result.length === 0) return <></>;
  return (
    <Box>
      <Typography variant="h2">{result}</Typography>
    </Box>
  );
}
