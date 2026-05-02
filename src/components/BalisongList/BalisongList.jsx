import PropTypes from 'prop-types';

import { Balisong } from '@/components/Balisong/Balisong.jsx';

import css from './BalisongList.module.css';

import {List, Card} from './BalisongList.styled.jsx'

export function BalisongList({ items, onActive }) {
    return (
        <ul className={css.list}>
            {items.map
                ((item, index) =>
                    <li className={css.card} key={item.id}>
                        <Balisong
                            id={item.id}
                            index={index}
                            nameOfKnife={item.nameOfKnife}
                            brand={item.brand}
                            price={item.price}
                            typeOfKnife={item.typeOfKnife}
                            image={item.image}
                            materials={item.materials}
                            link={item.link}
                            weight={item.weight}
                            accessories={item.accessories}
                            additionalPhotos={item.photos}
                            onActive={onActive}
                        />
                    </li>
                )}
        </ul>
    )

    // return (
    //     <List>
    //         {items.map
    //             (item =>
    //                 <Card key={item.id}>
    //                     <Balisong
    //                         nameOfKnife={item.nameOfKnife}
    //                         brand={item.brand}
    //                         price={item.price}
    //                         typeOfKnife={item.typeOfKnife}
    //                         image={item.image}
    //                         materials={item.materials}
    //                         link={item.link}
    //                         weight={item.weight}
    //                         accessories={item.accessories}
    //                     />
    //                 </Card>
    //             )}
    //     </List>
    // )
};

BalisongList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};