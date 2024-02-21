import { FormEvent, useState } from "react";
import { questions } from "../../../constants";
import React from 'react';
import styles from './uninterested.module.scss';
import { useAddSurveyFeedbackMutation } from "../../../services";

import FeedbackModal from "./feedbackModal";

const UnInterestedSurveyQuestions = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [otherComment, setOtherComment] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [addSurveyFeedback] = useAddSurveyFeedbackMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "reason") {
            setSelectedOption(value);
        } else if (name === "otherComment") {
            setOtherComment(value);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        addSurveyFeedback({ selectedOption, otherComment });
        console.log("Selected option:", selectedOption);
        console.log("Other comment:", otherComment);
        setOpenModal(true)
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <div className={styles.uninterested}>
            <div className={styles.uninterested_title}>
                <span>Why are you not interested?</span>
            </div>
            <div className={styles.uninterested_subtitle}>
                <span>
                    We value your continued support as we work toward improving our
                    business and increasing value for our unit holders.
                </span>
            </div>
            <form>
                <div className={styles.questions_container}>
                    {questions.map((question, index) => (
                        <label htmlFor={`question_${index}`}>
                            <div
                                key={index}
                                className={`${styles.question} ${selectedOption === question ? styles.survey_highlighted : ""
                                    }`}
                            >
                                <div>
                                    {" "}
                                    <input
                                        type="checkbox"
                                        id={`question_${index}`}
                                        name="reason"
                                        value={question}
                                        checked={selectedOption === question}
                                        onChange={handleChange}
                                        className={styles.select_option}
                                    />
                                </div>
                                <div>
                                    {" "}
                                    <span className={styles.survey_questions}>{question}</span>
                                </div>
                            </div>
                        </label>
                    ))}
                    {selectedOption === "Other" && (
                        <div>
                            <textarea
                                name="otherComment"
                                placeholder="Kindly enter message…"
                                className={styles.other_comment}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div
                        className={`${styles.submit_response} ${selectedOption === "Other" && otherComment.length === 0
                            ? styles.inactive
                            : ""
                            }`}
                        onClick={handleSubmit}
                    >
                        <span>Submit</span>
                    </div>


                </div>
            </form>
            {openModal && <FeedbackModal closeModal={handleCloseModal} />}
        </div>
    );
};

export default UnInterestedSurveyQuestions;
