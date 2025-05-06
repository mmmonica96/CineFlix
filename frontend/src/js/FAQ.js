import '../css/faq.css';

export function FaqSection() {
  const faqs = [
    {
      question: "¿Hace falta registrarse para ver las recomendaciones?",
      answer: "No, puedes ver las recomendaciones sin registro alguno."
    },
    {
      question: "¿Hace falta pagar para poder entrar en CineFlix?",
      answer: "No, CineFlix es una página totalmente gratuita."
    },
    {
        question: "¿Puedo dejar mi opinión sobre una serie o película?",
        answer: "Sí, si tienes una cuenta puedes escribir opiniones y calificar los títulos que has visto."
    },
    {
        question: "¿Ofrecen enlaces para ver las películas o series?",
        answer: "No alojamos contenido, solo hacemos recomendaciones. Puedes encontrar los títulos en plataformas de streaming legales."
    },
    {
        question: "¿Hay una edad minima para entrar en CineFlix?",
        answer: "No, CineFlix es para todas las edades."
    },
    {
        question: "¿Como puedo registrarme?",
        answer: "Desde la pestaña de registro, te puedes registrar sin ningún tipo de código de verificación."
    }
  ];

  
  const container = document.createElement('div');
  container.className = 'faq-container';

  const title = document.createElement('h2');
  title.textContent = 'Preguntas Frecuentes';
  container.appendChild(title);

  
  faqs.forEach(faq => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    const question = document.createElement('div');
    question.className = 'faq-question';
    question.textContent = faq.question;

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.textContent = faq.answer;

    question.addEventListener('click', () => {
      answer.classList.toggle('visible');
    });

    item.appendChild(question);
    item.appendChild(answer);
    container.appendChild(item);
  });

  return container;
}
