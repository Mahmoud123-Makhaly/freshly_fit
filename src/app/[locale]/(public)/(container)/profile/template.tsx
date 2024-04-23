'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { ImageWithFallback, VTabs } from '@components';

import profile from '@assets/images/icons/profile/person_black_24dp.svg';
import favorite from '@assets/images/icons/profile/favourite.svg';
import address from '@assets/images/icons/profile/addresses.svg';
import orders from '@assets/images/icons/profile/orders.svg';

export default function ProfileTemplate({ children }: { children: React.ReactNode }) {
  const t = useTranslate('COMP_PROFILE');

  return (
    <React.Fragment>
      <Row>
        <Col className="pt-4 pb-4">
          {/* <BreadCrumb
            title={t('BREAD_MAIN')}
            paths={[
              {
                title: t('BREAD_PROFILE'),
              },
            ]}
          /> */}
        </Col>
      </Row>

      <Row>
        <Col lg={2}>
          <VTabs
            tabs={[
              {
                title: t('ACCOUNT'),
                link: '/profile/account',
                icon: <ImageWithFallback src={profile} alt={'profile'} width={30} height={30} />,
              },
              {
                title: t('FAVORITE'),
                link: '/profile/wishlist',
                icon: <ImageWithFallback src={favorite} alt={'favorite'} width={30} height={30} />,
              },
              {
                title: t('ADDRESS'),
                link: '/profile/address',
                icon: <ImageWithFallback src={address} alt={'address'} width={30} height={30} />,
              },
              {
                title: t('ORDERS'),
                link: '/profile/my-orders',
                icon: <ImageWithFallback src={orders} alt={'orders'} width={30} height={30} />,
              },
            ]}
          />
        </Col>
        <Col lg={10}>{children}</Col>
      </Row>
    </React.Fragment>
  );
}
