import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Merchandise.css';

const products = [
    {
        id: 1,
        name: 'Neon Coffee Mug',
        image: 'https://sw6.elbenwald.de/thumbnail/74/b6/b0/1679614796/E1075886_1_1920x1920.jpg',
        brand: 'Extra Hours',
        description: 'A coffee mug that lights up in neon colors while you sip your coffee.',
        price: '399',
        type: 'mug',
    },
    {
        id: 2,
        name: 'Cyberpunk Thermos Mug',
        image: 'https://cyberpunkcollection.b-cdn.net/wp-content/uploads/2021/01/ia_3600000005-680x680.jpg',
        brand: 'Extra Hours',
        description: 'An insulated thermos mug with a sleek design, perfect for keeping your drinks cold or hot.',
        price: '999',
        type: 'mug',
    },
    {
        id: 3,
        name: 'Cyberpunk Notebook',
        image: 'https://fragstore.com/images/detailed/163/0_3477_1e233cff986ccfc4507f97f022710ce5.png',
        brand: 'Extra Hours',
        description: 'A futuristic notebook to keep records of your past for the future.',
        price: '109',
        type: 'notebook',
    },
    {
        id: 4,
        name: 'Holographic Notebook',
        image: 'https://down-ph.img.susercontent.com/file/e823551867f05a23337dfdd7b9a58f53.webp',
        brand: 'Extra Hours',
        description: 'A holographic notebook that captures the essence of cyberpunk design.',
        price: '159',
        type: 'notebook',
    },
    {
        id: 5,
        name: 'Rancid Nation x Extra Hours Shark Tank Graphic Tee',
        image: 'https://www.rancidnation.com/image/cache/catalog/111111111111Akungfu/anime%20teez11-750x750.gif',
        brand: 'Extra Hours, Rancid Nation',
        description: 'First ever collab of Rancid Nation and Extra Hours',
        price: '499',
        type: 'graphic tee',
    },
    {
        id: 6,
        name: 'Retro Graphic Tee',
        image: 'https://techwearstorm.com/cdn/shop/files/segawa-oversized-t-shirt-black-m-techwear-storm-849_2000x.jpg?v=1716090150',
        brand: 'Extra Hours',
        description: 'A retro-styled graphic tee that celebrates vintage designs.',
        price: '499',
        type: 'graphic tee',
    },
    {
        id: 7,
        name: 'Cyberpunk Stainless Steel Tumbler',
        image: 'https://static.wixstatic.com/media/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg/v1/fill/w_704,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg',
        brand: 'Extra Hours',
        description: 'A sleek stainless steel tumbler that shines with every movement, ideal for carrying your essentials.',
        price: '899',
        type: 'tumbler',
    },
    {
        id: 8,
        name: 'Cyberpunk Travel Mug',
        image: 'https://i.etsystatic.com/37182844/r/il/5b4cc1/5737768938/il_794xN.5737768938_5jet.jpg',
        brand: 'Extra Hours',
        description: 'A stylish travel mug designed for coffee lovers on the go.',
        price: '599',
        type: 'mug',
    },
    {
        id: 9,
        name: 'Cyberpunk City Tote Bag',
        image: 'https://ctl.s6img.com/society6/img/VLC-UUVCzevp-MaToPEQIN4_oCY/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/96e17e9d43fa4af7a04a8ab4533c2908/~~/cyberpunk-city1904814-bags.jpg?attempt=0',
        brand: 'Extra Hours',
        description: 'A stylish holographic tote bag perfect for carrying your essentials while adding a touch of cyberpunk flair.',
        price: '499',
        type: 'tote bag',
    },
    {
        id: 10,
        name: 'Cyberpunk Weekend Bag',
        image: 'https://ctl.s6img.com/society6/img/_E6H244OARySGheph40Lf5tLRBg/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/a22efae6866f4ebd92d176d344ff02de/~~/japanese-cyberpunk-bags.jpg?attempt=0',
        brand: 'Extra Hours',
        description: 'A durable weekend bag designed for short trips with a cyberpunk aesthetic.',
        price: '499',
        type: 'tote bag',
    },
    {
      id: 11,
      name: 'Cyber Graphic Sweater',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71INBaactSL.jpg',
      brand: 'Extra Hours',
      description: 'A black and white sweater featuring bold digital patterns in a loose, futuristic design',
      price: '499',
      type: 'graphic tee',
    },
    {
      id: 12,
      name: 'OniCyborg Graphic Tee',
      image: 'https://m.media-amazon.com/images/I/B1HVVUyLAhL._CLa%7C2140%2C2000%7C81m2VA2gZ5L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
      brand: 'Extra Hours',
      description: 'The OniCyborg tee blends bold black and red oni cybernetic designs.',
      price: '499',
      type: 'graphic tee',
    },
];

const filterOptions = [
    { label: 'Mugs', value: 'mug' },
    { label: 'Notebooks', value: 'notebook' },
    { label: 'T-Shirts', value: 'graphic tee' },
    { label: 'Tote Bags', value: 'tote bag' },
    { label: 'Tumblers', value: 'tumbler' },
];

const Merchandise = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterByType = (type) => {
        if (type === "all") {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(product => product.type === type);
            setFilteredProducts(newFilteredProducts);
        }
    };

    const getAvailableFilters = () => {
        const availableFilters = new Set();
        products.forEach(product => {
            filterOptions.forEach(option => {
                if (product.type === option.value) {
                    availableFilters.add(option);
                }
            });
        });
        return Array.from(availableFilters);
    };

    return (
        <div className="merchandise-container">
            <div className="overlay"></div>
            <div className="content">
                <h1 className="main-title">Merchandise</h1>
                <div className="merchandise-content">
                    <div className="filter-section">
                        <h2>Filter by Type</h2>
                        {getAvailableFilters().map((filter) => (
                            <button key={filter.value} onClick={() => filterByType(filter.value)}>
                                {filter.label}
                            </button>
                        ))}
                        <button onClick={() => filterByType("all")}>Show All</button>
                    </div>
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <Link to={`/item/${product.id}`}>
                                    <div className="holographic-box">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <h2 className="product-name">{product.name}</h2>
                                        <p className="short-description">{product.description}</p>
                                        <div className="product-price">{product.price}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Merchandise;