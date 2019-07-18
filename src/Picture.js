import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Picture = () => {
    const [picUrl, setPicUrl] = useState('');

    useEffect(() => {
        async function fetchAPI() {
            const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=0nKUDokVcgYZoO5IErS9haXg4L4iMORNEcvOM9Sw');
            setPicUrl(res.data.url);
        }
        fetchAPI();
    }, []);

    return (
        <div>
            <img
                src={picUrl}
                alt='Nasa astronomy pic of the day'
                style={{ "width": "100%" }} />
        </div>
    );
}
export default Picture;
