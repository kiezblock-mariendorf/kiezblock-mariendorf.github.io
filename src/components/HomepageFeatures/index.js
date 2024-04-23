import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lebenswert',
    path: require('@site/static/img/machon_fassade.jpg').default,
    description: (
      <>
        Wir wollen den Kiez für die Menschen zurückgewinnen. So dass der Mensch wieder im Vordergrund steht.
      </>
    ),
  },
  {
    title: 'Ruhig',
    path: require('@site/static/img/machon_eck.jpg').default,
    description: (
      <>
        Dazu wollen wir den Durchgangsverkehr aus dem Kiez heraushalten.  
      </>
    ),
  },
  {
    title: 'Sicher',
    path: require('@site/static/img/rathaus_gehweg.jpg').default,
    description: (
      <>
        Außerdem fordern wir sichere Fuß- & Radwege im Kiez. 
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
