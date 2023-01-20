import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {

    // let check = localStorage.getItem('cuisine');

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=100&cuisine=${name}`);
      const recipes = await data.json();

      console.log(recipes.results);
      setCuisine(recipes.results);
      // localStorage.setItem('cuisine', JSON.stringify(recipes.results));



  }
  useEffect(() => {
    getCuisine(params.id);
    // console.log(params.id);
  }, [params]);

  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >

      {cuisine.map((item) => {
        return (
          <Link to={`recipe/${item.id}`}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}

    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`;
const Card = styled.div`
  img{
    width: 90%;
    border-radius: 2rem;
  }
  a {    
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
