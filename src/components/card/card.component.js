
const Cards = ({data}) =>{
  return (   
    <main>
      <div className="all-profiles">
        {data.map(({name,email,number,image,id},ind) => {
          return( 
          <section className="card-container" key={ind}>
                <img src={image} alt="img" className="img"/>
                <div className="pro">
                  <h1 className="name">{name}</h1>
                  <h2 className="email">{email}</h2>
                  <h2 className="phone-no">{number}</h2>
                  <h2 className="id">{id}</h2>

                </div>
          </section>
          );
        })}
      </div>
    </main>
  );
};

export default Cards;