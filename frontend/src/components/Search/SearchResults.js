import "./Search.css";

const SearchResults = ({ data }) => {
  if (!data) return null;

  const items = data.map((category) => {
    const { familyId, groupId, name, products } = category;

    const productItems = products.map((product) => {
      const { typeId, groupId, name } = product;

      return (
        <div
          className="SearchResult__item-product"
          key={`typeId_${typeId}_groupId_${groupId}`}
        >
          {name}
        </div>
      );
    });

    return (
      <div
        className="SearchResult__item"
        key={`group_${groupId}_family_${familyId}`}
      >
        <div className="SearchResult__item-title">{name}</div>
        {productItems}
      </div>
    );
  });

  return <div className="SearchResults">{items}</div>;
};

export default SearchResults;
