import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {

  // This component provides information about the CinePhile application, its features, and the creator.
  // It is structured using Bootstrap components for a responsive layout.
  return (
    <Container className="mt-4 p-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm card-deets">
            <Card.Body className="p-4">
              <Card.Title as="h2" className="mb-4">About CinePhile</Card.Title>
              <p>
                CinePhile is your personal companion for navigating the vast world of cinema.
                Whether you're a seasoned film buff or just starting your cinematic journey,
                this platform is designed to help you discover, track, and remember the
                movies that matter to you. From exploring detailed information about your
                favorite films to curating your own personalized watchlist and keeping track
                of what you've already enjoyed, CinePhile aims to be the central hub for
                your movie experiences.
              </p>

              <Card.Subtitle className="mt-3 mb-2 text-muted">My Motivation</Card.Subtitle>
              <p>
                As a passionate lover of film, I often found myself struggling to keep track
                of the movies I wanted to see and the ones I had already watched. Existing
                platforms sometimes felt cluttered or didn't quite fit my personal workflow.
                This inspired me to create CinePhile - a project born out of a desire for a
                clean, intuitive, and personal space dedicated to my (and hopefully your)
                movie interests.
              </p>

              <Card.Subtitle className="mt-3 mb-2 text-muted">Key Features</Card.Subtitle>
              <ul>
                <li>Effortless Movie Search</li>
                <li>Comprehensive Movie Details</li>
                <li>Personalized Watchlist</li>
                <li>"Mark as Watched" Functionality</li>
              </ul>

              <Card.Subtitle className="mt-3 mb-2 text-muted">About the Creator</Card.Subtitle>
              <p>
                Hi, I'm Luka, the creator of CinePhile. My passion for film spans a
                wide range of genres .
              </p>

              <Card.Subtitle className="mt-3 mb-2 text-muted">How to Use CinePhile</Card.Subtitle>
              <ul>
                <li>Search for Movies using the search bar.</li>
                <li>Explore Details by clicking on a movie.</li>
                <li>Add to Watchlist on the movie details page.</li>
                <li>View Your Watchlist on the "Watchlist" page.</li>
                <li>Mark as Watched on your watchlist.</li>
              </ul>

              <Card.Subtitle className="mt-3 mb-2 text-muted">Questions, Ideas, & Contact</Card.Subtitle>
              <p>
                CinePhile is a continuously evolving project, and your feedback is invaluable.
                If you have any questions, ideas, or wishes, please feel free to reach out
                at <a href="mailto:[luka.slavianin@gmail.com]" className='contact-link'>luka.slavianin@gmail.com</a> .
              </p>

              <p className="mt-3">Thank you for exploring CinePhile! Happy viewing!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}