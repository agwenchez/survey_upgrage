import styles from "./surveyLayout.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import ReactGA from "react-ga";
import { Outlet } from "react-router-dom";

const SurveyLayout = () => {
  return (
    <>
      <div className={styles.inm__header}>
        <div>
          {" "}
          <img src="/images/inm_logo.svg" alt="" className={styles.logo} />
        </div>
        <div className={styles.tel_details}>
          <div>
            {" "}
            <FaPhoneAlt className={styles.call_icon} />
          </div>
          <div>
            <div>
              <span>24 hour call center</span>
            </div>
            <div>
              <span>
                <ReactGA.OutboundLink
                  className={styles.tel_no}
                  eventLabel="Call Customer Care"
                  to="tel:+254 732 100 000"
                >
                  254 732 100 000
                </ReactGA.OutboundLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inm__header_rectangle} />
      <Outlet />
      <footer className={styles.inm__footer_container}>
        <div className={styles.inm__footer_top} />
        <div className={styles.inm__footer_middle}>
          <div className={styles.footer_content}>
            <div>
              <div className={styles.footer_header}>
                {" "}
                <span>CONTACT US</span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>+254 20 322 1000</span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>+254 719 088 000 </span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>+254 732 100 000</span>
              </div>
            </div>
            <div>
              <div className={styles.footer_header}>
                {" "}
                <span>TERMS & CONDITIONS </span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>
                  <a
                    href="https://www.imbank.com/terms-and-conditions/terms-and-conditions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    General Terms & Conditions
                  </a>
                </span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>
                  <a
                    href="https://www.imbank.com/terms-and-conditions/new-terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Internet Banking
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div className={styles.footer_header}>
                {" "}
                <span>TARIFFS & REWARDS</span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>
                  <a
                    href="https://www.imbank.com/wp-content/uploads/2017/11/I-M-Tariff-Guide-A4-27-NOV-17.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bank Tariffs
                  </a>
                </span>
              </div>
              <div className={styles.footer_details}>
                {" "}
                <span>
                  <a
                    href="https://www.imbank.com/wp-content/uploads/2015/07/FLYER.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMBA Reward Points
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inm__footer_bottom} />
      </footer>
    </>
  );
};

export default SurveyLayout;
