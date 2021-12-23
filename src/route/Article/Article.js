import React from 'react'
import style from './../Home/Home.module.css'

export default function Article() {
    return (
        <div className={style.container}>
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
