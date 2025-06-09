import styled from "styled-components";

export const HighlightedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 8px;
  padding: 8px;
  width: 100%;

  button: {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Poster = styled.img`
  width: 60px;
  border-radius: 4px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;

  span {
    background: #eee;
    color: #333;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    line-height: 1;
  }
`;
