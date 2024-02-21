import React from "react";
import styles from "./uninterested.module.scss";
import { FeedbackModalProps } from "../../../@types";

const FeedbackModal: React.FC<FeedbackModalProps> = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.modal_container} onClick={handleCloseModal}>
      <div className={styles.modal_content} onClick={handleModalClick}>
        <div>
          <img src="/images/thankYou.svg" alt="Thank You" />
        </div>
        <div className={styles.modal_title}>
          <span>Thank you for your feedback</span>
        </div>
        <div className={styles.modal_details}>
          <span>
            We are continuously improving our product to suit your needs. If you
            wish to make an inquiry or learn more about I&M Bank, visit our
            website today!
          </span>
        </div>
        <div className={styles.visit_web}>
          <a href='https://www.imbank.com/' target='_blank' rel='noopener noreferrer' className={styles.link_web}>Visit Main Website</a>
        </div>
        <div className={styles.cancel_modal} onClick={handleCloseModal}>Cancel</div>
      </div>
    </div>
  );
};

export default FeedbackModal;
