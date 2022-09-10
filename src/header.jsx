/*
 * Component for the top-left title.
*/

import { Image } from "antd";
import { Row, Col } from "react-bootstrap";
import MainLogo from "./white.png";

export default function Header(props) {
    return <>
        <div
            style={{
                backgroundColor: "#2c6496",
                top: 0,
                width: "100vw",
            }}
        >
            <div className="d-block d-lg-none">
                <Row>
                    <Col lg={2} style={{paddingTop: 25, paddingLeft: 30}} className="d-flex justify-content-center">
                        <PolicyEngineTitle />
                    </Col>
                    <Col lg={10} style={{padding: 20, paddingTop: 30}}  className="d-flex justify-content-center">
                        <h3 style={{color: "white"}}>Inflation Reduction Act calculator</h3>
                    </Col>
                </Row>
            </div>
            <div className="d-none d-lg-block">
                <Row>
                    <Col lg={2} style={{paddingTop: 15, paddingLeft: 10}} className="d-flex justify-content-center">
                        <PolicyEngineTitle />
                    </Col>
                    <Col lg={10} style={{padding: 20, paddingTop: 25}}>
                        <h3 style={{color: "white"}}>Inflation Reduction Act calculator</h3>
                    </Col>
                </Row>
                
            </div>
        </div>
    </>
}

function PolicyEngineTitle(props) {
	return (
		<a href="/">
			<Image
				src={MainLogo}
				preview={false}
				height={50}
				width={100}
			/>
		</a>
	);
}