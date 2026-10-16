import React from 'react'
import star from '../assets/images/star.svg';

const Marquee = () => {
    return (
        <>
 <div className='overflow-hidden bg-white pb-28 text-black lg:pb-44'>
    {/* row 1 */}
<div className='overflow-hidden whitespace-nowrap text-6xl font-heading font-semibold leading-none tracking-tight lg:text-[7vw]'>
        <span className='marquee-track animate-marquee mx-8 flex items-center gap-4 lg:gap-8'>
            CREATE <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            INSPIRE <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            CREATE <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star1 w-[7vw]' />
            INSPIRE <img src={star} alt="" className='marquee-star1 w-[7vw]' />
        </span>
    </div>
{/* row 2 */}

<div className='overflow-hidden whitespace-nowrap text-6xl font-heading font-semibold leading-none tracking-tight lg:text-[7vw]'>
        <span className='marquee-track animate-marquee-reverse mx-8 flex items-center gap-4 lg:gap-8'>
            CREATE <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            INSPIRE <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            CREATE <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            DESIGN <img src={star} alt="" className='marquee-star2 w-[7vw]' />
            INSPIRE <img src={star} alt="" className='marquee-star2 w-[7vw]' />
        </span>
    </div>

</div>

        </>
    )
}

export default Marquee
