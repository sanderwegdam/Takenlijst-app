import React from 'react'
import { useParams } from "react-router-dom"

const About = () => {

  const aboutData = [
    {
      title: "About",
      description: 
      "Je kan taken toevoegen, veranderen en verwijderen.",
    }
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const {title, description} = aboutContent

  return (
    <div className="main__content">
      <h1 style={{ fontSize: "4rem", fontWeight: "600", marginTop: "4rem", lineHeight: "1em", color: "#000", textAlign: "center" }}>{title}</h1>
      <p style={{ fontSize: "2rem", fontWeight: "600", marginTop: "6rem", lineHeight: "1em", color: "#000", textAlign: "center" }}>{description}</p>
    </div>
  )
}
export default About

