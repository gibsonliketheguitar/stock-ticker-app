import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchResult } from "../atoms/search";

export function DisplaySearch() {
  const result: any = useRecoilValue(searchResult);

  function ObjIsEmpty(input: any) {
    let count = 0;
    for (const [key, value] of Object.entries(input)) {
      if (key) count += 1;
    }
    return count === 0;
  }

  if (ObjIsEmpty(result)) return <></>;
  return (
    <StockCard
      name={"Apple"}
      symbol={"APPL"}
      currentPrice={"$10.00"}
      closingPrice={"$11.00"}
      percentageChange={"10%"}
    />
  );
}

function StockCard({
  name,
  symbol,
  currentPrice,
  closingPrice,
  percentageChange,
}: any) {
  const Row = styled("div")({
    display: "flex",
    justifyContent: "center",
  });

  const CellText = styled(Typography)({
    flex: 1,
    padding: "12px",
  });

  return (
    <Card style={{ display: "flex" }}>
      <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {"company image"}
      </Box>
      <Box style={{ flex: 1 }}>
        <Row>
          <CellText variant="h4">{name}</CellText>
          <CellText variant="h4">{symbol}</CellText>
        </Row>
        <Row>
          <CellText variant="body1">Current Price:</CellText>
          <CellText variant="body1">{currentPrice}</CellText>
        </Row>
        <Row>
          <CellText variant="body1">Last Closing Price</CellText>
          <CellText variant="body1">{closingPrice}</CellText>
        </Row>
        <Row>
          <CellText variant="body1">Percentage Change</CellText>
          <CellText variant="body1">{percentageChange}</CellText>
        </Row>
      </Box>
    </Card>
  );
}
