import { useState, useEffect } from "react";
import './style.css'
import SearchInput from './components/SearchInput'
export default function App() {

    const [text, setText] = useState('')
    const [info, setInfo] = useState({})
    const api = 'https://kitsu.io/api/edge/'

    useEffect(() => {
        if (text) {
            fetch(`${api}anime?filter[text]=${text}&page[limit]=12
        `)
                .then((response) => response.json())
                .then((response) => setInfo(response))
        }else{
            setInfo({})
        }
    }, [text]);
    return (
        <div className="App">
            <h1>Animes</h1>
            <SearchInput
                value={text}
                onChange={(search) => setText(search)}
            />

            {info.data && (
                <ul className="animes-list">
                {info.data.map((anime) =>(
                    <li key={anime.id}>
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>

                        {anime.attributes.canonicalTitle}
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}