import data from '../../data/etsy.json';
import { IData } from '../../models/IData';
import { Item } from '../Item/Item';

export const Listing = () => {
    let newObject: IData;
    const arr: IData[] = [];
    for( const item of data ) {
        const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;
        const url_570xN = MainImage && MainImage.url_570xN;
        newObject = { listing_id, url, MainImage: url_570xN , title, currency_code, price, quantity } ;
        arr.push(newObject)
    }
    console.log(arr)
  return (
    <div className="item-list">
        {arr.map(el => (
            <Item key={el.listing_id} item={el} />
        ))}
    </div>
  )
}
