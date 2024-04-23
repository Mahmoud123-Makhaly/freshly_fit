'use client';

import { Row, Col } from 'reactstrap';

import { ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
import logo from '@assets/images/footer/ff-logo.svg';
import appStore from '@assets/images/footer/app-store.svg';
import playStore from '@assets/images/footer/play-store.svg';
import facebook from '@assets/images/footer/facebook.svg';
import instagram from '@assets/images/footer/instagram.svg';
import x from '@assets/images/footer/x.svg';
import BankMasr from '@assets/images/footer/bankmasr.svg';
import NBE from '@assets/images/footer/NBE.svg';
import Meeza from '@assets/images/footer/meza.svg';
import MasterCard from '@assets/images/footer/mastercard.svg';
import Visa from '@assets/images/footer/visa.svg';

const Footer = () => {
  const t = useTranslate('COMP_Footer');
  const paymentList = [Visa, MasterCard, Meeza, NBE, BankMasr];
  return (
    <footer className="bg-info">
      <div className="container">
        <Row className="text-white justify-content-between pt-5 border-bottom">
          <Col md={6} xl={3}>
            <ul>
              <li>
                <Link href={'/'}>
                  <ImageWithFallback src={logo} alt={'logo'} width={100} height={100} />
                </Link>
              </li>
              <li className="pt-4">
                <p className="font-12">{t('DETAILS')}</p>
              </li>
            </ul>
          </Col>
          <Col md={6} xl={3}>
            <h2 className="pb-3 title">{t('CONTACT_US')}</h2>
            <ul className="contact-us">
              <li>
                <Link href={'#'} className="d-flex  align-items-center">
                  <i className="fa-solid fa-envelope px-2"></i>
                  <p>freshlyfitbread2023@gmail.com</p>
                </Link>
              </li>
              <li>
                <Link href={'tel:01148494349'} className="d-flex  align-items-center">
                  <i className="fa-solid fa-phone px-2"></i>
                  <p>01148494349</p>
                </Link>
              </li>
              <li>
                <Link href={'#'} className="d-flex   align-items-center">
                  <i className="fa-solid fa-house px-2"></i>
                  <p>القاهره , مصر</p>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} xl={2}>
            <h2 className="pb-3 title">{t('SUPPORT_TEAM')}</h2>
            <ul>
              <li className="py-1 mb-3">
                <Link href={'/content/terms-and-conditions'}>{t('TERMS_CONDITION')}</Link>
              </li>
              <li className="py-1 mb-3">
                <Link href={'/content/delivery-policy'}>{t('DELIVERY_POLICY')}</Link>
              </li>
              <li>
                <Link href={'/content/return-policy'}>{t('RETURN_POLICY')}</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} xl={2}>
            <h2 className="pb-3 title">{t('GET_APP')}</h2>
            <ul>
              <li className="py-1 mb-1">
                <Link href={'#'}>
                  <ImageWithFallback src={appStore} alt={'app store'} />
                </Link>
              </li>
              <li className="py-1">
                <Link href={'#'}>
                  <ImageWithFallback src={playStore} alt={'play store'} />
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} xl={2}>
            <h2 className="pb-3 title">{t('FOLLOW_US')}</h2>
            <ul className="d-flex align-items-center">
              <li className="py-1 pe-3">
                <Link href={'#'}>
                  <ImageWithFallback src={facebook} alt={'logo'} width={24} height={24} />
                </Link>
              </li>
              <li className="py-1 pe-3">
                <Link href={'#'}>
                  <ImageWithFallback src={instagram} alt={'logo'} width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <ImageWithFallback src={x} alt={'logo'} width={24} height={24} />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <div className="mt-3 d-flex justify-content-center">
            {paymentList.map((payment, index) => {
              return (
                <ImageWithFallback
                  key={`payment-${index}`}
                  src={payment}
                  alt={`${payment}`}
                  className="mx-1 paymentImg"
                />
              );
            })}
          </div>
        </div>
        <div className="pb-5">
          <p className="text-white text-center footer-desc">{t('COPYRIGHT')}</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
