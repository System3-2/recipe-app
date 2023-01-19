import React from 'react';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Itallian</h4>
      </SLink>
      <SLink to={'/cuisine/american'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink >
      <SLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>ThaiFood</h4>
      </SLink>
      <SLink to={'/cuisine/japanense'}>
        <GiChopsticks />
        <h4>Japanense</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 2rem;
  padding: 1.5rem .5rem;
  // background: #0a0a23;


`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4{
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }

`;
export default Category;