import React from 'react'

const SelectDate = ({ dates, date, setDate }) => {

    return (
        <div className="mb-3 w-50 m-auto">
            <select
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className="form-control">
                <option value="" >All</option>
                {[...new Set(dates)].map((date, index) => <option key={index} value={date} >{date}</option>)}
            </select>
        </div>
    )
}

export default SelectDate