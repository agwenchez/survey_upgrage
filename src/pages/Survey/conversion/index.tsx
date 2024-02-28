import styles from "./conversionU.module.scss";

const ConversionLanding = () => {
  return (
    <>
      <a
        href="https://www.imbankgroup.com/ke/"
        className={styles.top_right_logo}
      >
        <img src="/images/logo.png" alt="I&M Bank Logo" />
      </a>
      <div className={styles.top_left_div}>
          <img src="/images/center.png" alt="WelcomeImage" />
          <span className={styles.center_text}>The Legacy</span>
          <br />
          <p className={styles.center_text}>Builder</p></div>
      <div className={styles.mid_right_text}></div>
      <div className={styles.right_selection}></div>
      <div className={styles.left_selection}></div>
      <div className={styles.bottom_left_benefits}></div>
      <div className={styles.bottom_right_benefits}></div>
    </>
  );
};

export default ConversionLanding;
