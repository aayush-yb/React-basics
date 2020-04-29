import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../Components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creatorId: 'u1'
    },
    {
        id: 'p2',
        title: 'New Empire State Building',
        description: 'One of the most famous skyscrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creatorId: 'u2'
    }
];

const UserPlaces = () => { 
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => (
        place.creatorId === userId
    ));
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;