import React from 'react';

const MyRoutine = ({routine}) => {
    return <>
        { routine.creatorName && <div className="MyRoutine-text">Submitted by:{ routine.creatorName }</div> }
        <div className="MyRoutine-text">Routine Name:{routine.name}</div>
        <div className="MyRoutine-text">Goal:{routine.goal}</div>
        <div className="MyRoutine-text">CreatorName:{routine.creatorName}</div>
        <div className="MyRoutine-text">Public:{routine.isPublic ? 'Yes' : 'No'}</div>
        {!routine && <Link to="/routines">Back to Routines</Link>}
        {routine.activities?.map((activity) => {
            return  (<>
                <div className="MyActivity-text">Activity:{activity.name}</div>
                <div className="MyActivity-text">Activity Id: {activity.id}</div>
                <div className="MyActivity-text">Description: {activity.description}</div>
                <div className="MyActivity-text">Duration: {activity.duration}</div>
                <div className="MyActivity-text">Count: {activity.count}</div>
                <div className="MyActivity-text">Routine Activity:{activity.routineActivityId}</div>
                <div className="MyActivity-text">RoutineId: {activity.routineId}</div>
            </>)
        })}
    </>
}

export default MyRoutine;