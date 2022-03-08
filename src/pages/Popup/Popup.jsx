import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function greetingListener(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.greeting);
  sleep(1000).then(() => {
    sendResponse({response: "Response from background script after sleep"});
  })
  return true;
}

const Popup = () => {
  // https://www.pluralsight.com/guides/event-listeners-in-react-components
  React.useEffect(() => {
    chrome.runtime.onMessage.addListener(greetingListener);

    return () => {
      chrome.runtime.onMessage.removeListener(greetingListener);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
