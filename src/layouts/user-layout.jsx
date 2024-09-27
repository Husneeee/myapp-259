import React from "react";
import { Header } from "../components/00-common/header";
import { MainMenu } from "../components/00-common/main-menu";
import { Footer } from "../components/00-common/footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export const UserLayout = () => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Header />
			<Container className="flex-grow-1 my-4">
				<Row>
					<Col sm={4} lg={3} xl={2}>
						<MainMenu />
					</Col>
					<Col sm={8} lg={9} xl={10}>
						<Outlet />
					</Col>
				</Row>
			</Container>

			<Footer />
		</div>
	);
};