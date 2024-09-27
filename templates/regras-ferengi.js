function mostrarRegraFerengi() {
    const regras = [
        "1 - Nunca renuncie a uma oportunidade de lucro.",
        "2 - Aquele que acorda cedo, lucra mais.",
        "3 - O sono pode atrasar o pagamento de uma dívida.",
        "4 - Mantenha os ouvidos abertos.",
        "5 - O que é meu é meu; o que é seu é negociável.",
        "6 - Nunca permita que a lealdade interfira em uma oportunidade de negócio.",
        "7 - Mantenha um bom ouvido atento para o choro dos órfãos... enquanto puder negociar o preço de suas ações.",
        "8 - Pequenos investimentos, grandes lucros - esse é o lema Ferengi.",
        "9 - Uma oportunidade perdida não volta a acontecer: é preciso estar pronto para a próxima.",
        "10 - Um tolo e seu dinheiro logo serão separados.",
        "11 - Um trato é um trato... até que surja um melhor.",
        "12 - Um homem é julgado pelas ações de seus filhos.",
        "13 - Tudo é negociável, mesmo a morte.",
        "14 - Sexo é bom, mas o lucro dura para sempre.",
        "15 - Não há nada mais perigoso do que um capitão honesto.",
        "16 - Um Ferengi espera até o último momento possível para se salvar... ele mesmo.",
        "17 - Um bom advogado é caro... um Ferengi é barato.",
        "18 - Nunca aposte no que você não pode substituir.",
        "19 - Às vezes, o único jeito de salvar o pescoço é cortar a cabeça de outro.",
        "20 - Nunca tenha medo de renegociar.",
        "21 - Tudo vale a pena se você puder mantê-lo por tempo suficiente para vendê-lo com lucro.",
        "22 - Mesmo no futuro, haverá espaço para o lucro.",
        "23 - Nunca misture negócios com prazer.",
        // ... adicione as outras regras do site ...
      ];
  
    const regraAleatoria = regras[Math.floor(Math.random() * regras.length)];
    document.getElementById("regraFerengi").textContent = regraAleatoria;
    console.log(regraAleatoria);
  }
  
  // Exibir a primeira regra imediatamente
  mostrarRegraFerengi();
  
  // Atualizar a regra a cada 15 segundos
  setInterval(mostrarRegraFerengi, 15000); 