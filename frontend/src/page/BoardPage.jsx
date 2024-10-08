// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { getSearchBoard } from '../api/api';
import Board from '../components/Board/Board';
import { query } from 'express';

export const BoardPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [board, setBoard] = useState([]);
    // const [error, setError] = useState(null);
    //можна ще додати loading
  
    // const boardId = 102030;
    // const handleOnSubmit = () =>{
    //   console.log('found', boardId)
    //   setBoard(boardId)
    // }

    const boardId = searchParams.get('query') ?? '';
  
    const handleOnSubmit = query => {
      const changeParams = query !== '' ? { query } : {};
      setSearchParams(changeParams);
    };
  
    useEffect(() => {
      if (!boardId) return;
  
      // setLoading(true);
      getSearchBoard(query)
        .then((boardByQuery ) => {
          console.log('boardbyquery', boardByQuery);
          setBoard(boardByQuery);
        })
        .catch(error => 
          console.log('error', error)
          // setError(error)
          )
        // .finally(() => setLoading(false));
    }, [boardId]);
  
    return (
      <>
      {/* {error && <h2>{error.message}</h2>} */}
      <SearchBar value={boardId} 
      onSearch={handleOnSubmit}
       />
      {board.length > 0 ? (
                <Board boardData={board}>
                  <Outlet/>
                </Board> 
            ) : (
                <div>No boards found</div>
            )}
      {/* <div>Cards</div> */}
        {/* <Card/> */}
      </>
      );
}

export default BoardPage