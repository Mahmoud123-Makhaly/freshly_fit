import React from 'react';

import { ImageWithFallback } from '@components';
import { Link } from '@navigation';

interface ShareInSocialProps {
  title: string;
  images: Array<{ imgSrc: string; href: string }>;
}
const ShareInSocial = (props: ShareInSocialProps) => {
  const { title, images } = props;
  return (
    <div>
      <div>
        <h3 className="m-0">{title}</h3>
      </div>

      <div className="d-flex mb-3">
        {images?.map((item, index) => (
          <Link href={item.href} key={index} className="px-2">
            <ImageWithFallback src={item.imgSrc} alt={''} width={36} height={36} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShareInSocial;
