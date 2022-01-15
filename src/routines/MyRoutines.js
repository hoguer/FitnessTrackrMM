import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../api';
import {MyRoutine} from '../routines'

const MyRoutines = ({token, userData}) => {
    console.log(userData)
    const [myRoutines, setMyRoutines] = useState([]);

    const fetchMyRoutines = async (username, token) => {
        const myRoutines = await callApi({
            url: `/users/${username}/routines`,
            method: 'GET',
            token,
        });
        return myRoutines;
    };

    useEffect(async () => {
        if (userData && userData.username) {
            const fetchedMyRoutines = await fetchMyRoutines(userData.username, token);
            console.log("Fetched My Routines", fetchedMyRoutines)
            setMyRoutines(fetchedMyRoutines);
        }
    },[userData]);

    return (<>
        <button className="LargeButton">
            <Link to="/">Home</Link>
        </button>
        <div><h2>My Routines</h2></div>

        <div id = "RoutineContainer"> 
        {/* {myRoutines?.map((myRoutine) => (
            <div key={myRoutine.id}>
                <MyRoutine myRoutines={myRoutines} myRoutine={myRoutine} />
                {<button>
                    <Link to={`/edit_routine/${myRoutine.id}`}>Edit Routine</Link>
                </button>}
            </div>
                
        ))} */}
        
        {myRoutines.map((myRoutine) => {
            return <div key={myRoutine.id}>
                <MyRoutine myRoutines={myRoutines} myRoutine={myRoutine} />
                <button>
                    <Link to={`/edit_routine/${myRoutine.id}`}>Edit Routine</Link>
                </button>
            </div>
        })}
        </div>
    </>);
};


export default MyRoutines;