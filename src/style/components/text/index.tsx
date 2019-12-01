import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: 'Chivo', sans-serif;
  font-size: 14.5px;
  font-weight: 400;
`;

export default Text;
