import React from 'react'

export default function MobileLogo({className, logo="LatestMobileNavLogo.png"}) {
    return (
        <div className={className}>
            <img
                 src={require(`../assets/images/${logo}`)}
                 alt="gpgp"
                 className="h-[100%] w-[full] lg:w-[90px] xxl:w-[100px] xxxl:w-[110px] xxxxl:w-[130px]"
             />
        </div>
    )
}
