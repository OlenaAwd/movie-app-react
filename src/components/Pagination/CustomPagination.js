import { createTheme } from "@mui/material/styles";
import { Pagination } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/styles";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function CustomPagination({ setPage, numOfPages = 10 }) {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={theme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handleChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
