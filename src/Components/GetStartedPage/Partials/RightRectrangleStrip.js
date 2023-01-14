import { Box, styled } from "@mui/material";
import React from "react";

const RightRectrangleStrip = () => {
  const StripBox = styled(Box)`
    background: #3766e8;
    opacity: 0.2;
    transform: rotate(-30deg);
    position: fixed;
    width: 669.01px;
    height: 13.44px;
    right: -100px;
    top: 258px;
  `;
  return <StripBox></StripBox>;
};

export default RightRectrangleStrip;
