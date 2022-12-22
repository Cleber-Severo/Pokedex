import React from 'react'

const Pagination = ({pagesNum, cardsPerPage, changePage, currentPage}) => {
  
  let pages = [];
  for(let i=1; i <= Math.ceil(pagesNum/cardsPerPage); i++){
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {/* {console.log(pages)} */}
            {pages.map((page, index) =>{
                return (
                    <button 
                        key={index} 
                        onClick={() => { changePage(page); }}
                        className={ page == currentPage ? 'active' : ''}
                    >
                            {page}
                    </button>
                )
            })}
        </div>
  )
}

export default Pagination