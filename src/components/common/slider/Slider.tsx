'use client';

import React, { useState } from 'react';
import { ImageWithFallback } from '@components';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import SwiperCore from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import noImg from '@assets/images/product/prodetailsnoimg.svg';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const Slider = ({ images, alt }: { images?: any; alt?: string }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [initStatus, setInitStatus] = useState<SwiperClass | null>(null);
  return (
    <div className="product-img-slider sticky-side-div">
      <Swiper
        onInit={setInitStatus}
        navigation={true}
        centeredSlides={true}
        lazyPreloadPrevNext={images?.length ?? 0}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="swiper product-thumbnail-slider "
      >
        <div className="swiper-wrapper text-center">
          {images?.length > 0 ? (
            images?.map((image: string | StaticImport, index: React.Key | null | undefined) => (
              <SwiperSlide key={index} style={{ position: 'relative', width: '500px', height: '400px' }}>
                <ImageWithFallback
                  src={image}
                  alt={alt ?? 'freshly-fit'}
                  loading="lazy"
                  fill={true}
                  style={{ objectFit: 'cover', borderRadius: '6px' }}
                  fallbackSrc={noImg}
                />
              </SwiperSlide>
            ))
          ) : (
            <ImageWithFallback
              className="flex-shrink-0 me-3 avatar-sm "
              src={noImg}
              width={500}
              height={500}
              alt={alt ?? 'freshly-fit'}
              loading="lazy"
              sizes="100vw"
              style={{ height: 'auto' }}
              fallbackSrc={noImg}
            />
          )}
        </div>
      </Swiper>

      {initStatus && (
        <div className="product-nav-slider mt-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={false}
            watchSlidesProgress={true}
            spaceBetween={10}
            className="swiper product-nav-slider overflow-hidden"
          >
            <div className="swiper-wrapper">
              {images?.map((x: string | StaticImport, index: React.Key | null | undefined) => (
                <SwiperSlide key={index} style={{ position: 'relative', width: '150px', height: '100px' }}>
                  <ImageWithFallback
                    src={x}
                    alt={alt ?? 'freshly-fit'}
                    loading="lazy"
                    fill={true}
                    style={{ objectFit: 'cover', borderRadius: '6px' }}
                    fallbackSrc={noImg}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Slider;
