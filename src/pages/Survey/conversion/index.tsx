import styles from "./conversion.module.scss";

const Conversion = () => {
  return (
    <>
      <div className={styles.inm__conversion}>
        <div className={styles.header}>
          <div className={styles.visit_message}>
            <p>Visit I&M Bank Official Website</p>
          </div>
          <div className={styles.welcome_message}>
            <p>WE ARE ON</p>
            <br />
            <p>YOUR SIDE!</p>
          </div>
        </div>
        <div className={styles.center_image}>
          <img src="/images/center.png" alt="WelcomeImage" />
          <span className={styles.center_text}>The Legacy</span>
          <br />
          <p className={styles.center_text}>Builder</p>
        </div>
        <div className={styles.belowImage_text}>
          <span>#StayWinning</span>
          <br />
          <span>You have achieved alot and we are on your side</span>
          <br />
          <span>helping you enjoy your wealth</span>
        </div>
        <div className={styles.upgrade_button}>
          <button type="button">Upgrade Now</button>
        </div>

        <div className={styles.left_table}>
          <button type="button">Account</button>
          <button type="button">Card</button>
          <button type="button">Others</button>
          <hr></hr>
          <button type="button">Club Account</button>
          <p>
            The I&M Club Account is your unrivaled gateway to a world of
            priveledges that align with your lifestyle requirements, matched
            with convenient banking services all just one monthly flat fee.{" "}
            <a
              target="_blank"
              href="https://www.imbankgroup.com/ke/accounts/club-account/"
            >
              <strong>Open your Club Account Today</strong>
            </a>
          </p>

          <div className={styles.table}>
            <table>
              <tr>
                <td>Minimum Balance</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Ledger Fees</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Debit Card</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Card Annual/Replacement Fee</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Monthly Fee</td>
                <td>1000/-</td>
              </tr>
              <tr>
                <td>ATM Withdrawal Fee</td>
                <td>Free ATM Usage(local and International)</td>
              </tr>
              <tr>
                <td>Pesalink/TT/RGTS</td>
                <td>Free on Mobile and Internet Banking</td>
              </tr>
              <tr>
                <td>Internal Transfer</td>
                <td>Free</td>
              </tr>
            </table>
          </div>
          <hr></hr>
          <strong>Other Benefits</strong>
          <div className={styles.bottom_buttons}>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="OverdraftImage" />
              Overdraft Available
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="RelationshipImage" />
              Access to dedicated Relationship Managers
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="CardImage" />
              Free Debit Card
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="AmrefPlaneImage" />
              Free AMREF Maisha Bronze Cover
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="NetworkingImage" />
              Access To Professional Networking Forums
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="InstructionImage" />
              Free Standing Instruction Setup
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="SMSNotificationImage" />
              Free SMS Notification
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="RewardsImage" />
              Rewards And Personalised offers
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="ATMCardImage" />
              Free ATM Usage(local and International)
            </button>
            <button type="button">
              {" "}
              <img src="/images/overdraft.png" alt="LoanImage" />
              Personal Unsecured Loan through Digital Channels
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversion;
