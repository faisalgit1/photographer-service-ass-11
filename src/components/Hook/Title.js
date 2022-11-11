import React, { useEffect } from 'react';

export const Title = title => {
    useEffect(() => {
        document.title = `${title} - Stylish Photographer`;
    }, [title])
};

export default Title;