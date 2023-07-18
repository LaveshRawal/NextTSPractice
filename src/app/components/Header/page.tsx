import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuboxes}>
        <Link href="/" className={styles.Menus}>Home</Link>
        <Link href="/pages/todo" className={styles.Menus}>ToDo</Link>
        <Link href="/pages/calculator" className={styles.Menus}>Calculator</Link>
        <Link href="/pages/apisingle" className={styles.Menus}>API Single</Link>
        <Link href="/pages/apimulti" className={styles.Menus}>API Multi</Link>
      </div>
    </div>
  );
}

export default Page;
