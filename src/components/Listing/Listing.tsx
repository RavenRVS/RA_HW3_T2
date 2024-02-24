import Offer from '../Offer/Offer';

interface ListingProps {
  items: {
    listing_id: number;
    url: string;
    MainImage: string;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  }[];
}

function Listing(props: ListingProps) {
  const { items } = props;
  const processedItems = items.map(item => {
    const title = item.title && item.title.length > 50 ? item.title.substring(0, 50) + "…" : item.title;
    return {
      ...item,
      title,
    };
  });

  return (
    <div className='item-list'>
      {processedItems.map(item => <Offer key={item.listing_id} item={item} />)}
    </div>
  )
}

export default Listing;