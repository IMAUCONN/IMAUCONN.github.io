import React, { useState, } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Container } from 'react-bootstrap';

function Hello() {

  return (
    <Layout title="about_us"> 
    <div>
      <h1 className={styles.title}>{"About Us"}</h1>
      <text className={styles.subtitle}>{"Who we are:" }</text> 
      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.paragraph}> The Information Management Association (IMA) is a student-run organization, at the University of Connecticut, that provides resources for students interested in the field of Information Technology. We allow students to develop their professional skill-set by connecting them to relevant job opportunities, all while creating an inviting community. </p>
          <p className={styles.paragraph}> Our meetings and events involve inviting IT representatives from various industries to connect with students and teach them about the industry, their specific companies, and potential job opportunities. We also focus on professional development by offering networking opportunities, resume building workshops, and mock interviews. </p>
          <p className={styles.paragraph}> Together we create a network of individuals passionate about information systems, analytics, and industry technology. </p>
        </div>
      <img className={styles.featureImage} src={"https://ima-business.rso.uconn.edu/wp-content/uploads/sites/1496/2016/04/https://www.business.uconn.edu/wp-content/uploads/sites/969/2015/09/2015-09-30_bschool.jpg.jpg"}/>
      </div>
    </div>
    </Layout>
  );

  }

  
export default Hello;