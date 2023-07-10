import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px black solid;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 5px;
  padding-left: 10px;

  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 400;
`;