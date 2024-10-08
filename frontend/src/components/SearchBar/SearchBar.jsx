import React ,
{ useState } 
from 'react';
import './SearchBar.css';

// import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

const SearchBar = (
    // {onSearch}
    ) => {
    const [query, setQuery] = useState(''); 

    //  // зміни в інпуті
    //  const onChangeInput = (event) => {
    //     setQuery(event.target.value.toLowerCase().trim())
    // }; 

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted');
console.log('query', query)
    //     // повідомлення
    //     if (!query) {
    //         // Notify.info('Enter your request, please!', paramsForNotify);
    //         return;
    //     }
    //     //фун-я onSubmit прийшла з App через пропси
    //     onSearch(query);

    //     //очистка рядка пошука
        setQuery('');
        console.log('query2', query)
    };  
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
        <input
            className="search-input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Enter a board ID here..."
        />
        <button className="search-button" type="submit">Search</button>
    </form>

//     <SearchForm 
//     onSubmit={handleSubmit}
//     >
//     <SearchInput
//     //  value = {query}
//     //  onChange = {onChangeInput}
//      type="text"
//      name="query"
//      autoComplete="off"
//      autoFocus
//      placeholder="Enter a board ID here..."
//    />
//    <SearchButton  type="submit"> Search
//         {/* <SlMagnifier /> */}
//     </SearchButton>
// </SearchForm>
  )
}

export default SearchBar