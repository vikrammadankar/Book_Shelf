const SelectCategories = ({ category, setCategory, categories }) => {

    return (
        <div>
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="select">
                <option value="">All</option>
                {categories.map(option => <option key={option} value={option}>{option[0].toUpperCase() + option.substring(1, 100)}</option>)}
            </select>
        </div>
    )
}

export default SelectCategories