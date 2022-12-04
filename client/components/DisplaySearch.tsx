import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { searchResult } from "../atoms/search";

function ObjIsEmpty(input: any) {
  let count = 0;
  for (const [key, value] of Object.entries(input)) {
    if (key) count += 1;
  }
  return count === 0;
}

export function DisplaySearch() {
  const result: any = useRecoilValue(searchResult);
  if (ObjIsEmpty(result)) return <></>;
  return <StockCard />;
}

function StockCard() {
  const {
    name,
    symbol,
    industry,
    currentPrice,
    previousClose,
    percentChange,
    logo,
    timeOfQuery,
    weburl,
  }: any = useRecoilValue(searchResult);
  const Row = styled("div")({
    display: "flex",
    justifyContent: "center",
  });

  const CellLabel = styled(Typography)({
    flex: 1,
    display: "flex",
    justifyContent: "left",
    padding: "12px",
    textAlign: "left",
  });

  const CellText = styled(Typography)({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    textAlign: "center",
  });

  return (
    <Card
      variant="outlined"
      style={{
        display: "flex",
        backgroundColor: "",
        flex: "wrap",
        padding: "24px",
      }}
    >
      <Box
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Image
          src={logo}
          alt={name + " " + "logo"}
          width={240}
          height={240}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            margin: "2px",
          }}
        />
      </Box>
      <Box style={{ flex: 3, padding: "12px" }}>
        <Row>
          <CellLabel variant="h3">{name}</CellLabel>
          <CellText variant="h4" sx={{ alignItems: "center" }}>
            {symbol}
          </CellText>
        </Row>
        <Row>
          <CellLabel variant="h5">Industry:</CellLabel>
          <CellText variant="body1">{industry}</CellText>
        </Row>
        <Row>
          <CellLabel variant="h5">
            {new Date(timeOfQuery).toDateString()}
          </CellLabel>
          <CellText variant="body1">{currentPrice}</CellText>
        </Row>
        <Row>
          <CellLabel variant="h5">Last Closing Price:</CellLabel>
          <CellText variant="body1">{previousClose}</CellText>
        </Row>
        <Row>
          <CellLabel variant="h5">Percentage Change:</CellLabel>
          <CellText variant="body1">{percentChange + " %"}</CellText>
        </Row>
      </Box>
    </Card>
  );
}
