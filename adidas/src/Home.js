import React, { Component } from 'react';
import { Row, Col, Radio, Carousel, Card } from 'antd';
import CustomTable from './CustomTable.js';
import TimeSeries from './TimeSeries.js';
import Heatmap from './Heatmap.js';
import { emotionDict, genderDict } from './util.js';
import 'antd/dist/antd.css';
import 'react-vis/dist/style.css';
const RadioGroup = Radio.Group;
const { Meta } = Card;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEmotion: 'happy',
      faces: [{
        "face_id": "xxx",
        "camera_id": "xxx",
        "gender": "male",
        "age": {
          "min": 30,
          "max": 40,
        },
        "emotions": {
          "happy": 0.234,
          "sad": null,
          "angry": null,
          "confused": null,
          "disgusted": null,
          "surprised": null,
          "smile": 0.42432,
          "calm": null,
        },
        "p1": 100,
      }, {
        "face_id": "xxx",
        "camera_id": "xxx",
        "gender": "male",
        "age": {
          "min": 30,
          "max": 40,
        },
        "emotions": {
          "happy": 0.234,
          "sad": null,
          "angry": null,
          "confused": null,
          "disgusted": null,
          "surprised": null,
          "smile": 0.42432,
          "calm": null,
        },
        "p1": 100,
      }],
    }
  }

  onChange = (e) => {
    this.setState({
      selectedEmotion: e.target.value,
    });
  }

  render() {
    const { selectedEmotion, faces } = this.state;

    const radioButtons = [];
    for (const emotion in emotionDict) {
      radioButtons.push(<Radio key={emotion} value={emotion}>{emotionDict[emotion]}</Radio>);
    }

    return (
      <div>
        <Row>
          <Col span={10}>
            <Carousel style={{backgroundColor: 'black'}}>
              <Card
                hoverable
                cover={<img alt="example" src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png" style={{height: 300}} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                cover={<img alt="example" src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png" style={{height: 300}} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Carousel>
          </Col>
          <Col span={11}>
            <CustomTable faces={faces} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{textAlign: 'center'}}>
            <RadioGroup onChange={this.onChange} value={this.state.selectedEmotion}>
              {radioButtons}
            </RadioGroup>
          </Col>
        </Row>
        <TimeSeries selectedEmotion={selectedEmotion} faces={faces} />
        <Heatmap selectedEmotion={selectedEmotion}  faces={faces} />
      </div>
    );
              }
}

export default Home;
