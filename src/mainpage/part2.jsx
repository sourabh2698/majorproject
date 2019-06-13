import React from 'react'
import { Card, Button, CardColumns, CardDeck, Carousel, CarouselItem } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Cards extends React.Component {
    render() {
        return (
            <Link to="/">
                <div>

                    <Carousel>



                        <CarouselItem>
                            <CardDeck>
                                <Card style={{ width: '18rem', marginTop: 20, marginLeft: 20 }}>
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg" />
                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title >demo</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: 20 }}>
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg" />
                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title >Demo</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: 20 }}>
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg" />
                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title >Demo</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: 20 }}>
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg" />
                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title >Demo</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: 20 }}>
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg" />
                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title >Demo</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </CarouselItem>
                    </Carousel>
                </div>
            </Link>
        )
    }
}
export default Cards;