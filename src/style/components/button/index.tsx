import styled from 'styled-components';

const Button = styled.button`
  font-family: ${(props) => props.theme.font.family};
  font-size: 14.5px;
  font-weight: ${(props) => props.theme.font.normalWeight};

  color: ${(props) => props.theme.colors.button.text};

  border-radius: ${(props) => props.theme.border.radius};
  border-color: ${(props) => props.theme.colors.button.border};
  border-style: ${(props) => props.theme.border.style};
  border-width: ${(props) => props.theme.border.width};

  background-color: ${(props) => props.theme.colors.button.background};

  padding: 8px 32px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
