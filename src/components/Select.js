import React from 'react'

import {OPTIONS} from './components-provider/options'

const Select = ({ category, setCategory }) => {

    return (
        <div className="mb-3 w-50 m-auto">
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="form-control">
                {OPTIONS.map( option => <option value={option.value}>{option.nameToDisplay}</option>)}
            </select>
        </div>
    )
}

export default Select