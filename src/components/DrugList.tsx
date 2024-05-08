import { Drug } from '../types';

interface DrugListProps {
  drugs: Drug[];
  onAddToCart: (drug: Drug) => void;
}

const DrugList: React.FC<DrugListProps> = ({ drugs, onAddToCart }) => {
  return (
    <ul>
      {drugs.map(drug => (
        <li key={drug.id}>
          {drug.name} - ${drug.price.toFixed(2)}
          <button onClick={() => onAddToCart(drug)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default DrugList;
