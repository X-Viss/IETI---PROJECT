import React from 'react'

export function ArticleForForm(props){
    const {item,className}=props
    const classNameToSet = className? className:"noneClass"
    return <article className={classNameToSet}>
        {item}
    </article>
}

export function MapArticles(props){
    const {items} = props
    return items.map((item,index)=>{
        return <ArticleForForm item={item.item} className={item.className} key={index}/>
    })
}