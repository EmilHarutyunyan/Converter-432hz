import styled from "styled-components";

 export const Btn = styled.button`
    background: ${props => props.primary ? "#1B90D2" : "white"};
    color: ${props => props.primary ? "white" : "#1B90D2"};
    border-radius: 8px;
    padding: 14px 0;
    width: 100%;
    max-width: 197px;
    border: none;
    font-size: 18px;
    line-height: 18px;
    cursor: pointer;
    transform: all 0.3s;
    border: ${props => props.primary ? "none" : "1px solid #1B90D2"};
    ${props => props.error ? {border:"1px solid #D21B1B"} : ""};
    ${props => props.error ? {color:"#D21B1B"} : ""};
    :disabled,
    &[disabled]{
      border: 1px solid #C2C1C1;
      color: #C2C1C1;
    }
    :hover {
      opacity: 0.9;
    }
    

 `;