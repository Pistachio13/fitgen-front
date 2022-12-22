import React, { useState, useEffect } from "react";
import { useContext, } from "react";
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import ActContext from "../Context/ActContext";

const CardInfo = (props) => {
    const { id = '-1', activityName = 'Choose your activity', startDate = '', description = '', _id = '' } = props

    //TODO: create activity class to replace props when set editActivity
    const { setEditActivity, setShouldShowEditor, removeItem } = useContext(ActContext)
    const [isTimerActive, setIsTimerActive] = useState(false)
    const [timerID, setTimerID] = useState(-1)
    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)

    const toggle = () => {
        setIsTimerActive(!isTimerActive)
    }

    const getDuration = () => (endTime - startTime)
    const getDurationInSeconds = () => Math.floor(getDuration() / 1000)

    useEffect(() => {
        if (isTimerActive) {
            setStartTime(Date.now())
            setEndTime(Date.now())
            setTimerID(setInterval(() => {
                setEndTime(Date.now())
                console.log('timeInterval', endTime)
            }, 1000))
        } else {
            clearInterval(timerID)
        }

        return () => {
            clearInterval(timerID)
        }
    }, [isTimerActive])


    return (
        <div className="mini-card">
            <div className="card">
                <h2>{activityName}</h2>
                <ActivityIcon activityName={activityName || ''} />
                <div className="start-end">
                    <div className="start">
                        <p>Start</p>
                        <p className="start-exercise">{new Intl.DateTimeFormat('en-EN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                            timeZone: 'Asia/Bangkok'
                        }).format(new Date(startDate))}</p>
                    </div>

                    <div className="square"></div>
                    <h3 className="getDuration">{getDurationInSeconds() + ' sec'}</h3>
                </div>
                <div className="square"></div>
                <div className='description'>
                    <p className="info">Description</p>
                    <p>{description}</p>
                </div>


                <div className="edit">
                    <button className="EandD" onClick={() => {
                        const shouldDelete = window.confirm('Do you want to delete this activity?') === true
                        if (shouldDelete) removeItem(_id)
                    }}>Delete</button>
                    <button className="EandD" onClick={(e) => {
                        setEditActivity({ _id, id, activityName, startDate, description })
                        setShouldShowEditor(true)
                    }}>Edit</button>

                    <button className={"start" + (isTimerActive ? 'toggle--Done' : '')}
                        onClick={toggle} >
                        {isTimerActive ? 'Done' : 'Start'}


                    </button>
                </div>
            </div>

        </div>
    )
}

export default CardInfo;