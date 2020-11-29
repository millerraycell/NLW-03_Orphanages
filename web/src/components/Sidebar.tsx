import React from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import mapMarkerImage from '../images/map-marker.svg'
import "../styles/components/styles.css"

export default function Sidebar(){
    const {goBack} = useHistory();

    return(
        <aside className="app-sidebar">
            <img src={mapMarkerImage} alt="Happy"/>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF"/>
                </button>
            </footer>
        </aside>
    );
}