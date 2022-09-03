import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

function SOTNWinnerForm() {
  return (
    <Form action='/api/sotn' method='post'>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control name='username' placeholder='Username' />
        </Form.Group>
        <Form.Group as={Col} controlId='formDate'>
          <Form.Label>Stream Date</Form.Label>
          <Form.Control
            name='streamDate'
            type='date'
            placeholder='mm/dd/yyyy'
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
        />
      </InputGroup>

      <Form.Group className='mb-3' controlId='formSongTitle'>
        <Form.Label>Song Title</Form.Label>
        <Form.Control name='songTitle' placeholder='Song Title' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formArtist'>
          <Form.Label>Artist</Form.Label>
          <Form.Control name='artist' placeholder='Artist' />
        </Form.Group>

        <Form.Group as={Col} controlId='formFeaturedArtist'>
          <Form.Label>Feat. Artist</Form.Label>
          <Form.Control name='featuredArtist' placeholder='Feat. Artist' />
        </Form.Group>

        <Form.Group as={Col} controlId='formSongYear'>
          <Form.Label>Song Year</Form.Label>
          <Form.Control name='songYear' placeholder='Song Year' />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId='saveBtn' className='mb-3'>
        <Button variant='primary' type='submit'>
          Save Winner
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SOTNWinnerForm;
