import React , {useEffect} from 'react'
import Navbar from './component/Navbar/Navbar';

import Home from './route/Home/Home';
import Article from './route/Article/Article';
import Province from './route/Province/Province';

const queryString = require('query-string')

function App() {
  const parsed = queryString.parse(window.location.search)

  useEffect(() => {  
    console.log(parsed)
  },[])

  return (
    <div className="containerr">
      <Navbar />
      {
        (parsed.page == 'home' || !parsed.page) && (
          <Home/>
        )
      }
      {
        (parsed.page == 'province') && (
          <Province/>
        )
      }
      {
        (parsed.page == 'article') && (
          <Article/>
        )
      }
    </div>
  );
}

export default App;
