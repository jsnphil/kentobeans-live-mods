import { Form, Row, Col, Button } from 'react-bootstrap';

function SOTNWinnerForm() {
  return (
    <Form>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder='Username' />
        </Form.Group>
        <Form.Group as={Col} controlId='formDate'>
          <Form.Label>Stream Date</Form.Label>
          <Form.Control placeholder='mm/dd/yyyy' />
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' controlId='formSongTitle'>
        <Form.Label>Song Title</Form.Label>
        <Form.Control placeholder='Song Title' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formArtist'>
          <Form.Label>Artist</Form.Label>
          <Form.Control placeholder='Artist' />
        </Form.Group>

        <Form.Group as={Col} controlId='formFeaturedArtist'>
          <Form.Label>Feat. Artist</Form.Label>
          <Form.Control placeholder='Feat. Artist' />
        </Form.Group>

        <Form.Group as={Col} controlId='formSongYear'>
          <Form.Label>Song Year</Form.Label>
          <Form.Control placeholder='Song Year' />
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' controlId='formYouTubeUrl'>
        <Form.Label>Song Title</Form.Label>
        <Form.Control placeholder='YouTube URL' />
      </Form.Group>

      <Form.Group as={Col} controlId='saveBtn'>
        <Button variant='primary' type='submit'>
          Save Winner
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SOTNWinnerForm;
