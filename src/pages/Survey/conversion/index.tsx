import React from "react";
import styles from "./conversion.module.scss";
import { useNavigate } from "react-router-dom";

const Conversion = () => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    // Navigate to a next page
    navigate(url);
  };
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.top_right_logo}>
          <a target="_blank" href="https://www.imbankgroup.com/ke/">
            <img src="/images/logo.png" alt="I&M Bank Logo" />
          </a>
        </div>
        <div className={styles.top_text}>
          <span>
            Choose between the Club and PayGo account as desired and enjoy more
            benefits
          </span>
        </div>
        <div className={styles.swoosh}>
          <img src="/images/center.png" alt="WelcomeImage" />
          <span>
            Welcome To <br />
            The Upgrade
          </span>
        </div>
        <div className={styles.left_selection}>
          <p>
            <strong>Club Account</strong>
          </p>
          <p>
            The I&M Club Account is your unrivaled gateway to a world of
            priveledges that align with your lifestyle requirements, matched
            with convenient banking services all just one monthly flat fee.
          </p>

          <table>
            <tr>
              <td>Minimum Balance</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Monthly Fee</td>
              <td>
                <em>KSh 1000</em>
              </td>
            </tr>
            <tr>
              <td>Ledger Fees</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Transfer Within I&M</td>
              <td>
                <em>Free</em>
              </td>
            </tr>
            <tr>
              <td>Over the counter withdrawals</td>
              <td>
                <em>Free</em>
              </td>
            </tr>
            <tr>
              <td>Pesalink/TT/RGTS</td>
              <td>
                <em>Free on Mobile & Internet Banking</em>
              </td>
            </tr>
            <tr>
              <td>ATM withdrawal Fees</td>
              <td>
                <em>Free at all ATMs, both locally and internationally </em>
              </td>
            </tr>
            <tr>
              <td>Bank to MPesa Transfer</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Unsecured Personal Loan</td>
              <td>
                <em>Access upto 10M on qualification</em>
              </td>
            </tr>
          </table>

          <button type="button" onClick={() => handleClick("./club")}>
            Upgrade Now
          </button>
        </div>
        <div className={styles.right_selection}>
          <p>
            <strong>PayGo Account</strong>
          </p>
          <p>
            The PayGo Account offers you unparalleled flexibility and benefits
            as you set about your financial goals. With no excessive fees to tie
            you down you enjoy the piece of mind that comes with.
          </p>

          <table>
            <tr>
              <td>Minimum Balance</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Monthly Fees</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Ledger Fees</td>
              <td>
                <em>KSh 30.(for non chanel debit)</em>
              </td>
            </tr>
            <tr>
              <td>Transfer Within I&M</td>
              <td>
                <em>Free</em>
              </td>
            </tr>
            <tr>
              <td>Transfer Within I&M</td>
              <td>
                <em>KSh 250</em>
              </td>
            </tr>
            <tr>
              <td>Pesalink/TT/RGTS</td>
              <td>
                <em>As per the general tariff</em>
              </td>
            </tr>
            <tr>
              <td>ATM withdrawal Fees</td>
              <td>
                <em>KSh 30 at I&M ATMs, KSH 50 at other ATMs</em>
              </td>
            </tr>
            <tr>
              <td>Bank to MPesa Transfer</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Unsecured Personal Loan</td>
              <td>
                <em>Access upto 10M on qualification</em>
              </td>
            </tr>
          </table>

          <button type="button" onClick={() => handleClick("./paygo")}>
            Upgrade Now
          </button>
        </div>
        <div className={styles.club_benefits}>
          <span>
            <strong>Other Club Benefits</strong>
          </span>
          <table>
            <tr>
              <td>Minimum Balance</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Ledger Fees</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Debit Card</td>
              <td>
                <em>Free</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        <div className={styles.paygo_benefits}>
          <span>
            <strong>Other PayGo Benefits</strong>
          </span>
          <table>
            <tr>
              <td>Minimum Balance</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Ledger Fees</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Debit Card</td>
              <td>
                <em>Free</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
            <tr>
              <td>Card Annual/Replacement Fee</td>
              <td>
                <em>Nil</em>
              </td>
            </tr>
          </table>
          <hr />
        </div>
        <span className={styles.span_left}>
          <strong>More Club Benefits</strong>
        </span>
        <div className={styles.grid_container1}>
          <div className={styles.grid_item}>
            <img src="/images/book.png" alt="CardImage" />
            <p>
              Access to Select Banking centers for the state of the art banking
              experience on qualification
            </p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/overdraft.png" alt="AmrefPlaneImage" />
            <p>OverDraft Available</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/relationship.png" alt="NetworkingImage" />
            <p>Access To Dedicated relationship Managers</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/card.png" alt="InstructionImage" />
            <p>Free Debit Card</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/plane.png" alt="SMSNotificationImage" />
            <p>Free AMREF Maisha Bronze</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/networking.png" alt="RewardsImage" />
            <p>Access To profesional networking forums</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/instructions.png" alt="ATMCardImage" />
            <p>Free Standing Instruction forums</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/sms.png" alt="CardImage" />
            <p>Free SMS notification</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/rewards.png" alt="CardImage" />
            <p>Rewards On Personalised Offers</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/atm.png" alt="CardImage" />
            <p>Free ATM usage (local and International)</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/loan.png" alt="LoanImage" />
            <p>Personal Unsecured Loan through Digital Channels</p>
          </div>
        </div>
        <span className={styles.span_right}>
          <strong>More PayGo Benefits</strong>
        </span>
        <div className={styles.grid_container2}>
          <div className={styles.grid_item}>
            <img src="/images/card.png" alt="CardImage" />
            <p>Free Debit Card</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/plane.png" alt="AmrefPlaneImage" />
            <p>Free AMREF Maisha Bronze Cover</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/networking.png" alt="NetworkingImage" />
            <p>Access To Professional Networking Forums</p>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/instructions.png" alt="InstructionImage" />
            <p> Free Standing Instruction Setup</p>
          </div>
        </div>
        <footer className={styles.footer}>
          <span>
            <strong>
              @2024 I&M Bank Limited, All rights reserved. <br />
              <a
                target="_blank"
                href="https://www.imbankgroup.com/ke/terms-and-conditions/"
              >
                Terms & Condition
              </a>
            </strong>
          </span>
        </footer>
      </div>
    </>
  );
};

export default Conversion;
