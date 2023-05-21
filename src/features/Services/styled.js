import styled from "styled-components";

export const StyledServices = styled.article`
display: flex;
flex-direction: column;
`

export const Title = styled.h2`

`

export const ServicesDetailsList = styled.ul`
list-style: none;
  li::before {
    content: "🚧";
    margin-right: 0.5em;
  }
`;