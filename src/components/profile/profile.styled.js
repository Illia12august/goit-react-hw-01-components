import styled from '@emotion/styled';
export const ProfileContainer = styled.div`
  margin: auto;
  border: 1px solid;
  width: 200px;
  border-radius: 15px;
`;
export const Avatar = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  margin: 5px;
`;
export const Descr = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 5px;
  color: #00000075;
`;
export const Stats = styled.ul`
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;
`;
export const StatsEl = styled.li`
  display: flex;
  justify-content: space-between;
`;
