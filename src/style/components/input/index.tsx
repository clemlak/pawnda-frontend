import styled from 'styled-components';

const Input = styled.input`
  font-family: ${(props) => props.theme.font.family};
  font-size: 14.5px;
  font-weight: ${(props) => props.theme.font.normalWeight};

  color: ${(props) => props.theme.colors.input.text};

  background-color: ${(props) => props.theme.colors.input.background};

  border-color: ${(props) => props.theme.colors.input.border};
  border-radius: ${(props) => props.theme.border.radius};
  border-style: ${(props) => props.theme.border.style};
  border-width: ${(props) => props.theme.border.width};

  padding: 8px 12px;

  &::placeholder {
    color: ${(props) => props.theme.colors.input.placeholder};
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
