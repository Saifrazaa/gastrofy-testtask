import React from 'react';

const Media = (val) => {
    switch (val) {
        case 'handhelds':
            return '@media only screen and (max-width: 320px)';
        case 'mobileportrait':
            return '@media only screen and (max-width: 480px)';
        case 'mobile':
            return '@media only screen and (max-width: 767px)';
        case 'tablet':
            return '@media only screen and (max-width: 768px)';
        case 'tabletlandscape':
            return '@media only screen and (max-width: 991px)';
        case 'desktopscreens':
            return '@media only screen (min-width: 991px) and (max-width: 1199px)';
        case 'xlscreens':
            return '@media only screen and (min-width: 1200px)';
        case 'laptops':
            return `@media only screen and (max-width: 1440px)`;
        case 'lpscreens':
            return '@media only screen and (min-width: 1366px) and (max-width: 1680px)';
        case 'lpscreensbig':
            return '@media only screen and (min-width: 1400px) and (max-width: 1680px)';
        case 'large':
            return '@media only screen and (min-width: 1681px)';
        case 'extralarge':
            return '@media only screen and (min-width: 3200px)';
        case 'macbook':
            return '@media screen  and (min-device-width: 1600px)  and (max-device-width: 1920px)  and (-webkit-min-device-pixel-ratio: 2)';
        default:
            return '';
    }
};

export default Media;
