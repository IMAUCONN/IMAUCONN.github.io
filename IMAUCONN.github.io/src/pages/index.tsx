import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'The Glabstein Lab',
    imageUrl: '/img/home-page/lab.jpg'
  },
  {
    title: 'Executive Board',
    imageUrl: 'img/home-page/eboard.jpg'
  },
];

function Feature({imageUrl, title}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <div className={styles.buttons}>
            <Link style={{width:200}}
              className={clsx(
                'button button--outline button--primary button--lg',
              )}
              to={useBaseUrl(
                'https://docs.google.com/forms/d/e/1FAIpQLScZdMzhfu0VgPVrOcPrXRUVV17ijf9Mp2t0nZ_jBZv2r9JUxw/viewform'
              )}>
              Join Now
            </Link>
          </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div style={{alignItems: 'center', justifyContent: 'space-evenly'}} className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
