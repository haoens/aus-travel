const Categories = ( {types} ) => {
    let formatted_types = null;
    if (types) {
        if (Array.isArray(types)) {
            formatted_types = types.map((type, index) => {
                return (
                    <div className="category" key={index}>
                        {formatCategory(type)}
                    </div>
                );
            })
        }
    }
    
    return (
        <div className="body-info-line">
            <span>
                Categories:
            </span>
            <div className="categories-container">
                {formatted_types}
            </div>
        </div>
    )
}   

function formatCategory(categoryName){
    if (typeof categoryName === "string") {
        categoryName = categoryName.split("_").map((word) => {
            return word.length > 2 ? 
                word.charAt(0).toUpperCase() + word.slice(1) :
                word;
        }).join(" ");
        return categoryName
    }
    else {
        return "N/A"
    }
}

export default Categories;