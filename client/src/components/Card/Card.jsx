import React from 'react';
import style from './Card.module.css';
import NoImg from '../../img/NoImg.png';
import { NavLink } from "react-router-dom";

export default function Card({ id, name, img, types }) {

	return (
		<div>
			<NavLink className={style.none} to={`/pokemons/${id}`}>
				<div>
					<img className={style.img} src={img ? img : NoImg} alt="img not found" width="200px" height="250vh" />
					<h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
					<div className={style.types}>
						{
							types?.map((e, k) => {
								return (
									<div className={style.types} key={k}>
										<img className={style.typesImg} src={e.img} alt='X' />
										<p className={style.text}>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
									</div>
								)
							})
						}
					</div>
				</div>
			</NavLink>
		</div>
	);
};
