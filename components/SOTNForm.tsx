import React, { FormEvent } from 'react';
import { Form, Row, Col, Button, InputGroup, Alert } from 'react-bootstrap';

export default function SOTNWinnerForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      date: event.target.streamDate.value,
      youtubeId: event.target.youtubeId.value
    };

    const endpoint = '/api/sotn';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    setSubmitted(true);

    // alert(`SOTN submitted: ${result.data}`);
    return result.data;
  };

  return (
    <>
      {submitted && (
        <Alert key='success' variant='success'>
          Song of the Night Winner Saved!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control name='username' placeholder='Username' required />
          </Form.Group>
          <Form.Group as={Col} controlId='formDate'>
            <Form.Label>Stream Date</Form.Label>
            <Form.Control
              name='streamDate'
              type='date'
              placeholder='mm/dd/yyyy'
              required
            />
          </Form.Group>
        </Row>

        <Form.Label htmlFor='youtubeId'>YouTube ID</Form.Label>
        <InputGroup as={Col}>
          <InputGroup.Text id='youtubeIdGroup'>
            https://www.youtube.com/watch?v=
          </InputGroup.Text>
          <Form.Control
            id='youtubeId'
            name='youtubeId'
            aria-describedby='basic-addon3'
            required
          />
        </InputGroup>

        <Form.Group className='mb-3' controlId='formSongTitle'>
          <Form.Label>Song Title</Form.Label>
          <Form.Control name='songTitle' placeholder='Song Title' required />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formArtist'>
            <Form.Label>Artist</Form.Label>
            <Form.Control name='artist' placeholder='Artist' required />
          </Form.Group>

          <Form.Group as={Col} controlId='formFeaturedArtist'>
            <Form.Label>Feat. Artist</Form.Label>
            <Form.Control name='featuredArtist' placeholder='Feat. Artist' />
          </Form.Group>

          <Form.Group as={Col} controlId='formSongYear'>
            <Form.Label>Song Year</Form.Label>
            <Form.Control
              name='songYear'
              placeholder='Song Year'
              required
              type='number'
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId='saveBtn' className='mb-3'>
          <Button variant='primary' type='submit'>
            Save Winner
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
