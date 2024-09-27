import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./main-menu.scss";

export const MainMenu = () => {
	const { pathname } = useLocation();

	return (
		<Card style={{ height: "65vh", overflowY: "auto" }}>
			<Card.Body>
				<Nav className="flex-column">
					<Nav.Link
						to="/"
						as={Link}
						active={pathname === "/" ? true : false}
					>
						Home
					</Nav.Link>
					<Nav.Link
						to="/hello-world"
						as={Link}
						active={pathname === "/hello-world" ? true : false}
					>
						Hello World
					</Nav.Link>
					<Nav.Link
						to="/hello-react"
						as={Link}
						active={pathname === "/hello-react" ? true : false}
					>
						Hello React
					</Nav.Link>
					<Nav.Link
						to="/jsx/1"
						as={Link}
						active={pathname === "/jsx/1" ? true : false}
					>
						JSX1
					</Nav.Link>
					<Nav.Link
						to="/jsx/2"
						as={Link}
						active={pathname === "/jsx/2" ? true : false}
					>
						JSX2
					</Nav.Link>
					<Nav.Link
						to="/jsx/3"
						as={Link}
						active={pathname === "/jsx/3" ? true : false}
					>
						JSX3
					</Nav.Link>
					<Nav.Link
						to="/jsx/4"
						as={Link}
						active={pathname === "/jsx/4" ? true : false}
					>
						JSX4
					</Nav.Link>
					<Nav.Link
						to="/jsx/5"
						as={Link}
						active={pathname === "/jsx/5" ? true : false}
					>
						JSX5
					</Nav.Link>
					<Nav.Link
						to="/jsx/6"
						as={Link}
						active={pathname === "/jsx/6" ? true : false}
					>
						JSX6
					</Nav.Link>
					<Nav.Link
						to="/jsx/7"
						as={Link}
						active={pathname === "/jsx/7" ? true : false}
					>
						JSX7
					</Nav.Link>
					<Nav.Link
						to="/style/1"
						as={Link}
						active={pathname === "/style/1" ? true : false}
					>
						Style 1
					</Nav.Link>
					<Nav.Link
						to="/style/2"
						as={Link}
						active={pathname === "/style/2" ? true : false}
					>
						Style 2
					</Nav.Link>
					<Nav.Link
						to="/style/3"
						as={Link}
						active={pathname === "/style/3" ? true : false}
					>
						Style 3
					</Nav.Link>
					<Nav.Link
						to="/style/4"
						as={Link}
						active={pathname === "/style/4" ? true : false}
					>
						Style 4
					</Nav.Link>
					<Nav.Link
						to="/style/5"
						as={Link}
						active={pathname === "/style/5" ? true : false}
					>
						Style 5
					</Nav.Link>

					<Nav.Link
						to="/customers"
						as={Link}
						active={pathname === "/customers" ? true : false}
					>
						Customers
					</Nav.Link>
					<Nav.Link
						to="/use-navigate"
						as={Link}
						active={pathname === "/use-navigate" ? true : false}
					>
						UseNavigate
					</Nav.Link>
					<Nav.Link
						to="/converter"
						as={Link}
						active={pathname === "/converter" ? true : false}
					>
						Exchange
					</Nav.Link>
				</Nav>
			</Card.Body>
		</Card>
	);
};