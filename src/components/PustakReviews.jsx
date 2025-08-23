import React from 'react';
import './PustakReviews.css';

const reviews = [
  {
    name: 'Ananya Verma',
    title: 'B.Com Student',
    highlight: "Found everything I needed to prepare for exams!",
    text: "Pustak Ghar gave me access to PYQs, handwritten notes, and complete subject playlists — all in one place. It’s incredibly helpful during exam season.",
    theme: 'dark',
  },
  {
    name: 'Rohit Sen',
    title: 'Engineering Aspirant',
    highlight: "All my study material needs covered for free.",
    text: "I used to waste time searching different websites. Pustak Ghar made it so easy to find university-wise resources and relevant PDFs in seconds.",
    theme: 'purple',
  },
  {
    name: 'Megha Sharma',
    title: 'NET Exam Candidate',
    highlight: "Best curated content for serious learners.",
    text: "It’s hard to find reliable material for competitive exams, but this platform changed that. It’s well-organized and constantly updated with relevant notes and playlists.",
    theme: 'light',
  },
  {
    name: 'Tushar Mehta',
    title: 'University Student',
    highlight: "Fast access to the right material — for free!",
    text: "I was able to find PYQs and detailed notes right before my internals. No ads, no spam, just direct and useful resources.",
    theme: 'light',
  },
  {
    name: 'Ritika Das',
    title: 'Student Contributor',
    highlight: "Community-driven and truly helpful.",
    text: "Not only did I find helpful notes, but I also contributed my own. I love how Pustak Ghar lets students help each other grow academically.",
    theme: 'dark',
  },
  {
    name: 'Aditya Prakash',
    title: 'CS Student',
    highlight: "Unlocking free, organized, and accessible study resources for university students across India.",
    text: "This platform has changed how I study. Everything is categorized by university and course, which saves hours of searching. It’s a game-changer for students who want to study smart.",
    theme: 'purple',
  },
];

const PustakReviews = () => {
  return (
    <section className="review-section">
      {reviews.map((review, index) => (
        <div key={index} className={`review-card ${review.theme}`}>
          <h4>{review.name}</h4>
          <span className="verified">{review.title}</span>
          <p className="highlight">“ {review.highlight} ”</p>
          <p className="text">{review.text}</p>
        </div>
      ))}
    </section>
  );
};

export default PustakReviews;
