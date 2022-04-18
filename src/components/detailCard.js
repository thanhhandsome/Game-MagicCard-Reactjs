
const CardDetail = ({ item, id, handleClick }) => {

    const itemClass = item.status ? " active " + item.status : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.image} alt="" />
        </div>
    )
}

export default CardDetail;