import React from 'react'

export default function Logo({className, logo="NavLogo.png"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="object-center w-14 lg:w-[90px]  py-5"
             />
        </div>
    )
}
