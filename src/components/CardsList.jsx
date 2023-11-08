import Cards from "./Cards";

const CardsList = ({elements}) => {
    return (
        <div className="CardsList">
            {elements.map((element) => {
                return <Cards name={element.name} key={element.name} image={element.sprites.front_default}/>
            })}
        </div>
    )
}

CardsList.defaultProps = {
    element: Array(10).fill('')
}

export default CardsList;