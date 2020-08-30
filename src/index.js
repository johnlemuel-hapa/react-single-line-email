import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

var testEmail = {
  subject: "React Newsletter",
  title: "React Newsletter - Issue 36",
  date: "July 15",
  message: "React Newsletter Issue 36 - July15th 2016 Read this issue on the web."
};

const Checkbox = () => (
  <input className="checkbox" type="checkbox" />
);

const Pin = () => (
  <i className="fas fa-map-pin" />
);

function ActionBox() {
  return (
    <span className="actions">
      <Checkbox />
      <Pin />
    </span>
  );
};

const Subject = ({ subject }) => (
  <span className="subject">
    { subject }
  </span>
);

const Title = ({ title }) => (
  <span className="title">
    { title }
  </span>
);

const Date = ({ date }) => (
  <span className="date">
    { date }
  </span>
);

const Message = ({ message }) => (
  <div className="message">
    { message }
  </div>
);

function ContentBox({ email }) {
  return (
    <span className="content">
      <div className="header">
        <Subject subject={ email.subject } />
        <Title title={ email.title } />
        <Date date={ email.date } />
      </div>
      <Message message={ email.message } />
    </span>
  );
}

function Email({ info }) {
  return (
    <div className="email">
      <ActionBox />
      <ContentBox email={ info } />
    </div>
  );
}

Email.propTypes = {
  info: PropTypes.object
};

ContentBox.propTypes = {
  email: PropTypes.object
};

Message.propTypes = {
  message: PropTypes.string
};

Date.propTypes = {
  date: PropTypes.string
};

Title.propTypes = {
  title: PropTypes.string
};

Subject.propTypes = {
  subject: PropTypes.string
};

ReactDOM.render(
  <Email info={ testEmail } />,
  document.getElementById('root')
);
