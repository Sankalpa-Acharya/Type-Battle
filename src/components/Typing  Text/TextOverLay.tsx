import { GiBattleGear } from "react-icons/gi";
type Props = {}

export default function TextOverLay({ }: Props) {
    return (
        <div className='w-full text-xl z-10 text-[#a5a3a3] blur-effect flex justify-center items-center  absolute'>
            <GiBattleGear size={26} />
            <p className="ml-3"> Click here to start typing</p>
        </div>
    )
}