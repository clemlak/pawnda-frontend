import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.colors.main};
  font-family: 'Chivo', sans-serif;
  font-weight: 900;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

export {
  Title,
  Text,
};
