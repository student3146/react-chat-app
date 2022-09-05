import React from 'react';

import Message from '../Message';

const Messages = ({items}) => {
    return items.length ? (
        <div>            
            {items.map(item=> (<Message key={item.id} {...item}/>)
            
            ) }
            
            
        </div>
    ): (<div>Відкрити діалог</div>)
};

export default Messages;