import styled from 'styled-components';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 285px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  max-width: 285px;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  :hover,
  :focus {
    outline: 2px solid teal;
  }
`;
//  display: flex;
//   flex-direction: column;
//   gap: 16px;
