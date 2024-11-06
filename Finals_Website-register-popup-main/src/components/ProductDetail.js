import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css_files/ProductDetail.css';

const products = [
    {
        id: 1,
        name: 'Neon Coffee Mug',
        images: [
            'https://sw6.elbenwald.de/thumbnail/74/b6/b0/1679614796/E1075886_1_1920x1920.jpg',
            'https://sw6.elbenwald.de/thumbnail/96/bf/9d/1679614905/E1075886_2_1920x1920.jpg',
        ],
        brand: 'Extra Hours',
        description: 'A coffee mug that lights up in neon colors while you sip your coffee.',
        price: '399',
        type: 'mug',
    },
    {
        id: 2,
        name: 'Cyberpunk Thermos Mug',
        images: [
            'https://cyberpunkcollection.b-cdn.net/wp-content/uploads/2021/01/ia_3600000005-680x680.jpg',
            'https://cyberpunkcollection.b-cdn.net/wp-content/uploads/2021/01/Cyberpunk-thermos-Mug-680x680.jpg',
            'https://cyberpunkcollection.b-cdn.net/wp-content/uploads/2021/01/Cyberpunk-thermos-Mug-1-680x680.jpg',
        ],
        brand: 'Extra Hours',
        description: 'An insulated thermos mug with a sleek design, perfect for keeping your drinks cold or hot.',
        price: '999',
        type: 'mug',
    },
    {
        id: 3,
        name: 'Cyberpunk Notebook',
        images: [
            'https://fragstore.com/images/detailed/163/0_3477_1e233cff986ccfc4507f97f022710ce5.png',
            'https://fragstore.com/images/detailed/163/0_3477_62acf8d6856eb8597fadc1d681dc4f8a.png',
            'https://fragstore.com/images/detailed/163/0_3477_2c1638696ade254e395a9a4e119f2de0.png',
            'https://fragstore.com/images/detailed/163/0_3477_fd20e2236d09fa52672ee4ffcbdd76e6.png',
        ],
        brand: 'Extra Hours',
        description: 'A futuristic notebook to keep records of your past for the future.',
        price: '109',
        type: 'notebook',
    },
    {
        id: 4,
        name: 'Holographic Notebook',
        images: [
            'https://down-ph.img.susercontent.com/file/e823551867f05a23337dfdd7b9a58f53.webp',
            'https://down-ph.img.susercontent.com/file/e1a99d8eb810300e2acdbb8825380b87.webp',
            'https://down-ph.img.susercontent.com/file/5570b7bf9c744d1fb001d4a6024f888f.webp',
        ],
        brand: 'Extra Hours',
        description: 'A holographic notebook that captures the essence of cyberpunk design.',
        price: '159',
        type: 'notebook',
    },
    {
        id: 5,
        name: 'Rancid Nation x Extra Hours Shark Tank Graphic Tee',
        images: [
            'https://www.rancidnation.com/image/cache/catalog/111111111111Akungfu/anime%20teez11-750x750.gif',
            'https://www.rancidnation.com/image/cache/catalog/111111111111Akungfu/anime%20teez11b-750x750.gif',
        ],
        brand: 'Extra Hours, Rancid Nation',
        description: 'Showcases the legendary Shark Tank ready for action',
        price: '499',
        type: 'graphic tee',
    },
    {
        id: 6,
        name: 'Retro Graphic Tee',
        images: [
            'https://techwearstorm.com/cdn/shop/files/segawa-oversized-t-shirt-black-m-techwear-storm-849_2000x.jpg?v=1716090150',
            'https://techwearstorm.com/cdn/shop/files/segawa-oversized-t-shirt-white-m-techwear-storm-852_2000x.jpg?v=1716090150',
        ],
        brand: 'Extra Hours',
        description: 'A retro-styled graphic tee that celebrates vintage designs.',
        price: '499',
        type: 'graphic tee',
    },
    {
        id: 7,
        name: 'Cyberpunk Stainless Steel Tumbler',
        images: [
            'https://static.wixstatic.com/media/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg/v1/fill/w_704,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg',
            'https://static.wixstatic.com/media/ea07e6_1b5f63d0536a41a4a0da50e149deb618~mv2.jpg/v1/fill/w_704,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea07e6_1b5f63d0536a41a4a0da50e149deb618~mv2.jpg',
        ],
        brand: 'Extra Hours',
        description: 'A sleek stainless steel tumbler that shines with every movement, ideal for carrying your essentials.',
        price: '899',
        type: 'tumbler',
    },
    {
        id: 8,
        name: 'Cyberpunk Travel Mug',
        images: [
            'https://i.etsystatic.com/37182844/r/il/5b4cc1/5737768938/il_794xN.5737768938_5jet.jpg',
            'https://i.etsystatic.com/37182844/r/il/3b32d3/5737764850/il_794xN.5737764850_1q4x.jpg',
            'https://i.etsystatic.com/37182844/r/il/bb0158/5785844669/il_794xN.5785844669_6p6a.jpg',
            'https://i.etsystatic.com/37182844/r/il/a73d08/5737773714/il_794xN.5737773714_24fn.jpg'
        ],
        brand: 'Extra Hours',
        description: 'A stylish travel mug designed for coffee lovers on the go.',
        price: '599',
        type: 'mug',
    },
    {
        id: 9,
        name: 'Cyberpunk City Tote Bag',
        images: [
            'https://ctl.s6img.com/society6/img/VLC-UUVCzevp-MaToPEQIN4_oCY/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/96e17e9d43fa4af7a04a8ab4533c2908/~~/cyberpunk-city1904814-bags.jpg?attempt=0',
            'https://ctl.s6img.com/society6/img/CYR8tofK6xhK7By7Wc0ropBZ2Sg/w_700/bags/small/full/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/96e17e9d43fa4af7a04a8ab4533c2908/~~/cyberpunk-city1904814-bags.jpg?attempt=0',
        ],
        brand: 'Extra Hours',
        description: 'A stylish holographic tote bag perfect for carrying your essentials while adding a touch of cyberpunk flair.',
        price: '499',
        type: 'tote bag',
    },
    {
        id: 10,
        name: 'Cyberpunk Weekend Bag',
        images: [
            'https://ctl.s6img.com/society6/img/_E6H244OARySGheph40Lf5tLRBg/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/a22efae6866f4ebd92d176d344ff02de/~~/japanese-cyberpunk-bags.jpg?attempt=0',
            'https://ctl.s6img.com/society6/img/h90rAfCeivjsAAkYyfG0Cm5YQes/w_700/bags/small/full/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/a22efae6866f4ebd92d176d344ff02de/~~/japanese-cyberpunk-bags.jpg?attempt=0',
        ],
        brand: 'Extra Hours',
        description: 'A durable weekend bag designed for short trips with a cyberpunk aesthetic.',
        price: '499',
        type: 'tote bag',
    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [isDescription, setIsDescription] = useState(true); 
    const [isZoomed, setIsZoomed] = useState(false); 
    const [selectedSize, setSelectedSize] = useState('M'); 
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');
    const [userReviews, setUserReviews] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);



    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setQuantity(value);
        }
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim()) {
            setReviews([...reviews, reviewText]);
            setReviewText('');
        }
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail-container">
            <div className="overlay"></div>
            <div className="product-detail">
                <div className="image-gallery">
                    <div className="main-image"
                         onMouseEnter={() => setIsZoomed(true)}
                         onMouseLeave={() => setIsZoomed(false)}>
                        <img src={selectedImage} alt={product.name} className={`product-image ${isZoomed ? 'zoomed' : ''}`} />
                        {isZoomed && (
                            <div className="magnifying-glass">
                                <img src={selectedImage} alt={product.name} className="zoomed-image" />
                            </div>
                        )}
                    </div>
                    <div className="thumbnail-container">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                className="thumbnail"
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <div className="rating">
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className={`star-button ${star <= selectedRating ? 'selected' : ''}`}
                                    onClick={() => setSelectedRating(star)}
                                    aria-label={`${star} star`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>
                    <h3>Price: {product.price}</h3>
                    <hr className="Separator" />
                    {product.type === 'graphic tee' && (
                        <>
                            <div className="size-selection size-spacing">
                                <label>Size:</label>
                                <div className="size-buttons">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <button
                                            key={size}
                                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                            onClick={() => setSelectedSize(size)}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {product.name === 'Retro Graphic Tee' && (
                                <div className="color-selection">
                                    <label>Color: </label>
                                    <div className="color-buttons">
                                        <button
                                            className={`color-button ${selectedColor === 'black' ? 'selected' : ''}`}
                                            onClick={() => {
                                                setSelectedColor('black');
                                                setSelectedImage(product.images[0]); 
                                            }}
                                            style={{ backgroundColor: 'black' }}
                                        ></button>
                                        <button
                                            className={`color-button ${selectedColor === 'white' ? 'selected' : ''}`}
                                            onClick={() => {
                                                setSelectedColor('white');
                                                setSelectedImage(product.images[1]); 
                                            }}
                                            style={{ backgroundColor: 'white' }}
                                        ></button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    <h4>Brand: {product.brand}</h4>

                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        className="quantity-input"
                    />
                    <button className="enter-button">Add to Cart</button>
                    <button className="enter-button">Checkout</button>

                    <div className="description">
                        <h5>Description</h5>
                        <p>{product.description}</p>
                    </div>
                    <div className="reviews">
                        <h3>User Reviews</h3>
                        {userReviews.length > 0 ? userReviews.map((rev, index) => <p key={index}>{rev}</p>) : <p>No reviews yet.</p>}
                        <input
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Write your review..."
                            className="review-input"
                        />
                        <div className="review-submit-container">
                            <button className="button" onClick={handleReviewSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;