import { Swiper, SwiperSlide, } from 'swiper/react'
import { Navigation, Pagination, Autoplay ,} from 'swiper/modules'
import 'swiper/css'
import  {SlideImgs}  from './SlideImgs'
import styles from './SlideShow.module.css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'


function SlideShow(){


    return(
        <>
            <div className={styles.container}>
                <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                pagination
                navigation
                loop={true}
                autoplay= {{delay : 4000}}
                >
                    {SlideImgs.map((item, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Link to={item.path}>
                                    <img src={item.img} alt="imagem"  className={styles.img_slide}/>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                    )}
                    
                </Swiper>
            </div>
        </>
    )
}

export default SlideShow