import React , {useEffect} from 'react'
import style from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faChartPie,faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
const queryString = require('query-string')

export default function Navbar() {
    const parsed = queryString.parse(window.location.search)

    useEffect(() => {
    
    },[])

    return (
        <div className={style.container}>
            <div className={style.head}>
                Covid-19 Tracker
            </div>
            <div className={(parsed.page == 'home' || !parsed.page) ? style.linkActive : style.link}
                 onClick={() => window.location.href = '/?page=home'}>
                <FontAwesomeIcon icon={faHome} /> 
                <div className={style.linkContent}>Dashboard</div>
            </div>
            <div className={parsed.page == 'province' ? style.linkActive : style.link}
                 onClick={() => window.location.href = '/?page=province'}>
                <FontAwesomeIcon icon={faChartPie} /> 
                <div className={style.linkContent}>Province</div>
            </div>
            <div className={parsed.page == 'article' ? style.linkActive : style.link}
                 onClick={() => window.location.href = '/?page=article'}>
                <FontAwesomeIcon icon={faNewspaper} /> 
                <div className={style.linkContent}>Article</div>
            </div>
            <div className={parsed.page == 'profile' ? style.linkActive : style.link}
                 onClick={() => window.open('https://www.instagram.com/book_cnk_/', '_blank')}>
                <FontAwesomeIcon icon={faUser} /> 
                <div className={style.linkContent}>Organizer</div>
            </div>
        </div>
    )
}
