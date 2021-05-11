import React from 'react'

const Tags = ({tags}) => {
    if(tags){
        const tagList = tags.map((tag)=>{
            return(
                <button>{tag}</button>
            )
        })
        return (
            {tagList}
        )
    }
}

export default Tags;
