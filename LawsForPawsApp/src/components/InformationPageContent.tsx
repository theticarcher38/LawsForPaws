import React from 'react'
import './InformationPageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    tip1?: string;
    tip2?: string;
    tip3?: string;
    tip4?: string;
    content: string;
}

const InformationPageContent: React.FC<ContainerProps> = ({name, subheading, tip1, tip2, tip3, tip4, content}) => {
    return (
        <div className="Container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
            <p className="tip1">{tip1}</p>
            <p className="tip2">{tip2}</p>
            <p className="tip3">{tip3}</p>
            <p className="tip4">{tip4}</p>
        </div>
    )
}

export default InformationPageContent;