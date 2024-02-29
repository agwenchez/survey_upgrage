import styles from "./conversionU.module.scss";

const Conversion = () => {
  return (
    <>
      <a
        href="https://www.imbankgroup.com/ke/"
        className={styles.top_right_logo}
      >
        <img src="/images/logo.png" alt="I&M Bank Logo" />
      </a>
      <div className={styles.center_image}>
        <img src="/images/center.png" alt="WelcomeImage" />
        <span className={styles.center_text}>Welcome To</span>
        <br />
        <p className={styles.center_text}>The Upgrade</p>
      </div>
      <p id={styles.midright_text}>
        <strong>
          Choose between the Club and PayGo account as
          <p>desired and enjoy more benefits</p>
        </strong>
      </p>
      <div className={styles.left_selection}>
        <p>
          <strong>Club Account</strong>
        </p>
        <p>
          The I&M Club Account is your unrivaled gateway to a world of
          priveledges that align with your lifestyle requirements, matched with
          convenient banking services all just one monthly flat fee.
        </p>
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
          <tr>
            <td>Internal Transfer</td>
            <td>Free</td>
          </tr>
        </table>
        <button type="button"> Upgrade Now</button>
      </div>
      <div className={styles.right_selection}>
      <p>
          <strong>Club Account</strong>
        </p>
        <p>
          The I&M Club Account is your unrivaled gateway to a world of
          priveledges that align with your lifestyle requirements, matched with
          convenient banking services all just one monthly flat fee.
        </p>
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
          <tr>
            <td>Internal Transfer</td>
            <td>Free</td>
          </tr>
        </table>
        <button type="button"> Upgrade Now</button>
      </div>
      
      <div className={styles.bottom_left_benefits}></div>
      <div className={styles.bottom_right_benefits}></div>
    </>
  );
};

export default Conversion;
