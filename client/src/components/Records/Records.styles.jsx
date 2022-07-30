import styled from "styled-components";

export const BtnWrap = styled.div`
  button {
    margin-right: 30px;
    margin-bottom: 20px;
    &.is-disabled {
      border: 1px solid #C2C1C1;
      color:#C2C1C1;
      &.record-disable {
        background-color: #C2C1C1;
        color: #fff;
      }
    }
    :last-child {
      margin-right: 0;
    }
  }
`;

export const AudioWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 30px;
  a {
    text-transform: capitalize;
    color: #1B90D2;
    font-weight: 400;
    font-size: 18px;
  }
`;
