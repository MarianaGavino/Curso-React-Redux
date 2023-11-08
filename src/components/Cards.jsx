import { Card } from "antd";
import { StarOutlined } from '@ant-design/icons'
import Meta from "antd/lib/card/Meta";
import './CardsList.css';

const Cards = ({name, image}) => {
  return (
    <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}
    >
        <Meta description="fire, magic" />
    </Card>
  );
};

export default Cards;
