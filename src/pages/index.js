import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Description used for meta tag
// Important for representation in Search Engines.
// Shown in the description of search result. 
let description = "Willkommen in unserem lebendigen Kiez in Berlin Tempelhof-Mariendorf! Wir sind bestrebt, die Lebensqualität und Sicherheit für alle Bewohner*innen zu verbessern und den Durchgangsverkehr zu entschärfen. Erfahren Sie, wie wir gefährliche Verkehrssituationen in Straßen wie der Rathausstraße, Kurfürstenstraße und Prüßstraße entspannen und einen sicheren Raum schaffen, in dem Familien, Kinder und Senior*innen frei und unbeschwert leben können. Gemeinsam machen wir Mariendorf zu einem noch lebenswerteren Zuhause für alle.";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/vorstellung">
            Was meinen wir damit?
          </Link>
        </div>

        <div className={styles.buttons} style={{ marginTop: '1rem' }}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Was gibt es neues?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={description}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
