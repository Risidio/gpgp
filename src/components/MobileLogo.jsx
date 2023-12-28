import React from 'react'

export default function MobileLogo({className, logo="image.png"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="object-center w-[80px] lg:w-[90px]"
             />
        </div>
    )
}
