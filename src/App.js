import React, { useState, useEffect }  from 'react';
import { useTable } from 'react-table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'  
import Places from './components/placesPageComponent/Places';

export default function App() {

  const [page, setPage] = useState(true);
  const [allPagesStore, allPagesDataFetcher] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndexOfPlaces, captureCurrentIndexOfPlaces] = useState(undefined);

  // using dummy data as API call exceeded the maximum attempts
   
  const data = React.useMemo(() =>
  [
   {
     "id": "1",
     "name": "Balzacs niagara on the lake",
     "website_url": "https://shop.balzacs.com/",
     "address": "675 Drive, Unit 4, Ancaster, ON L9G 4V5, CANADA",
     "logo_url": "https://torontostoreys.com/wp-content/uploads/2019/04/IMG_4857-1170x878.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "2",
     "name": "Balzacs Port delhouse",
     "website_url": "https://shop.balzacs.com/",
     "address": "9 Lockstreet, saint catherines, ON, CANADA",
     "logo_url": "https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1612459141755-X4MVHO66Z90EP9QI9HCU/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcwzM2vY4zcR8T4Jyx-ijnH3AX3fNmlFWTtLveLoXLwwuUl76mRIIOTkltMT5VW2q5/Restaurant-Marketing-Branding.png",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "3",
     "name": "Basil Box",
     "website_url": "http://www.thebasilbox.com/",
     "address": "100 City Centre Drive, Mississauga, ON L5B 2C9, CANADA",
     "logo_url": "https://i.pinimg.com/originals/0f/fb/a7/0ffba75349d7e147146cebbb9f32be0a.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "4",
     "name": "Balzacs at queen and spadina",
     "website_url": "https://shop.balzacs.com/",
     "address": "9 Lockstreet, saint catherines, ON, CANADA",
     "logo_url": "https://i.pinimg.com/originals/0f/fb/a7/0ffba75349d7e147146cebbb9f32be0a.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "5",
     "name": "Basil Box at Ryerson center",
     "website_url": "http://www.thebasilbox.com/",
     "address": "351 Yonge Street, Toronto, ON M5B 1S1, CANADA",
     "logo_url": "https://torontostoreys.com/wp-content/uploads/2019/04/IMG_4857-1170x878.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "6",
     "name": "Balzacs niagara on the lake",
     "website_url": "https://shop.balzacs.com/",
     "address": "675 Drive, Unit 4, Ancaster, ON L9G 4V5, CANADA",
     "logo_url": "https://i.pinimg.com/originals/0f/fb/a7/0ffba75349d7e147146cebbb9f32be0a.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "7",
     "name": "Basil Box",
     "website_url": "http://www.thebasilbox.com/",
     "address": "100 City Centre Drive, Mississauga, ON L5B 2C9, CANADA",
     "logo_url": "https://torontostoreys.com/wp-content/uploads/2019/04/IMG_4857-1170x878.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "8",
     "name": "Balzacs at queen and spadina",
     "website_url": "https://shop.balzacs.com/",
     "address": "9 Lockstreet, saint catherines, ON, CANADA",
     "logo_url": "https://i.pinimg.com/originals/0f/fb/a7/0ffba75349d7e147146cebbb9f32be0a.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "9",
     "name": "Basil Box",
     "website_url": "http://www.thebasilbox.com/",
     "address": "100 City Centre Drive, Mississauga, ON L5B 2C9, CANADA",
     "logo_url": "https://torontostoreys.com/wp-content/uploads/2019/04/IMG_4857-1170x878.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "10",
     "name": "Balzacs at queen and spadina",
     "website_url": "https://shop.balzacs.com/",
     "address": "9 Lockstreet, saint catherines, ON, CANADA",
     "logo_url": "https://i.pinimg.com/originals/0f/fb/a7/0ffba75349d7e147146cebbb9f32be0a.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   },
   {
     "id": "11",
     "name": "Basil Box at Ryerson center",
     "website_url": "http://www.thebasilbox.com/",
     "address": "351 Yonge Street, Toronto, ON M5B 1S1, CANADA",
     "logo_url": "https://torontostoreys.com/wp-content/uploads/2019/04/IMG_4857-1170x878.jpg",
     "hours": {
       "Monday": "07:00 AM - 07:00 PM",
       "Tuesday": "07:00 AM - 07:00 PM",
       "Wednesday": "07:00 AM - 07:00 PM",
       "Thursday": "07:00 AM - 07:00 PM",
       "Friday": "07:00 AM - 07:00 PM",
       "Saturday": "07:00 AM - 07:00 PM",
       "Sunday": "07:00 AM - 07:00 PM"
     }
   }
 ],
[]
)

const columns = React.useMemo(
  () => [
  {
  Header: 'Places page',
  columns: [
  {
    Header: 'Business ID',
    accessor: 'id',
  },
  {
    Header: 'Business Name',
    accessor: 'name',
  },
  {
    Header: 'Website',
    accessor: 'website_url',
    },
  {
    Header: 'Address',
    accessor: 'address',
},
  ],
  }
  ],
  []
 )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })


   // call made to api to fetch data
  useEffect(() => {
    fetch(
      `https://6025865136244d001797c552.mockapi.io/api/v1/Places`,
      {
        method: "GET",
        headers: new Headers({
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        allPagesDataFetcher(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [allPagesStore]);


  function openDetailedPlacePage(row, i) { 
      setPage(false);
      captureCurrentIndexOfPlaces(i);
  }

  // displaying information table dynamically with react-table 
  return (
    <div>
      {page && <div>

        <table {...getTableProps()}>
   <thead>
     {headerGroups.map(headerGroup => (
       <tr {...headerGroup.getHeaderGroupProps()}>
         {headerGroup.headers.map(column => (
           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
         ))}
       </tr>
     ))}
   </thead>
   <tbody {...getTableBodyProps()}>
     {rows.map((row, i) => {
       prepareRow(row)
       return (
         <tr key={i} {...row.getRowProps()}>
           {row.cells.map(cell => {
             let extractedKey = cell.getCellProps();

             return(
              <>
              <td {...cell.getCellProps()}>
               {extractedKey['key'].includes("name") ? 
                  <span onClick={()=>openDetailedPlacePage(row, i)}>
                    <Router>  
                    <NavLink to={`/Places/${i}`} exact activeStyle={  
             {color:'blue'}  
                     }>{cell.render('Cell')}</NavLink>  
              <Route exact path={`/Places/${i}`}/> 
              </Router>  
                  </span>
                  : 
                    cell.render('Cell')}
               </td>
               </>
             )
           })}
         </tr>
       )
     })}
   </tbody>
 </table>
      </div>}
      {!page && <Places value={currentIndexOfPlaces && data[currentIndexOfPlaces]}/>}
    </div>
  );
}
