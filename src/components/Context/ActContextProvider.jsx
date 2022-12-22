import ActContext from "./ActContext"
import { useState } from "react"
import Activity from "../../model/Activity"

export default function ActivitesContextProvider({ children }) {
    const [activities, setActivities] = useState([])
    const [editActivity, setEditActivity] = useState({})
    const [shouldShowEditor, setShouldShowEditor] = useState(false)
    const [deleteCard, setDeleteCard] = useState('')

    const removeItem = (id) => {
        deleteActivity(id)
        .then(() => fetchActivities()
        .catch((err) => {
            console.error('error:', err)
        })
        )
    }

    const createActivity = (e, activity) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log('activites', activities)
        const raw = JSON.stringify({
            ...activity
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`/activities/create`, requestOptions)
            .then((res) => res.json())
            .then((res) => fetchActivities())
            .catch((err) => {
                console.error('error:', err)
            })
    }

    const deleteActivity = async (_id) => {
        try {
          const response = await fetch(`/activities/${_id}/delete`, {
            method: 'DELETE',
          });
          const data = await response.json();
          console.log('data delete',data)
        } catch (error) {
          // handle errors here
        }
      };


    // const sendActivity = (e,activities) => {
    //     e.preventDefault()
    //     fetch(`/activityId`, {
    //         method: 'PUT',
    //         body: JSON.stringify( {...activities} ),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((res) => { console.log('success:', res) })
    //         .catch((err) => {
    //             console.error('error:', err)
    //         })
    // }

    // const fetchActivities = async () => {
    //     fetch(`/activities`)
    //     .then((res) => res.json())
    //         .then((res) => { console.log('success:', res.map((a) => new Activity(a))) })
    //         .catch((err) => {
    //             console.error('error:', err)
    //         })
    // }


    const fetchActivities = async () => {
        try {
            const result = await fetch(`/activities`)
            const data = await result.json()
            console.log(data)
            // const activites = data.activites.map((a) => new Activity(a))
            const { activities } = data
            console.log('activities', activities)
            setActivities(activities)
        } catch (error) {
            console.error('error')
        }
    }


    // const submitButton = () => {
    //     const [response, setResponse] = useState(null);

    //     async function handleClick() {
    //       try {
    //         const data = { /* data to send to the backend */ };
    //         const response = await fetch('/api/endpoint', {
    //           method: 'POST',
    //           body: JSON.stringify(data),
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         });
    //         const responseData = await response.json();
    //         setResponse(responseData);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    // }

    const onUpdateActivity = (e) => {
        e.preventDefault()
        fetch(`/activities/${editActivity._id}/update`, {
            method: 'PUT',
            body: JSON.stringify({ ...editActivity }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => fetchActivities())
            .catch((err) => {
                console.error('error:', err)
            })
    }

    return (<ActContext.Provider value={{
        activities,
        setActivities,
        editActivity,
        setEditActivity,
        onUpdateActivity,
        shouldShowEditor,
        setShouldShowEditor,
        deleteCard,
        setDeleteCard,
        removeItem,
        fetchActivities,
        createActivity,
        deleteActivity,
        // sendActivity,
    }}
    >
        {children}
    </ActContext.Provider>)
}