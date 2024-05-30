import React from 'react';

interface DriveComponentProps {
    url: string;
}

const DriveComponent: React.FC<DriveComponentProps> = ({ url }) => {
    return (
        <div className="page-content">
            <iframe
                src={url}
                width="100%"
                height="100%"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default DriveComponent;
