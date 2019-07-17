import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Picture = () => {
    const [picUrl, setPicUrl] = useState('');
    useEffect(() => {
        async function fetchAPI() {
            const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=0nKUDokVcgYZoO5IErS9haXg4L4iMORNEcvOM9Sw');
            setPicUrl(res.data.url);
            console.log(res.data.url);
        }
        fetchAPI();
    }, []);

    return (
        <div>
            <iframe
                title='video'
                width={'320'}
                height={'240'}
                src={picUrl}
                frameBorder="0"
                allow={'accelerometer autoplay encrypted-media gyroscope picture-in-picture'}
                allowFullScreen >
            </iframe>
        </div>
    )
}

export default Picture;
