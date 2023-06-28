import React from 'react';
import styled from 'styled-components';
import gif from '../img/2.gif';

const Loaded = () => {
	const Gif = styled.img`
		width: 150px;
		display: inline;
		margin: 150px auto 40px;
	`;

	const ContainerGif = styled.div`
		height: 100vh;
		background-color: #141414;
		color: #fff;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0px;
		right: 0px;
	`;

	const Text = styled.p`
		font-size: 20px;
		letter-spacing: 10px;
		margin-top: 100px;
	`;

	return (
		<ContainerGif>
			{/* {<Gif src={gif} /> && <Text>Don´t Find Anything...</Text>} */}
		</ContainerGif>
	);
};

export default Loaded;
