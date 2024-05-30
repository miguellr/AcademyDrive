// src/pages/DrivePDF.js
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const DrivePDF = () => {
    return (
        <div className="page-content">
            <iframe
                src="https://drive.google.com/file/d/1J-nkg4Kv6AGVOZqrw4nlhXKh3NFX0WnH/preview"
                width="100%"
            ></iframe>
        </div>
    );
};

export default DrivePDF;
