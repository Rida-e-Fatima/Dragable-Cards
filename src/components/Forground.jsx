import React , {useRef} from 'react'
import Card from './Card.jsx'

function Forground() {

const ref = useRef(null);

    const data = [
        {
            desc: "This is the background color of the card that displayed",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "This is the background color of the card that displayed",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            },
        },
        {
            desc: "This is the background color of the card that displayed",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Upload",
                tagColor: "green"
            },
        }
    ]
    return (

        <div ref={ref} className="fixed top-0 p-5 left-0 z-[3] h-screen w-full flex gap-10 flex-wrap ">

            {data.map((item, index) => (
                <Card data={item}  reference = {ref}/>
            )
            )}
        </div>

    )
}

export default Forground