import React from 'react';
import './LeftNavBar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const LeftNavbar = props => {
	let { barItems } = props;
	
	return ( 
		<div className='left-navbar-container'>
			<Container>
				<ListGroup> 
					{barItems.map( item =>
						<ListGroup.Item as="div" key={item.path}>
							<Link to={item.path}> {item.title} </Link> 
						</ListGroup.Item>
					)} 
				</ListGroup>
			</Container> 
		</div>
		
	);
};

export default LeftNavbar;