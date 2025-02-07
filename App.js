import React from 'react';
import SubmitFeedback from './components/SubmitFeedback';
import ViewFeedback from './components/ViewFeedback';

function App() {
    return (
        <div>
            <h1>LSBU Feedback System</h1>
            <SubmitFeedback />
            <ViewFeedback />
        </div>
    );
}

export default App;
