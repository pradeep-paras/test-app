import React, { useEffect } from 'react';

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// swiper pagination
import './MySwiperComponent.css';

// import dashboard css file
import dashboard_styles from '../stylecss/dashboard.module.css';

// import images
import product1 from '../images/image/photo1.avif';
import product2 from '../images/image/photo2.avif';
import product3 from '../images/image/photo3.avif';
import product4 from '../images/image/photo4.avif';

const ProductInfo = (props) => {

    useEffect(() => {
      // debugger
      console.log(props)
    }, [])

    const products = [product1, product2, product3, product4, product2, product3, product4]

    return(
      <div className={dashboard_styles.main_div}>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          breakpoints={{
            320: {
              slidesPerView: 0.7,
              spaceBetween: 10,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.6,
              spaceBetween: 10,
            },
            770: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            950: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            980: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            1140: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div /*className={styles.main}*/>
            <div className={dashboard_styles.product_box}>
              {props.products.length === 0 && <h4>No Products found</h4>}
              {props.products.length > 0 && props.products.map(product => {
                return(
                  <SwiperSlide>
                    <div className={dashboard_styles.image_container} style={{ position: 'relative'}}>
                      <img className={dashboard_styles.product} src={product.image_url} />
                      <div className={dashboard_styles.title_box}>
                        <div className={dashboard_styles.title}>{product.title}</div>
                        <p className={dashboard_styles.description}>{product.content}</p>
                      </div>
                    </div>
                  </SwiperSlide>
              );
            }
              )}
            </div>
          </div>
        </Swiper>
      </div>
    );
}

export default ProductInfo;
