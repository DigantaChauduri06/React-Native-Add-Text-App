import { useState } from 'react'
import TextsContextWrapper from '../Context/ContextWrapper'

import randomWords from 'random-words'


// components
import Search from './Search'
import Items from './Items';

const Parent = () => {
    // states
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    const addElements = () => {
        // String
        const word = randomWords()
        setData((prev) => [...prev, word])
        //
    }
    return (
        <TextsContextWrapper setData={setData} data={data}>
            <Search addElements={addElements} text={text} setText={setText} />
            <Items />
        </TextsContextWrapper>
    )
}
export default Parent