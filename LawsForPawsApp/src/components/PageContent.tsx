import React from 'react'
import './PageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    content: string;
    tip1?: string;
    tip2?: string;
    tip3?: string;
    tip4?:string;
}

const PageContent: React.FC<ContainerProps> = ({ name, subheading, content, tip1, tip2, tip3, tip4 }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
            <p className="content">{tip1}</p>
            <p className="content">{tip2}</p>
            <p className="content">{tip3}</p>
            <p className="content">{tip4}</p>
        </div>
    )
}

export default PageContent;