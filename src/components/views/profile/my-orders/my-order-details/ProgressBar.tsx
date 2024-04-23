'use client';

import React from 'react';
import { Progress } from 'reactstrap';

import { ImageWithFallback } from '@components';
import chart from '@assets/images/profile/chart.svg';
import cup from '@assets/images/profile/cup.svg';
import delivered from '@assets/images/profile/delivered.svg';
import out from '@assets/images/profile/out.svg';
import shipped from '@assets/images/profile/shipped.svg';
import { useTranslate } from '@app/hooks';

interface IProgressBar {
  orderStatus: number;
}

const ProgressBar = (props: IProgressBar) => {
  const { orderStatus } = props;
  const t = useTranslate('Comp_Progress_Bar');

  return (
    <div className="progress_bar">
      <div className="progress_steps flex-between">
        <Progress color="primary" value={orderStatus} />
        <p
          className="m-0"
          style={{
            background:
              orderStatus === 0 || orderStatus === 25 || orderStatus === 50 || orderStatus === 75 || orderStatus === 100
                ? '#65af4c'
                : '',
          }}
        >
          <ImageWithFallback src={cup} width={0} height={0} alt="cup" />
        </p>

        <p
          className="m-0"
          style={{
            background:
              orderStatus === 25 || orderStatus === 50 || orderStatus === 75 || orderStatus === 100 ? '#65af4c' : '',
          }}
        >
          <ImageWithFallback src={chart} width={0} height={0} alt="chart" />
        </p>
        <p
          className="m-0"
          style={{
            background: orderStatus === 50 || orderStatus === 75 || orderStatus === 100 ? '#65af4c' : '',
          }}
        >
          <ImageWithFallback src={delivered} width={0} height={0} alt="delivered" />
        </p>
        <p
          className="m-0"
          style={{
            background: orderStatus === 75 || orderStatus === 100 ? '#65af4c' : '',
          }}
        >
          <ImageWithFallback src={out} width={0} height={0} alt="out" />
        </p>
        <p
          className="m-0"
          style={{
            background: orderStatus === 100 ? '#65af4c' : '',
          }}
        >
          <ImageWithFallback src={shipped} width={0} height={0} alt="oshippedut" />
        </p>
      </div>
      <div className="flex-between progress-status">
        <p style={{ color: `${orderStatus === 0 && `#65af4c`}` }}>{t('PREPARING')}</p>
        <p style={{ color: `${orderStatus === 25 && `#65af4c`}` }}>{t('ON_THE_ROAD')}</p>
        <p style={{ color: `${orderStatus === 50 && `#65af4c`}` }}> {t('SHIPPED')}</p>
        <p style={{ color: `${orderStatus === 75 && `#65af4c`}` }}> {t('OUT_FOR_DELIVERY')}</p>
        <p style={{ color: `${orderStatus === 100 && `#65af4c`}` }}> {t('DELIVERED')}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
