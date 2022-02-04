import { React, useState } from "react";
import useDebounce from "../useDebounce";

export default function SearchInput({ value, onChange }) {
    const [displayValue, setDisplayValue] = useState(value)
    const debounceChange = useDebounce(onChange, 500)

    function handleChange(event) {
        setDisplayValue(event.target.value)
        debounceChange(event.target.value)
    }

    return (
        <input 
        className="animes-input" type="search"
            value={displayValue}
            onChange={handleChange}
            placeholder="Digite o anime"
        />

    )
}