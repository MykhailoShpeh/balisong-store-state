import { useState } from "react";

import { Modal } from "@/components/Modal/Modal.jsx"

import template from "@/components/Balisong/template-out-of-stock.jpg";

import css from './Balisong.module.css';

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
    id,
    nameOfKnife,
    brand,
    price,
    typeOfKnife,
    image,
    materials,
    link,
    weight,
    accessories,
    additionalPhotos = [template],
    onActive,
    selectedKnifesIndxs,
}) {
    // console.log("selectedKnifesObjects: ", selectedKnifesObjects);
    // console.log("id :", id)

    const [isOpen, setIsOpen] = useState(false);


    return <>
        <h2 className={css.title}>  {nameOfKnife}</h2>
        <a target='_blank' rel="noopener noreferrer" href={link}><img className={css.image} src={image} alt={nameOfKnife} /></a>
        <button
            type='button'
            className={css.fullInfoTitle}
            onClick={(event) => {
                event.currentTarget.nextElementSibling.classList.toggle(css.active)
                setIsOpen(prev => !prev)
            }}
        >{isOpen ? "Згорнута інформація" : "Повна інформація"}</button>
        <div className={css.fullInfoDiv}>
        <p className={css.text}><FaTrademark size={iconSize.sm} /> Бренд: {brand}</p>
        <p className={css.text}><GiButterflyKnife size={iconSize.sm} /> Тип леза: {typeOfKnife}</p>
        <p className={css.text}><BsCurrencyDollar size={iconSize.sm} /> Ціна: {price} USD</p>
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
        </div>
        <button
            
            className={additionalPhotos[0] === template
                ? `${css.noInStock} ${css.cardButton} `
                : selectedKnifesIndxs.includes(id)
                    ? `${css.cardButton}  ${css.deleteFromCart}`
                    : `${css.cardButton}`
                }
            disabled={additionalPhotos[0] === template}
            type='button'
            onClick={() => { onActive(id) }}
        >
            {selectedKnifesIndxs.includes(id)
                ? "Видалити із кошика" : "Додати до кошика"
            }
        </button>
    </>
}