const ItemListContainer = (prop) => {
    const saludoStyle = {
        backgroundColor : "gray",
        padding: "10px",

    }
    return (
        <div style={saludoStyle}>
            <h3>Bienvenido {prop.name}</h3>
        </div>
        
    )
}

export default ItemListContainer;