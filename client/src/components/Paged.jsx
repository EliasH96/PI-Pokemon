import React from 'react';
import styled from 'styled-components';
const Paged = ({ pokemonsLength, pokePerPage, currentPage, paged }) => {
	const PagesNav = styled.nav`
		color: white;
		position: absolute;
		bottom: 20px;
		right: 0;
		left: 0;
		@media (max-width: 900px) {
			& {
				position: static;
				padding: 10px 0 0;
			}
		}
	`;
	const UList = styled.ul`
		display: flex;
		justify-content: center;
		text-decoration: none;
		padding-left: 0px;
		@media (max-width: 900px) {
			& {
				margin: 0;
			}
		}
	`;
	const Li = styled.li`
		list-style: none;
		padding: 20px;
		margin: 0 20px;
		cursor: pointer;

		@media (max-width: 900px) {
			& {
				margin: 0px;
			}
		}
	`;

	const SelectLi = styled.li`
		list-style: none;
		padding: 20px;
		margin: 0 20px;
		cursor: pointer;
		background-color: #1170ec;
		border-radius: 5px;
		@media (max-width: 900px) {
			& {
				margin: 0px;
			}
		}
	`;

	const arrayPages = [];
	for (let i = 0; i < Math.ceil(pokemonsLength / pokePerPage); i++) {
		arrayPages.push(i + 1);
	}

	return (
		<PagesNav>
			<UList>
				{arrayPages?.map((n) => {
					return n !== currentPage ? (
						<a onClick={() => paged(n)}>
							<Li key={`a${n}`}>{n}</Li>
						</a>
					) : (
						<a onClick={() => paged(n)}>
							<SelectLi key={`c${n}`}>{n}</SelectLi>
						</a>
					);
				})}
			</UList>
		</PagesNav>
	);
};

export default Paged;
