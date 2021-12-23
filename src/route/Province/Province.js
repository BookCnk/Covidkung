import React , {useState , useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import style from './Province.module.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const axios = require('axios');

export default function SelectSearchTopReverse() {

  const [update, setUpdate] = useState('null')

  const [list, setList] = useState([])
  const [columns, setColumns] = useState([
    {
      label: 'จังหวัด',
      field: 'province',
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'province',
      },
    },
    {
      label: 'ติดเชื้อรายใหม่',
      field: 'new_case',
    },
    {
      label: 'ติดเชื้อสะสม',
      field: 'total_case',
    },
    {
      label: 'เสียชีวิตวันนี้',
      field: 'new_death',
      sort: 'new_death',
    },
    {
      label: 'เสียชีวิตสะสม',
      field: 'total_death',
    }
  ])

  useEffect(() => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
    .then(function (response) {
        setList(response.data);
        setUpdate(response.data[0].update_date)
    })
    .catch(function (error) {
        console.log(error);
    })
  },[])

  return (
    <div className={style.container}>
      <h1>Province</h1>
      <span className={style.date}>(อัพเดทล่าสุด {update})</span>
      <MDBDataTableV5
          striped 
          bordered
          hover
          entriesOptions={[10]}
          entries={10}
          pagesAmount={4}
          data={{
              columns:columns,
              rows:list
          }}
          pagingTop
          searchTop
          searchBottom={false}
          barReverse
      />  
    </div>
  );
}

