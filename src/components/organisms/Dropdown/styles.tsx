import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow: auto;
`;

export const Item = styled.li<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.colors.lightBlue : "transparent"};

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  transition: background 0.2s ease-in-out;
`;
