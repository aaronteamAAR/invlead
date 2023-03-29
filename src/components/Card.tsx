interface Props {
	title?: string;
    imgUrl?: string;
    desc?: string;
    alt?: string;
    class?: string;
} 


export default function Card(props : Props) {
    return (
    <main className="flex flex-col justify-center gap-2 mt-12 mx-auto md:flex flex-row">
      <div className="w-[20em] rounded overflow-hidden bg-white shadow-sm md: w-[28em]">
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