interface Props {
	title?: string;
    imgUrl?: string;
    desc?: string;
    alt?: string;
} 


export default function Card(props : Props) {
    return (
    <main className="flex flex-row justify-center gap-6 mx-auto">
      <div className="w-[18em] rounded overflow-hidden shadow-sm">
         <img className="w-full" src={props.imgUrl} alt={props.alt}  />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                 <p className="text-gray-700 text-base">
                       {props.desc}
                 </p>
            </div>

        </div>
 </main>
        
    )
}