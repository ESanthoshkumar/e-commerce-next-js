// import Image from "next/image";
import ProductList from "@/app/client-components/product-listing"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-200">
      <ProductList />
    </div>
  );
}
