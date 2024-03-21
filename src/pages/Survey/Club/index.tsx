import styles from "./club.module.scss";

const Club = () => {
  return (
    <>
      <div className={styles.background_container}>
        <div className={styles.top_left_text}>
          <a href="https://www.imbankgroup.com/ke/">
            Visit I&M bank official Website
          </a>
        </div>
        <div className={styles.top_right_logo}>
          <a href="https://www.imbankgroup.com/ke/">
            <img src="/images/logo.png" alt="I&M Bank Logo"></img>
          </a>
        </div>
        <div className={styles.center_container}>
          <img src="/images/center.png" alt="Welcome Image"></img>
          <div className={styles.welcome_text}>
            <span>Welcome To</span>
            <br></br>
            <span>the Club</span>
            <br></br>
            <span>Account</span>
          </div>
          <div className={styles.sub_text}>
            <span>Almost there! Please select how</span>
            <br></br>
            <span>you would like to receive your card.</span>
            <br></br>
            <span>#StayWinning</span>
          </div>
        </div>

        <div className={styles.floating_island}>
          <div className={styles.floating_logo}>
            <img src="/images/inm_logo.svg" alt="Floating Logo"></img>
            <span>How would you like to collect your card?</span>
          </div>
          <div className={styles.button_container}>
            <button>
              <img src="/images/bike-icon.png" alt="Bike Icon"></img>
              Deliver via courier
            </button>
            <button>
              <img src="/images/pin-icon.png" alt="Pin Icon"></img>
              Select pickup branch
            </button>
          </div>

          <div className={styles.terms_container}>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              placeholder="checkbox"
            ></input>
            <span>
              By clicking this button you agree to the terms and conditions and
              the privacy policy
            </span>

            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Club;
