import React from 'react';
import styled from 'styled-components';

const BtnCreate = ({ flag }) => {
	const Btn = styled.button`
		position: fixed;
		right: 20px;
		bottom: 30px;
		background-color: #1170ec;
		border: none;
		border-radius: 50%;
		font-size: 35px;
		width: 60px;
		height: 60px;
		color: white;
		cursor: pointer;
		z-index: 1;
		box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.55);

		@media (min-width: 900px) {
			& {
				display: none;
			}
		}

		&:hover {
			background-color: #1ca0ec;
		}
	`;
	const Btn2 = styled.button`
		background-color: #1170ec;
		border: none;
		padding: 15px 35px;
		border-radius: 5px;
		font-size: 14px;
		cursor: pointer;
		color: white;

		@media (max-width: 900px) {
			& {
				display: none;
			}
		}

		&:hover {
			background-color: #1ca0ec;
		}
	`;

	if (flag) {
		return <Btn2>Create</Btn2>;
	}

	return <Btn>+</Btn>;
};

export default BtnCreate;
