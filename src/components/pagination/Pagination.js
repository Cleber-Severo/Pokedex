import { display } from '@mui/system';
import React from 'react'

const Pagination = ({pagesNum, cardsPerPage, changePage, currentPage}) => {
  
  let pages = [];
  for(let i=1; i <= Math.ceil(pagesNum/cardsPerPage); i++){
        pages.push(i);
    }

    
    if(currentPage === 1) {
        
        return (
            <div className='pagination' >
                {pages.map((page, index) =>{  

                    if(page == currentPage){
                        return(
                        <div>
                            
                            <button key={index} onClick={() => { changePage(page); }} className={ page == currentPage ? 'active' : ''}>{page}</button>
                            <button key={index + 1} onClick={() => { changePage(page +1 ); }} className={ page +1  == currentPage ? 'active' : ''}>{page+ 1}</button>
                            <button key={index + 2} onClick={() => { changePage(page +2 ); }} className={ page +2 == currentPage ? 'active' : ''}>{page + 2}</button>
                            <button key={index + 3} onClick={() => { changePage(page +1); }} > {`>`} </button>



                            {/* <button 
                                key={index} 
                                onClick={() => { changePage(page); }}
                                className={ page == currentPage ? 'active' : ''}
                            >
                                {page}
                            </button> */}
                        </div>
                        
                    )
                    }
                    
                })}
            </div>
        )

    }

    if(currentPage === pages.length) {
        
        return (
            <div className='pagination' >
                {pages.map((page, index) =>{  

                    if(page == currentPage){
                        return(
                        <div>
                            
                            <button key={index} onClick={() => { changePage(page -1); }} > {`<`} </button>
                            <button key={index + 1} onClick={() => { changePage(page -2 ); }} className={ page +2 == currentPage ? 'active' : ''}>{page - 2}</button>
                            <button key={index +2 } onClick={() => { changePage(page -1 ); }} className={ page +1  == currentPage ? 'active' : ''}>{page - 1}</button>
                            <button key={index + 3} onClick={() => { changePage(page); }} className={ page == currentPage ? 'active' : ''}>{page}</button>



                            {/* <button 
                                key={index} 
                                onClick={() => { changePage(page); }}
                                className={ page == currentPage ? 'active' : ''}
                            >
                                {page}
                            </button> */}
                        </div>
                        
                    )
                    }
                    
                })}
            </div>
        )

    }


    return (
        <div className='pagination'>
            {/* {console.log(pages)} */}
            {pages.map((page, index) =>{            
        
                 if(page == currentPage){
                    return(
                        <div>
                            <button key={index} onClick={() => { changePage(page -1); }} > {`<`} </button>
                            <button key={index + 1} onClick={() => { changePage(page -2 ); }} className={ page +1  == currentPage ? 'active' : ''} style={page == 2 ? {display:'none'}:{}} >{page == 2 ? '' : page - 2}</button>
                            <button key={index + 2} onClick={() => { changePage(page -1 ); }} className={ page +2 == currentPage ? 'active' : ''}>{page - 1}</button>
                           

                            <button key={index + 3} onClick={() => { changePage(page); }} className={ page == currentPage ? 'active' : ''}>{page}</button>
                            <button key={index + 4} onClick={() => { changePage(page +1 ); }} className={ page +1  == currentPage ? 'active' : ''}>{page+ 1}</button>
                            
                       
                                <button key={index + 5} onClick={() => { changePage(page +2 ); }} className={ page +2 == currentPage ? 'active' : ''} style={currentPage == (pages.length-1) ? { display: 'none' } : {}} >{ page != pages.lengh ? page + 2 : ''}</button>
                            <button key={index + 6} onClick={() => { changePage(page +1); }} > {`>`} </button>



                            {/* <button 
                                key={index} 
                                onClick={() => { changePage(page); }}
                                className={ page == currentPage ? 'active' : ''}
                            >
                                {page}
                            </button> */}
                        </div>
                        
                    )
                }

        //         return (
        //             <button 
        //                 key={index} 
        //                 onClick={() => { changePage(page); }}
        //                 className={ page == currentPage ? 'active' : ''}
        //             >
        //                 {page}
        //             </button>
        //         )

            })}
        </div>
  )
}

export default Pagination