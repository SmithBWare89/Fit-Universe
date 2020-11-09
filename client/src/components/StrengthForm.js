import React, { useEffect } from 'react';
import {
    Form,
    Button
} from 'semantic-ui-react';

export default function StrengthForm({props}) {
    const setsArray = new Array(props[1].sets)
    console.log(props)
    console.log(props[0])

    function thisPrinter(){
        return `<h1>This!</h1>`
    }
    return (
        <div>
            <h1>Hello!</h1>
            {
                setsArray.map(item => {
                    return `<h1>This</h1>`
                })
            }
        </div>
    )
}