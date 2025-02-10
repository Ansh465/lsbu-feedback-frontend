import React, { useState } from 'react';
import axios from 'axios';

const SubmitFeedback = () => {
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(5);
    const lectureId = "lecture123";  // Example lecture ID

    const submitFeedback = async () => {
        try {
            await axios.post('http://localhost:5000/feedback', { lectureId, feedback, rating });
            alert('Feedback submitted successfully');
            setFeedback("");
            setRating(5);
        } catch (error) {
            console.error("Error submitting feedback", error);
        }
    };

    return (
        <div>
            <h2>Submit Feedback</h2>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Enter feedback"></textarea>
            <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
            <button onClick={submitFeedback}>Submit</button>
        </div>
    );
};

export default SubmitFeedback;