import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Das Lächeln des Kiez',
    path: require('@site/static/img/machon_fassade.jpg').default,
    description: (
      <>
        Es ist unverkennbar und doch
      </>
    ),
  },
  {
    title: 'Allzu oft verstellt',
    path: require('@site/static/img/machon_eck.jpg').default,
    description: (
      <>
        Auf den Straßen dominiert der Durchgangsverkehr. 
      </>
    ),
  },
  {
    title: 'bis uns selbst kaum Platz bleibt',
    path: require('@site/static/img/rathaus_gehweg.jpg').default,
    description: (
      <>
        Deshalb setzen wir uns für sichere Fuß- & Radwege im Kiez ein. So dass der Mensch wieder im Vordergrund steht.
      </>
    ),
  },
];

function Feature({path, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={path} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
