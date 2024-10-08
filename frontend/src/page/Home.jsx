import React from 'react'
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar'


const Home = () => {
  return (
<>
    <SearchBar >
      <Outlet/>
    </SearchBar>
    <>Create new board</>
</>  
)
}

export default Home