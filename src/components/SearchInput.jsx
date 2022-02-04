import React from "react";

export default function SearchInput({value, onChange}){
    function handleChange(event){
        onChange(event.target.value)
    }
    return <input className="animes-input" type="search" value={value} onChange={handleChange}/>
}