import styles from "./congratulation.module.scss";

const Congratulations = () => (
  <>
    <div className={styles.main_container}>
      <div className={styles.congratulations_container}>
        <div className={styles.container_swoosh}>
          <div>
            {" "}
            <img
              src="/images/three_cards.png"
              alt="swoosh"
              className={styles.swoosh_image}
            />
          </div>
          <div className={styles.text_swoosh}>
            <p>Experience more with I&M cards</p>
            <p>
              Treat yourself with the best <br />
              credit cards in kenya!
            </p>
          </div>
        </div>

        <div className={styles.congratulation_message}>
          <div>
            <div className={styles.checkmark}>
              <img
                src="/images/success.svg"
                alt="success"
                className={styles.checkmark_icon}
              />
            </div>
            <p className={styles.congratulation_title}>Congratulations!</p>
            <p className={styles.congratulation_subtitle}>
              Your request was successful
            </p>
            <p className={styles.message}>
              Thank you for applying for a new master card. A bank officer will
              be reaching out to you.
            </p>
            <p className={styles.second_message}>I&M We are on your Side</p>
            <div className={styles.redirect_button}>
              <a
                href="https://www.imbank.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.submit}>Visit Website</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.copyright_footer}>
        <p>
          ©{new Date().getFullYear()} I&amp;M Bank, All rights reserved.
          <br />
          Privacy &amp; Legal Policies | Cookie Preferences
        </p>
      </footer>
    </div>
  </>
);

export default Congratulations;
