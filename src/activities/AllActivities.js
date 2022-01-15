import React, { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Activity } from '../activities';
import { callApi } from '../api';


const AllActivities = ({ userData, token }) => {
// console.log("Activities:", activities)
const [activities, setActivities] = useState([]);
const navigate = useNavigate();


const fetchAllActivities = async (token) => {
    const activities = await callApi({
        url: '/activities',
        token,
}); 
    return activities;
};
useEffect(async () => {
    if (activities.length === 0) {
        const fetchedActivities = await fetchAllActivities(token);
        console.log("Fetched Activities", fetchedActivities)
        setActivities(fetchedActivities);
    }
},[]);

return (
<>
<button className="LargeButton"><Link to="/">Home</Link></button>
<div></div>

<h2>Activities</h2>

<div className = "ActivityContainer"> {activities?.map((activity) => (<div key={activity.id}>
        <Activity activities={activities} activity={activity} userData={userData} />
        {<button> <Link to={`/edit_activity/${activity.id}`}>Edit Activity</Link></button>}
    </div>
                
))}
</div>
</>
);
};

export default AllActivities;