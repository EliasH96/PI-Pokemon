import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../img/error.jpg';

const Error = () => {
	const Container = styled.div`
		font-family: 'Poppins';
		color: #4b4337;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: end;
		position: relative;
	`;

	const ContainerImg = styled.div`
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: start;
		background-image: url(${bg});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 80vh;
		width: 70vw;
		@media (max-width: 900px) {
			& {
				width: 100vw;
			}
		}
	`;

	const Title = styled.h1`
		margin: 80px auto 0px;
		font-weight: 700;
		font-size: 50px;
		letter-spacing: 2px;
		@media (max-width: 900px) {
			& {
				font-size: 40px;
			}
		}
	`;

	const Msg = styled.p`
		font-size: 30px;
	`;
	const SVG = styled.svg`
		text-decoration: none;
		color: #4b4337;
		width: 60px;
		position: absolute;
		top: 40px;
		left: 40px;

		@media (max-width: 900px) {
			& {
				width: 40px;
				top: 20px;
				left: 10px;
			}
		}
		&:hover {
			transform: scale(1.2);
			transition: 1s ease-in-out;
			color: #36a0e7;
		}
	`;

	return (
		<Container>
			<NavLink to='/home'>
				<SVG
					xmlns='http://www.w3.org/2000/svg'
					class='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
					/>
				</SVG>
			</NavLink>
			<Title>Missing Page...</Title>
			<Msg>Error 404</Msg>
			<ContainerImg></ContainerImg>
		</Container>
	);
};

export default Error;
