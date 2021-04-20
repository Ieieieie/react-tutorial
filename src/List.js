import React from 'react';
// export const List = (props) => {
//     const title = props.title;
//     return(
//         <div>
//             <h4>{ title }</h4>
//             <div>
//                 List
//             </div>

//         </div>
        
//     )
// }

export class List extends React.Component{
    render(){
        const { title } = this.props;
        return(
            <div>
                <h4>{title}</h4>
                <div>リストです</div>
            </div>
        )
    }
    
}