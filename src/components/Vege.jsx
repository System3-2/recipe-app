import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


const Vege = () => {
  const [vege, setVege] = useState([]);

  const getVege = async () => {
    const check = localStorage.getItem('vege');

    if (check) {
      setVege(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`)
      const data = await api.json();
      // console.log(data);
      setVege(data.recipes);

      localStorage.setItem('vege', JSON.stringify(data.recipes));
    }
  }
  useEffect(() => {
    getVege();
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          drag: 'free',
          gap: '5rem'
        }}>
          {vege.map((recipe) => {
            const { title, id, image } = recipe;

            return (
              <SplideSlide key={id}>
                <Card>
                  <Link to={`recipe/${id}`}>
                    <p>{title}</p>
                    <img src={image} alt={title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  margin: 3rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%,0%);
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`;
export default Vege;