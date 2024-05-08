import { addToCart } from "@/redux/slices/cartSlice";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface Drug {
  id: number;
  name: string;
  price: number;
}

interface Props {
  drugs: Drug[];
}

const DrugsPage = ({ drugs }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (drug: Drug) => {
    dispatch(
      addToCart({
        ...drug,
        quantity: 1,
      })
    );
  };

  return (
    <div>
      <h1>Drugs</h1>
      <ul>
        {drugs.map((drug) => (
          <li key={drug.id}>
            <span>
              {drug.name} - ${drug.price}
            </span>
            <button onClick={() => handleAddToCart(drug)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link href="/cart">Go to Cart</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:4000/drugs");
  const drugs = await res.json();

  return {
    props: {
      drugs,
    },
    revalidate: 10, // Revalidate every 10 seconds for ISR
  };
};

export default DrugsPage;
