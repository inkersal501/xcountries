
function Countries({country}) {
 
  return (
    <div style={{width:"200px", border:"1px solid #ccc", borderRadius:"7px"}}> 
      <img src={country.flag} alt={country.name} style={{width:"100%",height:"125px"}}/>
      <p>{country.name}</p>
    </div>
  );
}

export default Countries;
