import { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Button, TextField } from "@mui/material";
import { searchResult } from "../atoms/search";

export default function StockSearch() {
  const [input, setInput] = useState("");
  const [_, setResult] = useRecoilState(searchResult);

  const handleTextInput = (e: any) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = async () => {
    if (input.length < 3) return;
    setResult(input);
    //await fetchData();
  };

  async function fetchData() {
    try {
      const baseURL = "http://localhost:8000/stock";
      const queryParam = "?symbol=" + input;
      const response = await fetch(baseURL + queryParam);
      if (!response.ok) throw new Error();
      const res = await response.json();
      setResult(res);
    } catch (err) {
      console.log("failed to get stock");
    }
  }

  /*
    TODO enhancement
        Adjust flex so that when it's in mobile mode the its in column mode
        https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
  */

  return (
    <Box>
      <Box style={{ display: "flex" }}>
        <TextField
          value={input}
          onChange={handleTextInput}
          sx={{ flex: 1 }}
          error={input.length >= 6}
        />
        <Button variant="contained" onClick={handleOnSubmit}>
          Search
        </Button>
      </Box>
    </Box>
  );
}
