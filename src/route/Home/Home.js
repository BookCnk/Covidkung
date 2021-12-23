import React from 'react'
import { faBookDead, faHeartbeat, faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect,useState } from 'react/cjs/react.development';
import style from './Home.module.css'

const axios = require('axios');

export default function Home() {

    const [newUser, setNewUser] = useState(0)
    const [newTotalUser, setNewTotalUser] = useState(0)
    const [newUserDearth, setNewUserDearth] = useState(0)
    const [newTotalUserDearth, setTotalNewUserDearth] = useState(0)
    const [newUserHeal, setNewUserHeal] = useState(0)
    const [newTotalUserHeal, setTotalNewUserHeal] = useState(0)
    const [update, setUpdate] = useState('null')

    useEffect(() => {
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
        .then(function (response) {
          setNewUser(numberWithCommas(response.data[0].new_case))
          setNewTotalUser(numberWithCommas(response.data[0].total_case))
          setNewUserDearth(numberWithCommas(response.data[0].new_death))
          setTotalNewUserDearth(numberWithCommas(response.data[0].total_death))
          setNewUserHeal(numberWithCommas(response.data[0].new_recovered))
          setTotalNewUserHeal(numberWithCommas(response.data[0].total_recovered))
          setUpdate(response.data[0].update_date)
        })
        .catch(function (error) {
          console.log(error);
        })
    },[])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={style.container}>
            <h1>Dashboard</h1>
            <span className={style.date}>(อัพเดทล่าสุด {update})</span>
            <div className={style.grids}>
                <div className={style.grid}
                     style={{backgroundColor:'#FF8433'}}>
                    <FontAwesomeIcon icon={faUserInjured} /> 
                    <div className={style.gridContent}>
                        ผู้ป่วยรายใหม่ <br/>
                        {newUser}
                    </div>
                </div>
                <div className={style.grid}
                     style={{backgroundColor:'#6C4A4A'}}>
                    <FontAwesomeIcon icon={faBookDead} /> 
                    <div className={style.gridContent}>
                        เสียชีวิตวันนี้ <br/>
                        {newUserDearth}  
                    </div>
                </div>
                <div className={style.grid}
                     style={{backgroundColor:'#77D970' , color:'#333333'}}>
                    <FontAwesomeIcon icon={faHeartbeat} /> 
                    <div className={style.gridContent}>
                        รักษาแล้ววันนี้ <br/>
                        {newUserHeal}  
                    </div>
                </div>
                <div className={style.grid}
                     style={{backgroundColor:'#FF8433'}}>
                    <FontAwesomeIcon icon={faUserInjured} /> 
                    <div className={style.gridContent}>
                        ผู้ป่วยสะสม <br/>
                        {newTotalUser}  
                    </div>
                </div>
                <div className={style.grid}
                     style={{backgroundColor:'#6C4A4A'}}>
                    <FontAwesomeIcon icon={faBookDead} /> 
                    <div className={style.gridContent}>
                        เสียชีวิตสะสม <br/>
                        {newTotalUserDearth}  
                    </div>
                </div>
                <div className={style.grid}
                     style={{backgroundColor:'#77D970' , color:'#333333'}}>
                    <FontAwesomeIcon icon={faHeartbeat} /> 
                    <div className={style.gridContent}>
                        รักษาสะสม <br/>
                        {newTotalUserHeal}  
                    </div>
                </div>
            </div>  
            <h1>Article</h1>
            <div className={style.articles}>
                <div className={style.article}
                     onClick={() => window.open('https://tdri.or.th/2021/06/covid-19-tight-situation-public-health-system/', '_blank')}>
                    <div className={style.articleBackground}    
                         style={{backgroundImage : `url(https://tdri.or.th/wp-content/uploads/2021/06/thumb-covid-new-370x194.jpg)`}}></div>
                    <div className={style.topic}>
                       เรายังทำอะไรเพิ่มเติมได้บ้างในสถานการณ์การระบาดที่เริ่มควบคุมได้ลำบากมากขึ้น ?
                    </div> 
                </div>

                <div className={style.article}
                     onClick={() => window.open('https://tdri.or.th/2021/07/lesson-learned-on-vaccine-procurement/', '_blank')}>
                    <div className={style.articleBackground}    
                         style={{backgroundImage : `url(https://tdri.or.th/wp-content/uploads/2021/07/thumb-vaccine-1-370x194.jpg)`}}></div>
                    <div className={style.topic}>
                        เราควรเรียนรู้อะไรจากการจัดซื้อวัคซีนของต่างประเทศ
                    </div> 
                </div>

                <div className={style.article}
                     onClick={() => window.open('https://tdri.or.th/2021/11/when-will-covid-be-endemic-in-thailand/', '_blank')}>
                    <div className={style.articleBackground}    
                         style={{backgroundImage : `url(https://tdri.or.th/wp-content/uploads/2021/11/covid-2-370x194.jpg)`}}></div>
                    <div className={style.topic}>
                        COVID-19 ในประเทศไทยใกล้จะเป็น “โรคประจำถิ่น” หรือยัง
                    </div> 
                </div>

                <div className={style.article}
                     onClick={() => window.open('https://tdri.or.th/2021/08/the-importance-of-data-in-the-fight-against-covid/', '_blank')}>
                    <div className={style.articleBackground}    
                         style={{backgroundImage : `url(https://tdri.or.th/wp-content/uploads/2021/08/thumb-data-covid-370x194.jpg)`}}></div>
                    <div className={style.topic}>
                        ความสำคัญของ ‘ข้อมูล’ ในช่วงโรคระบาด
                    </div> 
                </div>
            </div>
        </div>
    )
}
