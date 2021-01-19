import React from 'react'
import './AboutPageContent.css'

interface ContainerProps {
    name: string;
    subheading: string;
    content: string;
    aboutHeading?: string;
    aboutContent?: string;
    aboutMe?: string;
}

const AboutPageContent: React.FC<ContainerProps> = ({ name, subheading, content, aboutHeading, aboutContent, aboutMe }) => {
    return(
        <div className="container">
            <strong>{name}</strong>
            <p className="subheading">{subheading}</p>
            <p className="content">{content}</p>
            <strong>{aboutHeading}</strong>
            <p className="content">{aboutContent}</p>
            <p className="content">{aboutMe}</p>
        </div>
    )
}

export default AboutPageContent;