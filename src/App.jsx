import { useState } from "react";
import './style.css'
import SearchInput from './components/SearchInput'
export default function App(){
    
    const [text, setText] = useState('')

    return (
        <div className="App">
            <h1>Animes</h1>
            <SearchInput 
            value={text}
            onChange={(search) => setText(search)}
            />
        </div>
    )
}