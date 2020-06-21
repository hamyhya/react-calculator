import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'reactstrap'

export default class Home extends Component {
  render() {
    return(
      <>
        <center>
          <div className='calculator'>
            <Row>
              <Col className='nav'>
                <button className='cl' />
                <button className='min' />
                <button className='full' />
              </Col>
              <Col>
                <Input className='input' />
              </Col>
            </Row>
            <Row className='row-btn'>
              <Col>
                <Button className='btn btn-dark'>AC</Button>
                <Button className='btn btn-dark'>+/-</Button>
                <Button className='btn btn-dark'>%</Button>
                <Button className='btn btn-orange'>/</Button>
              </Col>
              <Col className='col-btn'>
                <Button className='btn btn-light'>7</Button>
                <Button className='btn btn-light'>8</Button>
                <Button className='btn btn-light'>9</Button>
                <Button className='btn btn-orange'>X</Button>
              </Col>
              <Col className='col-btn'>
                <Button className='btn btn-light'>4</Button>
                <Button className='btn btn-light'>5</Button>
                <Button className='btn btn-light'>6</Button>
                <Button className='btn btn-orange'>-</Button>
              </Col>
              <Col className='col-btn'>
                <Button className='btn btn-light'>1</Button>
                <Button className='btn btn-light'>2</Button>
                <Button className='btn btn-light'>3</Button>
                <Button className='btn btn-orange'>+</Button>
              </Col>
              <Col className='col-btn'>
                <Button className='btn-zero'>0</Button>
                <Button className='btn btn-light'>.</Button>
                <Button className='btn btn-orange'>=</Button>
              </Col>
            </Row>
          </div>     
        </center>
      </>
    )
  }
}