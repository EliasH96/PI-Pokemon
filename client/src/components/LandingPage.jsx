import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../img/1.jpg';

const LandingPage = () => {
	const ContainerLanding = styled.div`
		height: 100vh;
		background: url(${bg});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const LandingH1 = styled.h1`
		font-family: 'Poppins';
		color: #1d1c1c;
		margin: 80px 0 0px;
		font-size: 80px;
		font-style: italic;
	`;

	const LandingBtn = styled.button`
		font-size: 30px;
		width: 200px;
		padding: 10px;
		border-radius: 10px;
		background-color: #1170ec;
		color: #fff;
		border: 1px solid #242323;
		cursor: pointer;
		margin: 0 auto 100px;
		&:hover {
			background-color: #1ca0ec;
		}
	`;

	return (
		<ContainerLanding>
			<LandingH1>POKE API</LandingH1>
			<NavLink to='/home'>
				<LandingBtn>Enter</LandingBtn>
			</NavLink>
		</ContainerLanding>
	);
};

export default LandingPage;
