import React from 'react'
import { GiLifeSupport } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

type Props = {}

export default function Footer({ }: Props) {
    const iconStyle = `flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-color duration-200`
    return (
        <div className='footer py-4 flex flex-wrap gap-5 font-mono gray-secondary'>
            <span className={iconStyle}>
                <GiLifeSupport />
                Support
            </span>
            <span className={iconStyle}>
                <FaTwitter />
                Twitter
            </span>
            <span className={iconStyle}>
                <FaTshirt />
                Buy Merch
            </span>
            <span className={iconStyle}>
                <FaEthereum />
                Ethereum
            </span>
        </div>
    )
}