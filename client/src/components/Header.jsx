import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import BtnCreate from './BtnCreate';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const LogoImg = styled.img`
		width: 150px;

		@media (max-width: 900px) {
			& {
				width: 150px;
			}
		}
	`;

	const Container = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #1e2125;
		padding: 20px 80px;
		@media (max-width: 900px) {
			& {
				padding: 20px 35px;
				position: sticky;
				top: -0.5px;
				z-index: 1;
				justify-content: center;
			}
		}
	`;

	return (
		<Container>
			<NavLink to='/'>
				<LogoImg src={logo} />
			</NavLink>
			<NavLink to='/create'>
				<BtnCreate flag={true} />
			</NavLink>
		</Container>
	);
};

export default Header;
