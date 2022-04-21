import {Button, Form, Row, Col } from "react-bootstrap";
import {useState} from 'react';
import './CreateForm.css';

function CreateForm (props) {
    const [theAge, setTheAge] = useState('');
    const [theWeight, setTheWeight] = useState('');
    const [theSex, setTheSex] = useState('');
    const [theHeightFt, setTheHeightFt] = useState('');
    const [theHeightIn, setTheHeightIn] = useState('');
    const [theActivityLevel, setTheActivityLevel] = useState('');
    const {setFormData, setIsOpen} = props;
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const submitHandler = (e) => {
      e.preventDefault();

      if (!theAge || !theWeight || !theSex || !theHeightFt || !theHeightIn || !theActivityLevel) {
          setMessage('Try Again! No Empty Values Allowed');
          setStatus('error')
      } else {
        setMessage(`You added the event ${theAge}!`);
        setStatus('success')
        setFormData([theAge,theWeight, theSex, theHeightFt, theHeightIn, theActivityLevel]);
        setIsOpen(false);
    }
    }

    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        if (!theAge || !theWeight || !theSex || !theHeightFt || !theHeightIn || !theActivityLevel) {
            setMessage('Try Again! No Empty Values Allowed');
            setStatus('error')
        } else {
          setMessage(`You added the event ${theAge}!`);
          setStatus('success')
          setFormData([theAge,theWeight, theSex, theHeightFt, theHeightIn, theActivityLevel]);
          setIsOpen(false);
      }
    }
  }

    return (
      <div className='create-new-event'>
        <div className={'message ' + status}>{message}</div>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control 
                type="number" 
                min="0" 
                step="1" 
                value={theAge}
                onKeyDown={keyDownHandler}
                onChange={(e) => setTheAge(e.target.value)}/>
          </Form.Group>
          <br />
          <Form.Group controlId="formWeight">
            <Form.Label>Weight (lbs)</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="" 
                min="0" 
                step="1"
                value={theWeight}
                onKeyDown={keyDownHandler}
                onChange={(e) => setTheWeight(e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group controlId="formSex">
          <Form.Label>Biological Sex</Form.Label>
            <Form.Select 
              value={theSex} 
              onKeyDown={keyDownHandler}
              onChange={(e) => setTheSex(e.target.value)}>
                <option hidden></option>
                <option>Male</option>
                <option>Female</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group controlId='height'>
              <Row>
                  <Col>
                    <Form.Label>Feet</Form.Label>
                    <Form.Control 
                        type="number"
                        value={theHeightFt}
                        onKeyDown={keyDownHandler}
                        onChange={(e) => setTheHeightFt(e.target.value)}
                        />
                  </Col>
                  <Col>
                    <Form.Label>Inches</Form.Label>
                    <Form.Control 
                        type="number"
                        value={theHeightIn}
                        onKeyDown={keyDownHandler}
                        onChange={(e) => setTheHeightIn(e.target.value)}/>
                  </Col>
              </Row>
          </Form.Group>
          <br />
          <Form.Group className="activity-levels">
              <Form.Label>Physical Activity Levels/Week</Form.Label>
              <Form.Select 
                value={theActivityLevel} 
                onKeyDown={keyDownHandler}
                onChange={(e) => setTheActivityLevel(e.target.value)} >
                  <option hidden></option>
                  <option>Little/No Exercise</option>
                  <option>Lightly Active (1-2 days/week)</option>
                  <option>Moderately Active (3-5 days/week)</option>
                  <option>Very Active (6-7 days/week)</option>
                  <option>Extremely Active (Hard Daily Exercise or Twice a Day)</option>
              </Form.Select>
          </Form.Group>
          <br/>
          <div className="text-center">
            <Button 
              onClick={submitHandler} 
              className='submitButton'
            >
            Get your Calorie Info!
            </Button>
          </div>
        </Form>
      </div>
      );

}

export default CreateForm;