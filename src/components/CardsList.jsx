import Cards from "./Cards";

const CardsList = ({element}) => {
    return (
        <div className="CardsList">
            {element.map((element) => {
                return <Cards />
            })}
        </div>
    )
}

CardsList.defaultProps = {
    element: Array(10).fill('')
}

export default CardsList;