import React, { FormEvent } from 'react';
import { Form, Row, Col, Button, InputGroup, Alert } from 'react-bootstrap';

const kentobotApiEndpoint = '41omotk1zh.execute-api.us-east-1.amazonaws.com';

export default function SOTNWinnerForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const username = event.target.username.value;
    const date = event.target.streamDate.value;
    const youtubeId = event.target.youtubeId.value;

    const endpoint = `https://${kentobotApiEndpoint}/dev/song-requests/request/${youtubeId}?date=${date}&requester=${username}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': '9kJYm9CU2k4Ra74btZsFt3uP7qY8gGtD3zuGA74z'
      },
      body: JSON.stringify({
        sotnWinner: true,
        featuredArtist: event.target.featuredArtist?.value,
        songYear: event.target.songYear?.value
      })
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (response.status != 200) {
      setError(result.data);
      return;
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      {submitted && (
        <Alert key='success' variant='success'>
          Song of the Night Winner Saved!
        </Alert>
      )}
      {error && (
        <Alert key='error' variant='error'>
          {error}
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
