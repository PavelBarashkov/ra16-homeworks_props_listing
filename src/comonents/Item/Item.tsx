import { IData } from '../../models/IData'
import { sliceStr, updateClass, updatePrice } from '../../utils';

interface IItemProps {
    item: IData;
}



export const Item = ({item}: IItemProps) => {
    const strr = sliceStr(item.title || '');
    const prace = updatePrice(item.currency_code || '', item.price || '');
    const remainder = updateClass(item.quantity || 0);

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{strr}</p>
                <p className="item-price">{prace}</p>
                <p className={`item-quantity level-${remainder}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}
