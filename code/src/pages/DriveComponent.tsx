import React, { useState } from 'react';
import Spinner from '../components/spinner/Spinner';

interface DriveComponentProps {
    url: string;
}

const DriveComponent: React.FC<DriveComponentProps> = ({ url }) => {

    const [loading, setLoading] = useState(true);

    const handleIframeLoad = () => {

    };

    return (
        <>
            {loading && (
                <Spinner></Spinner>
            )}
            <div className="page-content">
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    onLoad={() => setLoading(false)}
                    style={{ border: 'none', display: loading ? 'none' : 'block' }}
                >
                </iframe>
            </div>
        </>
    );
};

export default DriveComponent;
