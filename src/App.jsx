import { useState, useEffect } from "react";
import './style.css'
import SearchInput from './components/SearchInput'
import Pagitation from "./components/Pagination";
import qs from 'qs'
const limit = 12
export default function App() {

    const [text, setText] = useState('')
    const [info, setInfo] = useState({})
    const [offset, setOffset] = useState(0)
    const api = 'https://kitsu.io/api/edge/'

    useEffect(() => {
        setInfo({});
        const query = {
            page:{
                limit,
                offset
            }
        };


        if(text){
            query.filter = {
                text,
            };
        }
        
        fetch(`${api}anime?${qs.stringify(query)}
        `)
            .then((response) => response.json())
            .then((response) => setInfo(response))

    }, [text, offset]);

    return (
        <div className="App">
            <header className="animes-header">
                <img src="https://animeiroiro.com.br/wp-content/uploads/2022/01/2022-logo-200px.webp" />

                <SearchInput
                    value={text}
                    onChange={(search) => setText(search)}
                />
            </header>
            
            {text && !info.data && (
                <span>Carregando...</span>
            )}

            {info.data && (

                <ul className="animes-list">
                    {info.data.map((anime) => (
                        <li key={anime.id}>
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />

                            {anime.attributes.canonicalTitle}
                        </li>
                    ))}
                </ul>
            )}
            {info.meta && (
                <Pagitation
                    limit={limit}
                    total={info.meta.count}
                    offset={offset}
                    setOffset={setOffset} />
            )}
        </div>
    )
}