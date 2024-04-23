'use server';

import React, { Suspense } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { Actions } from '@libs/actions';
import { Loader, JsonLd } from '@components';

import { Recipe } from './recipe';
import { Subscription } from './subscription';
import { MainSection } from './main';
import { HealthyProducts } from './healthy-products';
import { BestSellers } from './best-sellers';
import { ProductDetailsSection } from './product-details';
import { HealthyCard } from './healthy-card';

const FeaturedProductSection = async () => {
  const { data: product } = await Actions.products.getFeaturedProducts({ skip: 0, take: 1 });

  return product?.data?.items?.[0] ? (
    <section>
      <Container>
        <Row>
          <Col>
            <ProductDetailsSection product={product.data.items?.[0]} />
          </Col>
        </Row>
      </Container>
    </section>
  ) : null;
};

const HealthyProductsSection = async () => {
  const { data: products } = await Actions.products.getFeaturedProducts({
    skip: 1,
    take: 6,
    subTree: '0a841b7e-c732-4738-913d-9e43c054170e/e6697d8a-bad9-475f-8cc8-de16c95601d1',
  });

  return products?.data?.items?.length ? (
    <section>
      <Container>
        {products.data.JsonLd && <JsonLd html={products.data.JsonLd} />}
        <HealthyProducts products={products?.data?.items} />
      </Container>
    </section>
  ) : null;
};

const HomePage = () => {
  return (
    <React.Fragment>
      <section>
        <MainSection />
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <HealthyCard />
            </Col>
          </Row>
        </Container>
      </section>
      <Suspense fallback={<Loader />}>
        <FeaturedProductSection />
      </Suspense>
      <section>
        <Container>
          <BestSellers />
        </Container>
      </section>
      <Suspense fallback={<Loader />}>
        <HealthyProductsSection />
      </Suspense>
      <section>
        <Container>
          <Row>
            <Col>
              <Recipe />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Subscription />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
