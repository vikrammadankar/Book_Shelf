import React from 'react'

const SelectDate = ({ dates, date, setDate }) => {

    return (
        <div>
            <select
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className="select">
                <option value="" >All</option>
                {dates.map((date, index) => <option key={index} value={date} >{date}</option>)}
            </select>
        </div>
    )
}

export default SelectDate