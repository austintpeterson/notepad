//stateful comp

import React from 'react';
import Single from './Single'


class Grid extends React.Component{
    //takes prop/array of notes and use map function
    //to return every time there is an item
    renderItems(){
        //for every item in array in props
        return this.props.notes.map(item => 
            <Single
            key={item.id}
            note={item}/>
        );
    }
    
    render(){
        return (
            <div className = "row">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

export default Grid;