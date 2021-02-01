import React from 'react'
import './PageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    content: string;
    additionalcontent0?: string;
    additionalcontent1?: string;
    additionalcontent2?: string;
    additionalcontent3?: string;
    additionalcontent4?: string;
}

const PageContent: React.FC<ContainerProps> = ({ 
    name, 
    subheading, 
    content, 
    additionalcontent0, 
    additionalcontent1, 
    additionalcontent2, 
    additionalcontent3, 
    additionalcontent4 
}) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
            <p className="content">{additionalcontent0}</p>
            <p className="content">{additionalcontent1}</p>
            <p className="content">{additionalcontent2}</p>
            <p className="content">{additionalcontent3}</p>
            <p className="content">{additionalcontent4}</p>
        </div>
    )
}

export default PageContent;