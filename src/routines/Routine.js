import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { callApi } from '../api';

const Routine = ({routine, routines, token, userData, isLoggedIn}) => {
    const { routineId } = useParams();
    const navigate = useNavigate();
    if (routines.length === 0) return null;
    let routineToRender;
    if (routine) {
        routineToRender = routine;
    } else {
        routineToRender = routines.find((routine) => routineId === routine.id);
}

const onDelete = async (event) => {
    event.preventDefault();
    const data = await callApi({
        url: `/routines/${routineToRender.id}`,
        method: 'DELETE',
        token,
});
        
navigate('/routines');
window.location.reload()
}
return ( 
<>
        
{routineToRender.username
? 
<div className="Routine-text">Submitted by:{routineToRender.username }</div>
:
null}

<div className="Routine-text">Routine Name:{routineToRender.name}</div>
<div className="Routine-text">Goal:{routineToRender.goal}</div>
<div className="Routine-text">CreatorName:{routineToRender.creatorName}</div>
<div className="Routine-text">Public:{routineToRender.isPublic ? 'Yes' : 'No'}</div>
{!routine ? <Link to="/routines">Back to Routines</Link> : null}

{/* {isLoggedIn ? <Link to="/add_activitytoroutine"> Add Activity to Routine </Link> : null } */}

{/* {userData.id === routineToRender.id? <> <button><Link to={`AllRoutines/${routineId}/AllActivities`}> Add Activity to Routine </Link></button>
</> : null } */}

{/* ^ these dont work yet v */}

{/* {routineToRender.id === userData.id
? 
<>
<button><Link to={`AllRoutines/${routine.id}/AllActivities`}>Add Activity To Routine</Link>
</button>
<button><Link to={"/EditRout/" + routineToRender.id}>Edit Routine</Link>
</button>
<button onClick={onDelete}>Delete Routine</button> 
</>
:
null        
}  */}

{routine.activities?.map((activity) => {
  return  (
<>
    <div className="Activity-text">Activity:{activity.name}</div>
    <div className="Activity-text">Activity Id: {activity.id}</div>
    <div className="Activity-text">Description: {activity.description}</div>
    <div className="Activity-text">Duration: {activity.duration}</div>
    <div className="Activity-text">Count: {activity.count}</div>
    <div className="Activity-text">Routine Activity:{activity.routineActivityId}</div>
    <div className="Activity-text">RoutineId: {activity.routineId}</div>
</>
)
})}
</>       
);
};

export default Routine;