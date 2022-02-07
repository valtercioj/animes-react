import React from "react";

const maxItems = 9; // 4 de cada lado e 1 no meio

const maxLeft = (maxItems - 1) / 2; // numero total a esquerda



export default function Pagitation({ limit, total, offset, setOffset }) {
    // para saber qual pagina estar, se for maior que zero divide pelo limite e soma 1 para sempre está na pagina seguinte
    const current = offset ? offset / limit + 1 : 1;

    const pages = Math.ceil(total / limit) // 

    const first = Math.max(current - maxLeft, 1);

    const onPageChange = (page)=>{
        setOffset((page - 1) * limit)
    }
    
    return (

        <ul className="pagination">
            <li>
                <button 
                    onClick={()=>
                        onPageChange(current-1)
                    }
                    disabled={current===1}

                >
                    {"<<"}
                    </button>
            </li>
            {Array.from({ length:Math.min(maxItems,pages) })
                .map((_, index) => index + first)
                .map((page) =>
                    <li key={page}>
                        <button
                            onClick={() =>
                                onPageChange(page)
                            }
                            
                            className={
                                page === current
                                    ?
                                    "pagination__item--active"
                                    :
                                    null
                            }
                        >
                            {page}
                        </button>
                    </li>
                    
                )}
                 <li>
                <button 
                    onClick={()=>
                        onPageChange(current+1)
                    }
                    disabled={current===pages}
                    className={current>=10?'button-2':null}
                >
                    {">>"}
                    </button>
            </li>
        </ul>
    )
}