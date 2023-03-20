import React from 'react';
import PropTypes from 'prop-types';

import Cert from './Courses/Certs';

const getRows = (certs) => certs.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  // else if (a.number > b.number) ret = 1;
  // else if (a.number < b.number) ret = -1;
  return ret;
}).map((cert, idx) => (
  <Cert
    data={cert}
    key={cert.title}
    last={idx === certs.length - 1}
  />
));

const Certs = ({ data }) => (
  <div className="certs">
    <div className="link-to" id="certs" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Certs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    // number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Certs.defaultProps = {
  data: [],
};

export default Certs;
