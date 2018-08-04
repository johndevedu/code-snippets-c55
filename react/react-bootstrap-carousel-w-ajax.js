// using react bootstrap carousel
// - ajax call
// - separation of concern

import React from "react";
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";
import * as carouselImagesService from "../../services/carouselImage.service";
import "./NonUserHomePage.css"

class NonUserHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselImages: []
            , displayOrder: ""
        }
    }

    componentDidMount() {
        // ... removing for brevity

        carouselImagesService.readAll().then(data => {
            this.setState({ carouselImages: data.items });
        });
    }

    render() {
        const list = this.state.carouselImages ? (

            this.state.carouselImages.sort((a, b) => a.displayOrder - b.displayOrder).map((data, index) => (
                <Carousel.Item key={data._id}>
                    <img style={{ width: '100%', height: "calc(100vh - 50px)" }} className="fix-size" src={data.url} />
                    <Carousel.Caption>
                        <h1>{data.captionHeader}</h1>
                        <p>{data.captionDetail}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))) : (<React.Fragment />);
        return (
            <div id="home-body">
                {/* ...removed for brevity */}

                <header>
                    <Carousel>
                        {list}
                    </Carousel>
                </header>

                {/* ...removed for brevity */}
            </div>
        )
    }
}


export default NonUserHomePage;
