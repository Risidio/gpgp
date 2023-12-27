import React from 'react'


export default function Logo({className, logo="image.jpg"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="object-center w-[59px] h-[59px] md:w-[88px] md:h-[49px] py-[10px] md:py-[unset]"
             />
        </div>
    )
}
