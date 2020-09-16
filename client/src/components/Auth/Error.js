import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Error = ({ auth }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (auth && auth.error) {
      setShow(true);
    }
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, [auth]);
  return (
    <div>
      {auth && auth.error && show ? (
        <motion.div
          id="error"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{auth.error}</p>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Error);
