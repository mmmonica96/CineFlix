import React, { useState } from "react";
import "../css/faq.css";

function FAQ() {
  const faqs = [
    {
      question: "¿Hace falta registrarse para ver las recomendaciones?",
      answer: "No, puedes ver las recomendaciones sin registro alguno.",
    },
    {
      question: "¿Hace falta pagar para poder entrar en CineFlix?",
      answer: "No, CineFlix es una página totalmente gratuita.",
    },
    {
      question: "¿Puedo dejar mi opinión sobre una serie o película?",
      answer:
        "Sí, si tienes una cuenta puedes escribir opiniones y calificar los títulos que has visto.",
    },
    {
      question: "¿Ofrecen enlaces para ver las películas o series?",
      answer:
        "No alojamos contenido, solo hacemos recomendaciones. Puedes encontrar los títulos en plataformas de streaming legales.",
    },
    {
      question: "¿Hay una edad mínima para entrar en CineFlix?",
      answer: "No, CineFlix es para todas las edades.",
    },
    {
      question: "¿Cómo puedo registrarme?",
      answer:
        "Desde la pestaña de registro, te puedes registrar sin ningún tipo de código de verificación.",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  return (
    <div className="faq-container">
      <h2>Preguntas frecuentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() =>
              setVisibleIndex(visibleIndex === index ? null : index)
            }
          >
            {faq.question}
            <span className={`arrow ${visibleIndex === index ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`faq-answer ${visibleIndex === index ? "open" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
