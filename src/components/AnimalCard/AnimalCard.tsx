import {AnimalCardWrapper,AnimalImage,CradTitle,CardParagraph } from "./styles";
import { AnimalCardProps } from "./types";



function  AnimalCard ({animalData}:AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <CradTitle>{animalData.name}</CradTitle>
      <CardParagraph>{animalData.species}</CardParagraph>
      <AnimalImage src={animalData.image}/>
    </AnimalCardWrapper>
  );
}

export default AnimalCard;