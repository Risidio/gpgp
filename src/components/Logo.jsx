import React from 'react'


export default function Logo({className, logo="image.jpg"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="object-center w-[67px] h-[67px] xl:w-[88px] xl:h-[49px]"
             />
        </div>
    )
}
