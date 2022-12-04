import { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Button, TextField } from "@mui/material";
import { searchResult } from "../atoms/search";

export default function StockSearch() {
  const [input, setInput] = useState("");
  const [result, setResult] = useRecoilState<any>(searchResult);

  const handleTextInput = (e: any) => {
    const chars = e.target.value.toUpperCase();
    setInput(chars);
  };

  const handleOnSubmit = async () => {
    if (input.length < 3) return;
    await fetchData();
  };

  const handleReset = () => {
    setInput("");
    setResult("");
  };

  async function fetchData() {
    try {
      const baseURL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_DEV_SERVER
          : process.env.NEXT_PUBLIC_PROD_SERVER;

      const query = "/stock?symbol=" + input;
      const response = await fetch(baseURL + query);

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
    <Box style={{ display: "flex", margin: "24px" }}>
      <TextField
        value={input}
        onChange={handleTextInput}
        sx={{ flex: 1 }}
        error={input.length >= 6}
        style={{ width: "390px", marginRight: "12px" }}
      />
      <Button
        variant="contained"
        onClick={handleOnSubmit}
        sx={{ marginRight: "12px", width: "240px" }}
      >
        Search
      </Button>
      {result && result?.name && result?.name?.length && (
        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{ marginRight: "12px", width: "240px" }}
        >
          {" "}
          Reset{" "}
        </Button>
      )}
    </Box>
  );
}
