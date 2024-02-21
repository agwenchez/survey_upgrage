import styles from './interested.module.scss';

const Interested = () => {
    return (
        <div className={styles.inm__interested}>
            <div className={styles.thank_message}>
                <span>Thank you for your interest</span><br />
                <span>I will get back to you shortly</span>
            </div>
            <div className={styles.value_message}>
                At I&amp;M Bank we value your continuous support
            </div>
            <div className={styles.web_button}>
                <div>
                    <a href="https://www.imbank.com/">
                        <button type="button">Visit Main Website</button>
                    </a>
                </div>
                <div>
                    <span className={styles.more_info}>
                        For more information about the products or service.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Interested;
