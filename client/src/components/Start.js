import React from "react";
import { Button } from "react-bootstrap";
import swal from "@sweetalert/with-react";

const Start = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleClick = () => {
    if (checked) {
      props.history.push("/home");
    } else {
      swal("", "You did not check the checkbox", "warning");
    }
  };

  return (
    <div className="start_page">
      <h2>QUIZ EXAM INSTRUCTIONS:</h2>
      <p>
        Appear for exam between 12 pm to 1 pm - Exam Portal will be Activated at
        12 PM and Closed at 1 PM (IST) Total One Hour. All mentioned times are
        Indian Standard Times - You can check current Indian Time from-
        http://www.worldtimeserver.com/current_time_in_IN.aspx Appear for exam
        between 12 pm to 1 pm. Exam Portal will closed at sharp 1 PM. After
        closing of exam portal last few minutes will be provided only for
        verification of submissions, reading emails, checking messages, applying
        for mark sheet and confirming results etc. We will not be responsible
        for any lack of time and its losses. Student must keep track of time on
        own responsibility, as no clock or time notification is provided on our
        exam portal. Keep provided additional time strictly reserved for
        verification, c onfirmations and problem resolution. Entire exam
        requires only half hour / 30 minutes, so do not appear late.{" "}
      </p>
      <hr />
      <h1>PLEASE REFER FOLLOWING DETAILS REGARDING YOUR QUIZ EXAM :</h1>
      <p>
        1) We have tested all the Login Keys before sending it. Avoid any login
        key typing mistake like- Don't use extra space before or after key,
        <br />
        check Upper Case or Lower Case letters, Special Characters etc... 2)
        After successful online paper submission, your result will be displayed
        on the screen. After Finishing the exam, take a screenshot or photograph
        of result page and apply with below links for result confirmation. If a
        student passes the exam, then apply through the following link -
        http://www.dlc.co.in/form/view.php?id=28 . If a student is failed in the
        exam, then apply through the following link -
        http://www.dlc.co.in/form/view.php?id=9 <br />
        3) Login Key is activated for single attempt. If you face any difficulty
        inform us without any delay. <br />
        4) Always check your alternate / secondary or all email id's for more
        details. <br />
        5) Always check SPAM / JUNK / BULK folder etc. To avoid this always save
        our emails id in your contact white list i.e. exam@forensic.co.in,
        support@forensic.co.in , contact@forensic.co.in , exam@ifs.edu.in etc.{" "}
        <br />
        6) Keep sufficient power / electricity backup. We are not responsible
        for any electricity power failure, so arrange backup solutions like UPS,
        Inverter, Generator etc... Laptop / notebooks must be fully charged
        having sufficient backup time during exam. or use cyber cafe where such
        power backup solution is available. <br />
        7) Use faster, reliable and continued internet connection. Do not use
        internet connection which frequently disconnect or having any other
        issues.
      </p>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span id="declare">
          {" "}
          I accept all the rule and policy regarding quiz Exam
        </span>
      </label>
      <br />
      <Button variant="outline-primary" onClick={handleClick} id="start_btn">
        {" "}
        Start Test
      </Button>
    </div>
  );
};

export default Start;
