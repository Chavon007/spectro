import Image from "next/image";
import Link from "next/link";
type productCard = {
  name: string;
  image: string[];
  price: number;
  link: string;
};

function Card({ name, image, price, link }: productCard) {
  return (
    <div>
      <Image src={image[0]} alt={name} width={100} height={100} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Link href={link}>Order via Whatsapp</Link>
    </div>
  );
}
export default Card;
