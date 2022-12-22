import React from "react";
import bike from '../image/bike.png'
import hiking from '../image/hiking.png'
import run from '../image/run.png'
import swimming from '../image/swimming.png'
import walk from '../image/walk.png'
import sad from '../image/sad.png'

const ActivityIcon = ({ activityName = 'default' }) => { 
    let imgSrc
    if(typeof activityName !== 'string') return <div></div>
    switch (activityName.toLowerCase()) {
        case 'bike':
            imgSrc = bike;
            break;
        case 'hiking':
            imgSrc = hiking;
            break;
        case 'run':
            imgSrc = run;
            break;
        case 'swimming':
            imgSrc = swimming;
            break;
        case 'walk':
            imgSrc = walk;
            break;
        default: imgSrc = sad;
    }
    return (
        <img src={imgSrc} width={96} height={96} style={{
            objectFit: 'contain'
        }} alt='activity-icons' />
    )
}
export default ActivityIcon

