import React from 'react'
import './PageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    content: string;
}

const PageContent: React.FC<ContainerProps> = ({ name, subheading, content }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
        </div>
    )
}

export default PageContent;