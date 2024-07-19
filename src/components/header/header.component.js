import SortButton from "../sort/sort-button.component";
import '../../assets/styles/index.style.css'
import SearchButton from "../search/search-field.component";
const Header = ({event,search}) =>{
console.log(event);
  return ( 
    <>
    <div>
        <h1 className="nav">Profiles card</h1>
      <div className="search-container">
        <div className="search-align">
        <input type="text" className="input" placeholder="Type your search..." />
        <SearchButton search={search}/>
        </div>
        <SortButton event={event} />
      </div>
      </div>
    </>
    );
  };


export default Header;

