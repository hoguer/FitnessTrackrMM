import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../api';
import { MyRoutine } from '.';

const MyRoutines = ({token, userData}) => {
    const [myRoutines, setMyRoutines] = useState([]);

    const fetchMyRoutines = async (username, token) => {
        const myRoutines = await callApi({
            url: `/users/${username}/routines`,
            method: 'GET',
            token
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

    return <>
        <button className="LargeButton">
            <Link to="/">Home</Link>
        </button>
        <h2>My Routines</h2>

        <div id = "RoutineContainer"> 
            {myRoutines.map((routine) => {
                return (<div key={routine.id}>
                    <MyRoutine routine={routine} />
                    <button>
                        <Link to={`/edit_routine/${routine.id}`}>Edit Routine</Link>
                    </button>
                </div>)
            })}
        </div>
    </>;
};


export default MyRoutines;