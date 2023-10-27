import React from 'react'

export default function Logo({className, logo="logo-blue.png"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="object-center py-5"
             />
        </div>
    )
}
