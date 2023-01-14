import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const StyledParagraph = styled(Typography)`
   text-align: center;
   margin-bottom: 50px;
   background-color: #f9f9f9;
   display: flex;
  align-items: center;
  width: 300px;
`
const FooterWrapper = styled(Box)`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Footer = () => {
  return (
    <FooterWrapper>
      <StyledParagraph>Terms of use | Privacy policy</StyledParagraph>
    </FooterWrapper>
  )
}

export default Footer