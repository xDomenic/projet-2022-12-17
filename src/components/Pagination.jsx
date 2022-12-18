import React from 'react';


export default function Pagination({ totalPages, onSelect, currentPage }) {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8"></div>
            </div>
            <div className="row movie-item-row">
                <div className="custom-col-"></div>
                <div className="pagination-wrap  mt-60">
                    <nav>
                        <ul className=''>
                            <li className={`${1 == currentPage ? "active hidden" : ""}`}>

                                <a onClick={() => onSelect(Number(currentPage) - 1)} href="#">Previous</a>

                            </li>
                            ...
                            {<li className={`${"active"}`}>
                                <a onClick={() => onSelect(currentPage)} href="#">{currentPage}</a>
                            </li>}
                            ...
                            <li className={`${currentPage === 500 ? "active" : ""}`}>
                                <a onClick={() => onSelect(Number(currentPage) + 1)} href="#">Next</a>
                            </li>
                            <p> Page Number</p>   <li>
                                <input onChange={(e) => e?.target.value <= 500 && e?.target.value > 1 ? onSelect(e?.target.value) : null} type="number" />
                            </li>
                            {totalPages >= 500 ? <p> Total Pages : {500} </p> : <p> Total Pages : {totalPages} </p>}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
