import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './CardsList.css';
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
//import { setFavorite } from "../actions";

const Cards = ({name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map(elem => elem.type.name).join(', ')
  
  const handleOnFavorite = () => {
    dispatch(setFavorite({elementId: id}));
  }
  
  return (
    <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
        <Meta description={typesString} />
    </Card>
  );
};

export default Cards;
