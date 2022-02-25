const SelectCategories = ({ category, setCategory, categories }) => {

    return (
        <div className="mb-3 w-50 m-auto">
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="form-control">
                <option value="">All</option>
                {categories.map(option => <option key={option} value={option}>{option[0].toUpperCase() + option.substring(1, 100)}</option>)}
            </select>
        </div>
    )
}

export default SelectCategories