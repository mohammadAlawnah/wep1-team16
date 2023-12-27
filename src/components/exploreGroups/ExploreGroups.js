import React, { useEffect, useState } from 'react'
import './ExploreGroups.css';
import GroupCard from'./GroupCard'; 
import {getData} from '../../readData'

function ExploreGroups() {

    const [Group,setGroup] = useState([]);


    useEffect(()=>{
        getGroup();
    },[])

    
    const getGroup = async ()=>{
        const  response = await getData('Group') 
        setGroup(response);

    }
    
return (
    <>
        <div className="container mt-5">
            <h2 className="h2-card">Explore Groups</h2>
            <div className="row mt-5">

            {Group.map((group, index) => {
                const Images = [
                    ['./img/eventsPageImg/A1.jpg', './img/eventsPageImg/a11.jpg', './img/eventsPageImg/a111.jpg', './img/eventsPageImg/a1111.jpg', './img/eventsPageImg/023.jpg'],
                    ['./img/eventsPageImg/b1.jpg', './img/eventsPageImg/b2.jpg', './img/eventsPageImg/b3.jpg', './img/eventsPageImg/113.jpg'],
                    ['./img/eventsPageImg/c1.jpg', './img/eventsPageImg/c2.jpg', './img/eventsPageImg/012.jpg'],
                ];

                return <GroupCard key={index} {...group} Images={Images[index]} />;
            })}

            </div>
        </div>
    </>
);
}

export default ExploreGroups;
