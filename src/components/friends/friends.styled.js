import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px auto;
  align-items: center;
`;
export const FriendItem = styled.li`
  width: 350px;
  height: 60px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 4px;
  background-color: rgb(244, 245, 245);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  gap: 30px;
  padding: 18px;
  justify-content: flex-start;
  align-items: center;
`;
export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: rgb(72, 72, 72);
`;
export const FriendImg = styled.img`
  width: 70px;
  height: 70px;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
`;
