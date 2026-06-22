import styles from './Resources.module.css';
import { useState } from "react";

const resources = [
  { name: 'Academics', subResources: [{ name: 'Syllabus', link: '#' }, { name: 'Notes', link: '#' }, { name: 'PYQs', link: '#' }] },
  { name: 'Skill Development', subResources: [{ name: 'Coding', link: '#' }, { name: 'Designing', link: '#' }, { name: 'Public Speaking', link: '#' }] },
]

export default function Resources() {
  return (
    <main className={styles.container}>
      <section className={styles['title-container']}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['dinosaur-logo']}>
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
        </svg>
        <div className={styles['title-section']}>
          <div className={styles['title-frame']}>
            <div className={styles.line + ' ' + styles.left}></div>
            <h1 className={styles.title}>Resources</h1>
            <div className={styles.line + ' ' + styles.right}></div>
          </div>
          <div className={styles['border-frame']}>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </section>


      <section className={styles['resources-section']}>
        {resources.map((resource, index) => (
          <div className={styles['resource-card']} key={index}>

            <div
              className={styles['resource-header']}
              onClick={() => toggleResource(index)}
            >
              <h2 className={styles['resource-name']}>
                {index + 1}. {resource.name}
              </h2>

              {/* <div className={styles.arrow-container}>
                {openResources[index] ? <svg width="40" height="40" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4493 42.4475L20.4426 30.3409C19.6466 29.4654 19.6466 28.1283 20.4426 27.2528C21.3533 26.2511 22.9286 26.2511 23.8392 27.2528L27.5706 31.3571C30.4822 34.5595 35.5186 34.5595 38.4301 31.3571L42.1615 27.2528C43.0722 26.2511 44.6475 26.2511 45.5582 27.2528C46.3541 28.1283 46.3541 29.4654 45.558２ 30.3409L34.551４ 4２.４４７５C３４．１４ ４２．８９９９ ３３．５８２１ ４３．１５４ ３３．０００４ ４３．１５４C３２．４１８７ ４３．１５４ ３１．８６０７ ４２．８９９９ ３１．４４９３ ４２．４４７５Z" fill="#836C5A" />
                  <circle cx="33" cy="33" r="31.7308" transform="rotate(90 33 33)" stroke="#836C5A" stroke-width="２．５３８４６" />
                </svg>
                  : <svg width="40" height="40" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4475 34.5507L30.3409 45.5574C29.4654 46.3534 28.1283 46.3534 27.2528 45.5574C26.2511 44.6467 26.2511 43.0714 27.2528 42.1608L31.3571 38.4294C34.5595 35.5178 34.5595 30.4814 31.3571 27.5699L27.2528 23.8385C26.2511 22.9278 26.2511 21.3525 27.2528 20.4418C28.1283 19.6459 29.4654 19.6459 30.3409 20.4418L42.4475 31.4486C42.8999 31.86 43.154 32.4179 43.154 32.9996C43.154 33.5813 42.8999 34.1393 42.4475 34.5507Z" fill="#836C5A" />
                    <circle cx="33" cy="33" r="31.7308" stroke="#836C5A" stroke-width="2.53846" />
                  </svg>
                }
              </div> */}
            </div>

              <div className={styles['sub-resources']}>
                {resource.subResources.map((subResource, subIndex) => (
                  <div
                    className={styles['sub-resource-item']}
                    key={subIndex}
                  >
                    <span className={styles.dot}></span>

                    <a
                      href={subResource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['sub-resource-name']}
                    >
                      {subResource.name}
                    </a>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </section>
    </main>
  )
}

