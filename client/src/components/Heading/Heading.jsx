import React from 'react'
import styled from "styled-components";
import { device } from '../../themes/Breakpoints';


const Heading = ({ tag, text }) => {
  const Tag = tag || 'h1'
	return (
		<Wrapper>
			<Tag>{text}</Tag>
		</Wrapper>
	)
}


export const Wrapper = styled.div`
      margin-bottom: 30px;
			h2 {
				font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 74px;
        color: #0F283D;
				@media ${device.tablet} {
					font-size: 30px;
        	line-height: 40px;
  			}
			}
`

export default Heading