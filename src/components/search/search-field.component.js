


function SearchButton({search}) {
   console.log(search);

    return(
      <button className="btn search-btn" onClick={search}>
      <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    )

}

export default SearchButton;