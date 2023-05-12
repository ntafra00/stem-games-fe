import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const Dropdown = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        props.setIsOptionSelected(selectedOption)
    }

    useEffect(() => {
        setSelectedOption(props.selectedValue)
    }, [props.selectedValue])

    return (
        <div className="mb-3">
            <div className="form-label">{props.label}</div>
            <div></div>
            <div className="col-12 col-md-auto ms-auto d-print-none">
                <Select options={props.options} onChange={handleChange} autoFocus={true} value={selectedOption} />
            </div>
        </div>
    )
}

export default Dropdown;