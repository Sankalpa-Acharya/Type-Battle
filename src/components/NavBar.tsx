import { FaBattleNet } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
type Props = {}

export default function NavBar({ }: Props) {
    const iconsStyles = `text-gray-500 cursor-pointer hover:text-gray-300 transition-colors duration-200`
    return (
        <div className="flex justify-center">
            <div className='absolute gradient-01'></div>
            <nav className='flex justify-between w-[100%] py-10 items-center '>
                <div className="flex items-center gap-5">
                    <a href="/" className='text-4xl flex items-center font-bold'>Type
                        <span className='text-indigo-400'>Battle</span>
                        <FaBattleNet /></a>
                    <IoMdSettings className={iconsStyles} size={22} />
                    <FaTshirt size={22} className={iconsStyles} />
                </div>
                <div className="md:flex hidden gap-7 ">
                    <FaGithub size={20} className={iconsStyles} />
                    <FaUser size={20} className={iconsStyles} />
                </div>
            </nav>
        </div>

    )
}