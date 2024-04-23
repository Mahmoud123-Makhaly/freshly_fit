import React from 'react';
import { PlaceholderValue, StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ImageWithFallback } from '@components';

interface ImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  ratio: 'square' | 'standard' | 'classic' | 'cinemascope';
  priority?: boolean | undefined;
  placeholder?: PlaceholderValue | undefined;
  design?: string | undefined;
}
const ImageMaker = (props: ImageProps) => {
  const { src, alt, width, height, fill, ratio, design, priority, placeholder } = props;
  return (
    <div className={`${ratio}-ratio ${design}`} style={{ backgroundImage: `url(${src})` }}>
      <ImageWithFallback className="d-none" src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ImageMaker;
