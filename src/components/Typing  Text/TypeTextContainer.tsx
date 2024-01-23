import { useState } from 'react'
import TextOverLay from './TextOverLay'
import TypeText from './TypeText'
import Cursor from './Cursor'
type Props = {}

export default function TypeTestContainer({ }: Props) {
    return (
        <div className='flex justify-center  gray-secondary mt-[12rem] relative'>
            <Cursor></Cursor>
            <TypeText></TypeText>
        </div>
    )
}