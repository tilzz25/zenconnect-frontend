import { faHireAHelper } from "@fortawesome/free-brands-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faCross } from "@fortawesome/free-solid-svg-icons"
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain"
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons/faHeartCirclePlus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useState } from "react"
import { Button, Card, FloatingLabel, Form } from "react-bootstrap"

const LandingMessageComponent = () => {
    let [chatMessage, setChatMessage] = useState("")

    const handleMessage = (e) => setChatMessage(e.target.value)    

    const fetchMessage = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/chatbot?message=${chatMessage}`)
           localStorage.setItem("message", res.data.message)
        } catch (error) {
            console.error(error)
        }
     
    }

    return(
        <Card className="m-4 border-0 rounded-4 text-center card-box shadow bg-primary">
            <Card.Body className="bg-primary rounded text-white">
            <Card.Title>Mental Health</Card.Title>
                Your mental health is our main concern
                <hr/>
                <FloatingLabel className="text-secondary" controlId="floatingTextarea2" label="How are you feeling today?">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        className="bg-light text-dark"
                        onChange={handleMessage}
                    />
                </FloatingLabel>
                <Button onClick={fetchMessage} variant="warning" size="md" className="m-2 shadow-sm fw-bold">
                    <FontAwesomeIcon icon={faBrain} className="text-light"/>
                    <span className="m-1 text-light">Get Help</span> 
                </Button>
            </Card.Body>
        </Card>
    )
}

const LandingSupportComponent = () => {
    return (
        <div className="d-sm-flex justify-content-center m-2">
            <Card className="m-2 border-0">
                <Card.Body className="shadow-sm bg-secondary text-white">
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="xl" icon={faHeartCirclePlus} />
                        </div>
                         <span>Therapy Sessions </span>      
                    </Card.Title>
                    <Card.Body>Some message on Therapy sessions</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-2 border-0 bg-primary text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="xl" icon={faFaceSmile} />
                        </div>
                        <span>Mood Tracking</span>
                    </Card.Title>
                    <Card.Body>Some message on mood tracking</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-2 border-0 bg-success text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">
                        <div className="svg-icon">
                            <FontAwesomeIcon className="m-3" size="xl" icon={faCross} />
                        </div>
                        <span>Mood Support</span>
                    </Card.Title>
                    <Card.Body>Some message on mood support</Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export {
    LandingMessageComponent,
    LandingSupportComponent
}