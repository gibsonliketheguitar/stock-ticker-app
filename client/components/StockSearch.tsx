import { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Button, TextField } from "@mui/material";
import { searchResult } from "../atoms/search";

export default function StockSearch() {
  const [input, setInput] = useState("");
  const [_, setResult] = useRecoilState(searchResult);

  const handleTextInput = (e: any) => {
    console.log("text change", e);
    setInput(e.target.value);
  };

  const handleOnSubmit = () => {
    if (input.length < 3) return;
    setResult(input);
  };

  /*
    TODO enhancement
        Adjust flex so that when it's in mobile mode the its in column mode
        https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
  */

  return (
    <Box>
      <Box style={{ display: "flex" }}>
        <TextField value={input} onChange={handleTextInput} sx={{ flex: 1 }} />
        <Button variant="contained" onClick={handleOnSubmit}>
          Search
        </Button>
      </Box>
    </Box>
  );
}
