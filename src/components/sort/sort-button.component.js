



function SortButton({event}) {
 
console.log(event);

    return(
      <button className="btn sort-btn" onClick={event}>
        <i className="fa-solid fa-sort"></i>
      </button>
    )

}


export default SortButton;