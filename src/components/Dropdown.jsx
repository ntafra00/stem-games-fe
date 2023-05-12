import React, { useState } from 'react'
import Select from 'react-select'

const Dropdown = ({ options, setIsOptionSelected, label }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption.value)
        setIsOptionSelected(selectedOption.value)
    }

    return (
        <div className="mb-3">
            <div className="form-label">{label}</div>
            <div></div>
            <div className="col-12 col-md-auto ms-auto d-print-none">
                <Select options={options} onChange={handleChange} autoFocus={true} />
            </div>
        </div>
    )
}

export default Dropdown;