import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  background-color: #183119;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Title>ReactMeals</Title>
    </Wrapper>
  );
};

export default Header;
