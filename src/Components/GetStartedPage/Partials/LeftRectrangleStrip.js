import { Box, styled } from "@mui/material";
import React from "react";

const LeftRectrangleStrip = () => {
  const StripBox = styled(Box)`
    background: #3766e8;
    opacity: 0.2;
    transform: rotate(-30deg);
    position: fixed;
    width: 669.01px;
    height: 13.44px;
    left: -100px;
    bottom: 300px;
  `;
  
  return <StripBox></StripBox>;
};

export default LeftRectrangleStrip;
