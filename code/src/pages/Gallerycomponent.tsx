import React, { useState, useEffect } from 'react';
import Spinner from '../components/spinner/Spinner';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryComponentProps {
    url: string;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ url }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        {
                            src: "",
                            alt: "image 1",
                            width: 800,
                            height: 600,
                            srcSet: [
                                { src: "https://huelvabuenasnoticias.com/wp-content/uploads/2013/07/DEPORTES-CAMPUS-RAMIRO-AMARELLE-FOTO-FAMLIA.jpg", width: 320, height: 213 },
                            ],
                        },
                    ]}
                />
            )}
        </>
    );
};

export default GalleryComponent;
