import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  gap: 20px;

  @media (max-width: 1360px) {
    width: 100%;  
  }

  @media (max-width: 767px) {  
    flex-direction: column;
  }
`;