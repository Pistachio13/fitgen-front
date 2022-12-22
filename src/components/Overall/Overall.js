import React from 'react';
import './Overall.css'
import The_FITGEN from '../image/The_FITGEN.png'
import Card from '../Card/Card';
import Schedule from '../Schedule/Schedule';
import { useState, useEffect, useContext } from 'react';
import Chart from 'react-apexcharts'
import BMI from '../BMI/BMI';
import Editor from '../Editor/Editor';
import ActContext from '../Context/ActContext';

const Overall = () => {
    const [shouldShowPopup, setShouldShowPopup] = useState(false)

    const [calBurn] = useState(1950)
    const [step] = useState(5314)
    const [activityCategory] = useState('Running')
    const [distance] = useState(2.5)
    const [average] = useState(5314)
    const {shouldShowEditor, fetchActivities } = useContext(ActContext)

    useEffect(() => { 
        console.log(shouldShowPopup)
    }, [shouldShowPopup])

    useEffect(() => { 
        console.log(fetchActivities)
        fetchActivities()
    }, [])

    useEffect(() => { 
        console.log(shouldShowPopup)
    }, [shouldShowPopup])


    return (
        <div>
            <div className='column'>
                <div className='left-row'>
                    <div className='week-card'>
                        <div className='health'>
                            <img src={The_FITGEN} alt='logo' /><span><h2 className='progress'>This week Progress</h2></span>
                        </div>

                        <div className='this-week'>
                        </div>

                        <div className='information'>
                            <div className='overall-info'>
                                <h2 className='info-activity'>{calBurn}</h2>
                                <p>cal.burn today</p>                             
                            </div>

                            <div className="square2"></div>

                            <div className='overall-info'>
                                <h2 className='info-activity'>{step}</h2>
                                <p>Total Hour</p>
                            </div>

                            <div className="square2"></div>

                            <div className='overall-info'>
                                <h2 className='info-activity'>{activityCategory}</h2>
                                <p>is your favorite activity</p>
                            </div>
                        </div>
                        <div className='rate'>
                            <div className='avg'>
                                <h1>{distance}</h1>
                                <p>Total distance(km)</p>
                            </div>

                            <div className='avg'>
                                <h1>{average} </h1>
                                <p>Avg Daily(km.)</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Chart*/}
                <div className='donut-chart'>
                    <React.Fragment>
                        <div className='inside-chart'>
                            <h2>Activity</h2>
                            <div className='container-fluid mt-3 mb-3' id='donut-chart'>
                                <Chart id="activity-chart"
                                    type='donut'
                                    width={450}
                                    height={350}
                                    series={[20, 67, 89, 34, 43]}
                                    
                                    

                                    options={{
                                        labels: ['Walking', 'Running', 'Swimming', 'Hiking', 'Cycling'],

                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    labels: {
                                                        show: true,
                                                        total: {
                                                            show: false,
                                                            showAlways: true,
                                                            fontSize: 30,
                                                            color: '#F48915'

                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        dataLabels: {
                                            //enabled:false,
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </React.Fragment>
                </div>
                {/*
            <div className='right-row'>
                <div className='first-card'>
                    <div className='header'>
                        <div className='topic'><h1>Activity</h1></div>

                        <div className='chart'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>

                            <div id='number'>{number}%</div>

                        </div>
                        <div className='graph-all'>
                            <a className='graph-button' href='/'>Check activity</a>
                        </div>
                    </div>
                </div>


            </div>
    */}
                <div className='third-card'>
                    <BMI />
                </div>
            </div>
            {shouldShowEditor && <Editor />}<Card title="headName" onAddPlanClick={() => { setShouldShowPopup(true) }} />
                {shouldShowPopup && <Schedule onCloseHandler={() => { setShouldShowPopup(false) }} />}
        </div>

    )
}

export default Overall;