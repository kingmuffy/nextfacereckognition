"use client" 
import React from "react";
import styles from "./page.module.css";
import { toast } from 'react-toastify';



const Question = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const age = e.target[0].value;
    const gender = e.target[1].value;
    const onlineFrequency = e.target[2].value;
    const trustLevel = e.target[3].value;
    const deceivedBefore = e.target[4].value;
    const imageRecognitionTrust = e.target[5].value;
    const usePlatform = e.target[6].value;
    const preventDeception = e.target[7].value;
    const username = e.target[8].value;

    try {
      await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          gender,
          onlineFrequency,
          trustLevel,
          deceivedBefore,
          imageRecognitionTrust,
          usePlatform,
          preventDeception,
          username,
          
        
        }),
      });
      e.target.reset();
        toast.success('Form submitted successfully!');

    } catch (err) {
      console.log(err);
        toast.error('Error submitting form: ' + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Web-Based Image Detection for Trust Enhancement Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Age:</label>
          <select className={styles.questionSelect} name="age">
            <option value="under18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55plus">55+</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Gender:</label>
          <select className={styles.questionSelect} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonBinary">Non-binary/Third gender</option>
            <option value="preferNotToSay">Prefer not to say</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>How often do you engage in online interpersonal encounters?</label>
          <select className={styles.questionSelect} name="onlineFrequency">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="rarely">Rarely</option>
            <option value="never">Never</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>On a scale from 1 (not at all) to 5 (completely), how much do you trust individuals you encounter online?</label>
          <select className={styles.questionSelect} name="trustLevel">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Have you ever been deceived or encountered deceptive behavior online?</label>
          <select className={styles.questionSelect} name="deceivedBefore">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Do you believe that integrating image recognition technology can enhance trust in online interpersonal encounters?</label>
          <select className={styles.questionSelect} name="imageRecognitionTrust">
            <option value="stronglyAgree">Strongly Agree</option>
            <option value="agree">Agree</option>
            <option value="neutral">Neutral</option>
            <option value="disagree">Disagree</option>
            <option value="stronglyDisagree">Strongly Disagree</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Would you use a web-based platform that uses image recognition to verify the authenticity of individuals you encounter online?</label>
          <select className={styles.questionSelect} name="usePlatform">
            <option value="definitely">Definitely</option>
            <option value="probably">Probably</option>
            <option value="notSure">Not Sure</option>
            <option value="probablyNot">Probably Not</option>
            <option value="definitelyNot">Definitely Not</option>
          </select>
        </div>
        <div className={styles.question}>
          <label className={styles.questionLabel}>Do you believe that a platform using image recognition can prevent deceptive behavior online?</label>
          <select className={styles.questionSelect} name="preventDeception">
            <option value="stronglyAgree">Strongly Agree</option>
            <option value="agree">Agree</option>
            <option value="neutral">Neutral</option>
            <option value="disagree">Disagree</option>
            <option value="stronglyDisagree">Strongly Disagree</option>
          </select>
        </div>
        <div className={styles.question}>
  <label className={styles.questionLabel}>Username:</label>
  <input type="text" name="username" className={styles.questionInput} />
</div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Question;
