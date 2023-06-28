import React from 'react';
import style from '../BtnCreate/BtnCreate.module.css';

const BtnCreate = ({ flag }) => {

	if (flag) {
		return 
		<button className={style.Btn}>Create</button>;
	}

	return <button className={style.Btn2}>+</button>;
};

export default BtnCreate;    