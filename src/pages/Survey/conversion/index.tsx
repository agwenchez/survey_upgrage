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
          <strong>PayGo Account</strong>
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
      <div className={styles.club_benefits}>
        <p>
          <strong>Other Club Benefits</strong>
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
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className={styles.paygo_benefits}>
        <p>
          <strong>Other PayGo Benefits</strong>
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
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>Card Annual/Replacement Fee</td>
            <td>Nil</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className={styles.left_bottom_table}>
        <table>
          <p>
            <strong>More Club Benefits</strong>
          </p>
          <tr>
            <td>
              <img src="/images/card.png" alt="CardImage" />
              Free Debit Card
            </td>
            <td>
              <img src="/images/plane.png" alt="AmrefPlaneImage" />
              Free AMREF Maisha Bronze Cover
            </td>
            <td>
              {" "}
              <img src="/images/networking.png" alt="NetworkingImage" />
              Access To Professional Networking Forums
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/instructions.png" alt="InstructionImage" />
              Free Standing Instruction Setup
            </td>
            <td>
              <img src="/images/sms.png" alt="SMSNotificationImage" />
              Free SMS Notification
            </td>
            <td>
              <img src="/images/rewards.png" alt="RewardsImage" />
              Rewards And Personalised offers
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/atm.png" alt="ATMCardImage" />
              Free ATM Usage(local and International)
            </td>
            <td>
              <img src="/images/card.png" alt="CardImage" />
              Free Debit Card
            </td>
            <td>
              <img src="/images/card.png" alt="CardImage" />
              Free Debit Card
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/card.png" alt="CardImage" />
              Free Debit Card
            </td>
            <td>
              <img src="/images/loan.png" alt="LoanImage" />
              Personal Unsecured Loan through Digital Channels
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right_bottom_table}>
        <table>
          <p>
            <strong>More PayGo Benefits</strong>
          </p>
          <tr>
            <td>
              <img src="/images/card.png" alt="CardImage" />
              Free Debit Card
            </td>
            <td>
              <img src="/images/plane.png" alt="AmrefPlaneImage" />
              Free AMREF Maisha Bronze Cover
            </td>
            <td>
              {" "}
              <img src="/images/networking.png" alt="NetworkingImage" />
              Access To Professional Networking Forums
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/instructions.png" alt="InstructionImage" />
              Free Standing Instruction Setup
            </td>
          </tr>
        </table>
      </div>
      <p className={styles.terms}>
        <strong>
          @2021 I&M Bank Limited, All rights reserved.
          <br />
          <a
            target="_blank"
            href="https://www.imbankgroup.com/ke/terms-and-conditions/"
          >
            Terms & Conditions.
          </a>
        </strong>
      </p>
    </>
  );
};

export default Conversion;
