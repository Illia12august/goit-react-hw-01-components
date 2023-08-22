import styled from '@emotion/styled';

export const Stat = styled.section`
  width: 370px;
  margin: 24px auto;
  text-align: center;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  border: 1px solid rgb(214, 214, 214);
  border-radius: 4px;
  background-color: rgb(244, 245, 245);
`;
export const Title = styled.h2`
  padding: 24px;
  font-size: 24px;
  font-weight: 500;
  color: rgb(72, 72, 72);
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-basis: auto;
  
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  font-size: 18px;
  font-weight: 500;
`;
