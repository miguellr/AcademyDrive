// src/pages/GoogleForm.js
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const GoogleForm = () => {
    return (
        <div className="page-content">
            <iframe
                src="https://docs.google.com/forms/d/1Km4ReJa9bqSeZgkaDOg2-3CJHKTghgyHvDjsyb32y8w/viewform?usp=sharing"
                width="100%"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default GoogleForm;
