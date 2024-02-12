const perguntas = [
    {
      pergunta: "Qual diretor é conhecido como 'Mestre do Suspense'?",
      respostas: ["Alfred Hitchcock", "Wes Craven", "John Carpenter"],
      correta: 0
    },
    {
      pergunta: "Qual filme popularizou o subgênero 'found footage' no horror?",
      respostas: ["A Bruxa de Blair", "Atividade Paranormal", "Rec"],
      correta: 0
    },
    {
      pergunta: "Em qual filme de terror um grupo de crianças é aterrorizada por um palhaço demoníaco?",
      respostas: ["It - A coisa", "A Hora do Pesadelo", "Invocação do Mal"],
      correta: 0
    },
    {
      pergunta: "Quem dirigiu 'O Iluminado'?",
      respostas: ["John Carpenter", "Stanley Kubrick", "Roman Polanski"],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do assassino em 'Halloween'?",
      respostas: ["Freddy Krueger", "Michael Myers", "Jason Voorhees"],
      correta: 1
    },
    {
      pergunta: "Qual filme de terror é baseado em um livro de Stephen King sobre um carro possuído?",
      respostas: ["O Iluminado", "Christine", "Cujo"],
      correta: 1
    },
    {
      pergunta: "O que é o 'J-horror'?",
      respostas: ["Horror japonês", "Horror coreano", "Horror chinês"],
      correta: 0
    },
    {
      pergunta: "Qual filme de terror se passa em uma casa onde os eventos paranormais são investigados?",
      respostas: ["Poltergeist", "Sobrenatural", "A Morte do Demônio: A Ascensão"],
      correta: 0
    },
    {
      pergunta: "Em que filme uma babá é aterrorizada por ligações telefônicas?",
      respostas: ["Pânico", "Noite do Terror", "Mensageiro da Morte"],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do demônio que possui a protagonista em 'O Exorcista'?",
      respostas: ["Pazuzu", "Baphomet", "Asmodeus"],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
      for (let resposta of item.respostas){
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item)
          if (estaCorreta) {
            corretas.add(item)
          }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  };
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
      quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  
  }
  