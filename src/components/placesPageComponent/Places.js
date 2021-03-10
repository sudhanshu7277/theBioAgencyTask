import React from 'react';
 
function Places({value}) {


  // to emplement back button functionality, NOT IMPLEMENTED
  function backActionOnClick(e) {
    e.preventDefault();
  }

  // Individual place information displayed
  return (
    <div>
      <span>
        <button onClick={(event) => backActionOnClick(event)}>
          Go back to places
        </button>
      </span>
      <div style={{display: 'flex', marginTop: '20px', marginLeft: '20px'}}>
        <div style={{width: '30%', display: 'inline-table'}}>
            <img style={{width: '300px', height: '300px', top: '0px'}} src={value['logo_url'] ? value['logo_url'] : null} alt={value['logo_url']}/>
        </div>
        <div style={{width: '70%', width: '300px', height: '300px', display: 'inline-table'}}>
          <ul>
            <li>
              Business name: {value['name']}
            </li>
            <li>
              Address: {value['address']}
            </li>
            <li>
              Website: {value['website_url']}
            </li>
              Hours:  {
          Object.entries(value['hours']).map(([key,value],i)=> {
            return (
                <li key={i}>{[key]} : {value}</li>
              )
          })
        }
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Places;