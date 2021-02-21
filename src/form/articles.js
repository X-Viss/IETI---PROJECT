import React from 'react'

function ArticleForForm(props){
    const {item}=props
    const className = props.className? props.className:"noneClass"
    return <article className={className}>
        {item}
    </article>
}

export function MapArticles(props){
    const {items} = props
    return items.map((item,index)=>{
        return <ArticleForForm item={item.item} className={item.className} key={index}/>
    })
}

