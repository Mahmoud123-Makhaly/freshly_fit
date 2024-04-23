'use client';

import React from 'react';

import { Link } from '@navigation';
import { ImageWithFallback } from '@components';

interface FigureProps {
  href: string;
  text: string;
  alt?: string;
  imgSrc?: string;
  width: string;
  height: string;
}
const Figure = (props: FigureProps) => {
  const { href, text, imgSrc, alt } = props;
  return (
    <Link href={href}>
      <div className="position-relative square-ratio" style={{ backgroundImage: `url("${imgSrc}")` }}>
        <ImageWithFallback src={imgSrc ?? ''} alt={alt ?? text} width={0} height={0} className="d-none" />
        <p
          className="text-white position-absolute bottom-0 start-50 translate-middle-x font-16 fw-bold text-center"
          style={{ zIndex: '100' }}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

export default Figure;
