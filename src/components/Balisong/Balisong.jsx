import css from './Balisong.module.css';

import {Modal} from "@/components/Modal/Modal.jsx"

//! Ім'я ножа
import { FiTag } from "react-icons/fi";
//! Марка
import { FaTrademark } from "react-icons/fa";
//! Ціна
import { BsCurrencyDollar } from "react-icons/bs";
//! Тип ножа 
import { GiButterflyKnife } from "react-icons/gi";
//! Матеріали
import { FiLayers } from "react-icons/fi";
//! Вага
import { FaWeightHanging } from "react-icons/fa";
//! Аксесуари
import { FiTool } from "react-icons/fi";

import { iconSize } from '@/constants/iconSize.js'

// import { Card } from './Balisong.styled.jsx'

export function Balisong({
    nameOfKnife,
    brand,
    price,
    typeOfKnife,
    image,
    materials,
    link,
    weight,
    accessories,
    additionalPhotos
}) {
    return <>
        <h2 className={css.title}><FiTag /> Ім'я: {nameOfKnife}</h2>
        <p className={css.text}><FaTrademark size={iconSize.sm} /> Бренд: {brand}</p>
        <a target='_blank' rel="noopener noreferrer" href={link}><img className={css.image} src={image} alt={nameOfKnife} /></a>
        <p className={css.text}><GiButterflyKnife size={iconSize.sm} /> Тип леза: {typeOfKnife}</p>
        <p className={css.text}><BsCurrencyDollar size={iconSize.sm} /> Ціна: {price}</p>
        <p className={css.text}><FiLayers size={iconSize.sm} />Матеріали: {materials}</p>
        <p className={css.text}><FaWeightHanging size={iconSize.sm} />Вага: {weight}</p>
        <p><FiTool size={iconSize.sm} /> Аксесуари: {accessories}</p>

        {/* <div className={css.divImg}>
            {additionalPhotos.map(item =>
                <img
                    src={item}
                    alt={nameOfKnife}
                    className={css.img}
                />
            )}
        </div> */}

        <Modal
            images={additionalPhotos}
            name={nameOfKnife}
        />
    </>
}