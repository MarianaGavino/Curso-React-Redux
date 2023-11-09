import Cards from "./Cards";

const CardsList = ({elements}) => {
    return (
        <div className="CardsList">
            {elements.map((element) => {
                return (
                <Cards 
                    name={element.name} 
                    key={element.name} 
                    image={element.sprites.front_default}
                    types={element.types}
                    id={element.id}
                    favorite={element.favorite}
                />)
            })}
        </div>
    )
}

CardsList.defaultProps = {
    element: Array(10).fill('')
}

export default CardsList;