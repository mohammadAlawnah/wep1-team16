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
        console.log(Group)

    }

const groups = [
    {
        title: 'All in the Mind',
        backgroundImage: './img/eventsPageImg/c.jpg',
        logo: './img/eventsPageImg/d.jpg',
        type: 'private',
        members: '32k',
        postsPerDay: '20',
        avatars: ['./img/eventsPageImg/A1.jpg', './img/eventsPageImg/a11.jpg', './img/eventsPageImg/a111.jpg', './img/eventsPageImg/a1111.jpg', './img/eventsPageImg/023.jpg'],
    },
    {
        title: 'Beauty queens',
        backgroundImage: './img/eventsPageImg/c11.jpg',
        logo: './img/eventsPageImg/f.jpg',
        type: 'public',
        members: '23k',
        postsPerDay: '12',
        avatars: ['./img/eventsPageImg/b1.jpg', './img/eventsPageImg/b2.jpg', './img/eventsPageImg/b3.jpg', './img/eventsPageImg/113.jpg'],
    },
    {
        title: 'Eternal triangle',
        backgroundImage: './img/eventsPageImg/c3.jpg',
        logo: './img/eventsPageImg/m.jpg',
        type: 'public',
        members: '45k',
        postsPerDay: '16',
        avatars: ['./img/eventsPageImg/c1.jpg', './img/eventsPageImg/c2.jpg', './img/eventsPageImg/012.jpg'],
    },
    ];
return (
    <div>
        <div className="container mt-5">
            <h2 className="h2-card">Explore Groups</h2>
            <div className="row mt-5">
                            {/* 
            {Group.map((group, index) => (
                <GroupCard key={index} {...group} />
            ))}
            */}
                {groups.map((group, index) => (
                    <GroupCard key={index} {...group} />
                ))}
            </div>
        </div>
    </div>
);
}

export default ExploreGroups;
