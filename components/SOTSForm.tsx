import { Form, Row, Col, Button } from 'react-bootstrap';

function SOTSSeasonForm() {
  return (
    <>
      <Form>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formStartDate'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control placeholder='MM/DD/YYYY' />
          </Form.Group>
          <Form.Group as={Col} controlId='formStopDate'>
            <Form.Label>End Date</Form.Label>
            <Form.Control placeholder='MM/DD/YYYY' />
          </Form.Group>
        </Row>

        <Button variant='primary' type='submit'>
          Save New Season
        </Button>
      </Form>
      <hr />
      <p>List past seasons here? </p>
    </>
  );
}

export default SOTSSeasonForm;
