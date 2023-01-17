import ProductCard from '../ProductCard/ProductCard';

const ProductFeed = ({ product }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {product.map((data, i) => (
        <ProductCard data={data} key={i} />
      ))}
    </div>
  );
};

export default ProductFeed;
