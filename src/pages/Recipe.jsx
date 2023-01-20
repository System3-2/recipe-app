import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


const Recipe = () => {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let params = useParams();


  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailsData = await data.json();
    setDetails(detailsData);
    // console.log(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [params]);

  console.log(details);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.ttile}</h2>
        <img src={details.image} alt="img" />
      </div>
      <Info>

        <Button
          onClick={() => setActiveTab('instructions')}
          className={activeTab === 'ingredients' ? 'active' : ''}
        >Ingredients
        </Button>

        <Button
          onClick={() => setActiveTab('ingredients')}
          className={activeTab === 'instructions' ? 'active' : ''}
        >Instructions
        </Button>

        { activeTab === "ingredients" &&  <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
        }
       
        <ul>
        { details.extendedIngredients.map((ingredient) => {
            return <li key={ingredient.id}>{ingredient.original}</li>
          })}
        </ul>
      </Info>
    </DetailsWrapper>
  )
}


const DetailsWrapper = styled.div`
  margin-top: 12rem;
  margin-bottom: 5rem;
  display: flex;

.active {
  background:  linear-gradient(35deg, #494949, #313131);
  color: #fff;
}
h2 {
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #000;
}
ul {
  margin-top: 2rem;
}
img {
  border-radius: 2rem;
}
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;