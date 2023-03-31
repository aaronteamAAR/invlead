import "../styles/card.css";

interface Props {
  title?: string;
  imgUrl?: string;
  desc?: string;
  alt?: string;
  class?: string;
}

export default function Card(props: Props) {
  return (
    <a href="/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-army ">{props.title}</h5>
    <p className="font-normal text-army dark:text-gray-400">{props.desc}</p>
</a>
  );
}
