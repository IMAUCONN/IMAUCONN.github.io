import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

 {/* This is where the two pictures are*/}
const features = [
  {
    title: 'The Glabstein Lab',
    imageUrl: 'img/lab.jpg',
    webURL: 'https://innovatelabs.uconn.edu/research-lab/'
  },
  {
    title: 'Executive Board',
    imageUrl: 'img/headshots/eboard.jpg',
    webURL:'/about_us/'
  },
];
 {/* This is the Feature function that styles the images and puts them in divs */}
function Feature({imageUrl, title, webURL}) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={webURL}>
      {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
      )}
      <h3>{title}</h3>
      </Link>
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
        {/* This is where the color of the background*/}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* This is where the title and tagline is displayed they can be eddited in the docusaurus.config file*/}
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
       {/* This is the join now button */}
      <div className={styles.buttons}>
            <Link style={{width:200}}
              className={clsx(
                'button button--outline button--primary button--lg',
              )}
              to={useBaseUrl(
                'https://uconntact.uconn.edu/organization/ima'
              )}>
              Join Now
            </Link>
          </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
               {/* This displays the pictures */}
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
