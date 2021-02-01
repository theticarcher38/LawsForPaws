import React from 'react'

import './InformationPageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    content: string;
    tip1?: string;
    tip2?: string;
    tip3?: string;
    tip4?: string;
}

const InformationPageContent: React.FC<ContainerProps> = ({ 
    name, 
    subheading, 
    content, 
    tip1, 
    tip2, 
    tip3, 
    tip4
}) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
            <p className="tip">{tip1}</p>
            <p className="tip">{tip2}</p>
            <p className="tip">{tip3}</p>
            <p className="tip">{tip4}</p>
        </div>
    )
}

export default InformationPageContent;