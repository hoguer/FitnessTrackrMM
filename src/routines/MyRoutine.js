import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { callApi } from '../api';


const MyRoutine = ({myRoutine, myRoutines, token, userData, isLoggedIn}) => {
    // const { myRoutineId } = useParams();
    // const navigate = useNavigate();
    // if (myRoutines.length === 0) return null;
    // let myRoutineToRender;
    // if (myRoutine) {
    //     myRoutineToRender = myRoutine;
    // } else {
    //     myRoutineToRender = myRoutines.find((myRoutine) => myRoutineId === myRoutine.id);
    // }
    const myRoutineToRender= myRoutine

    // const onDelete = async (event) => {
    //     event.preventDefault();
    //     const data = await callApi({
    //         url: `/routines/${myRoutineToRender.id}`,
    //         method: 'DELETE',
    //         token,
    //     });
                
    //     navigate('/my_routines');
    //     window.location.reload()
    // }
return ( 
<>
    <div> {myRoutineToRender.creatorName}</div>
    {/* {myRoutineToRender.username
    ? 
    <div className="MyRoutine-text">Submitted by:{myRoutineToRender.username }</div>
    :
    null}

    <div className="MyRoutine-text">Routine Name:{myRoutineToRender.name}</div>
    <div className="MyRoutine-text">Goal:{myRoutineToRender.goal}</div>
    <div className="MyRoutine-text">CreatorName:{myRoutineToRender.creatorName}</div>
    <div className="MyRoutine-text">Public:{myRoutineToRender.isPublic ? 'Yes' : 'No'}</div>
    {!myRoutine ? <Link to="/routines">Back to Routines</Link> : null}

    {myRoutine.activities?.map((activity) => {
    return  (
    <>
        <div className="MyActivity-text">Activity:{activity.name}</div>
        <div className="MyActivity-text">Activity Id: {activity.id}</div>
        <div className="MyActivity-text">Description: {activity.description}</div>
        <div className="MyActivity-text">Duration: {activity.duration}</div>
        <div className="MyActivity-text">Count: {activity.count}</div>
        <div className="MyActivity-text">Routine Activity:{activity.routineActivityId}</div>
        <div className="MyActivity-text">RoutineId: {activity.routineId}</div>
    </>
    )
    })} */}
</>       
);
};

export default MyRoutine;