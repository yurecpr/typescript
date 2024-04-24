import "./styles.css";

interface AnimalProp {
  name: string;
  species: string;
  image: string;
}



function  AnimalCard ({name,species,image}:AnimalProp) {
  return (
    <div className="animal-card-wrapper">
      <h2>{name}</h2>
      <p>{species}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default AnimalCard;