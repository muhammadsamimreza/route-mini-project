import React from 'react';
import { PacmanLoader} from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center min-h-[calc(100vh-310px)] items-center'>
            <PacmanLoader/>
        </div>
    );
};

export default Loading;