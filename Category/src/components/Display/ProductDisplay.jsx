const ProductDisplay = ({ products, selectedCategoryId }) => {
  const filtered = selectedCategoryId
    ? products.filter(p => p.categoryId === selectedCategoryId)
    : products;

  return (
    <div className="w-3/4 p-4">
      <h2>Products</h2>
      {filtered.map(p => (
        <div key={p.id}>{p.name} - ${p.price}</div>
      ))}
    </div>
  );
};

export default ProductDisplay;