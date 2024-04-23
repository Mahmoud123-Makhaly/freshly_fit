'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import noImg from '@assets/images/product/noimg.svg';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc ?? noImg}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc ?? noImg);
      }}
    />
  );
};

export default ImageWithFallback;
