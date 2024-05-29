import { CDN_URL } from "../utils.js/constants";


const ItemList = ({ item }) => {
    // console.log(item)
    return (
        <div>
            {item.map((items) => (
                <div key={items.card.info.id} className="border-b-2 shadow-sm p-2 m-2 flex justify-between">
                    <div className="w-9/12">
                     <div className="text-left pb-2 py-2">
                        <span className="font-semibold ">{items.card.info.name}</span>
                        <span>- ₹{items.card.info.defaultPrice ? items.card.info.defaultPrice/100 : items.card.info.price/100 }</span>
                     </div>
                     <p className="text-slate-500 text-sm text-justify">{items.card.info.description}</p>
                     </div>
                    <div className="w-3/12 p-2">
                        <img src={CDN_URL + items.card.info.imageId} alt="items.card.info.imageId" className="rounded-lg w-full h-full" />
                        <div className="relative bottom-4">
                         <button className="bg-white text-lg px-2 hover:shadow-lg font-semibold text-green-700">ADD</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList