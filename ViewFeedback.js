import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const lectureId = "lecture123";  // Example lecture ID

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/feedback/${lectureId}`);
                setFeedbacks(response.data);
            } catch (error) {
                console.error("Error fetching feedback", error);
            }
        };
        fetchFeedback();
    }, []);

    return (
        <div>
            <h2>Lecture Feedback</h2>
            {feedbacks.length === 0 ? <p>No feedback available.</p> : (
                <ul>
                    {feedbacks.map((fb, index) => (
                        <li key={index}>{fb.feedback} - {fb.rating}/5</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewFeedback;