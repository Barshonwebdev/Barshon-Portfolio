import React from 'react';

const EachSkill = ({ name, children}) => {
    return (
        <div className='zoom w-24 space-y-2 flex flex-col justify-center items-center rounded-lg h-24 bg-stone-900 text-white'>
            <div className=''>{children}</div>
            <h5 className='text-sm'>{name}</h5>
        </div>
    );
};

export default EachSkill;