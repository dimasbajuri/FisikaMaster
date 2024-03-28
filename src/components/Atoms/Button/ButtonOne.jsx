import React from 'react'

const ButtonOne = (props) => {
    const {children, type='button'} = props;

    return (
        <div>
            <button className='px-4 py-1 bg-yellow-500 rounded text-lg font-jost mt-5 font-semibold hover:text-white transition-all duration-200' type={type}>{children}</button>
        </div>
    )
}

export default ButtonOne