document.addEventListener('DOMContentLoaded', function() {
    const chatPopup = document.getElementById('chat-popup');
    const openChatButton = document.getElementById('open-chat-button');
    const chatCloseButton = document.getElementById('chat-close');
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const botResponses = {
        "olá": "Olá! Seja bem-vindo ao ConectSports. Como posso ajudar?",
        "gostaria conhecer mais sobre esportes ?": "Ahh então você está no lugar certo!",
        "qual o contato de vocês?": "Atendimento de Segunda à Sexta-feiras das 07:00hrs às 18:00hrs, aos fins de semana reclamações podem ser realizadas via e-mail: conectsports@gmail.com - Telefone (31) 3080-2002 ou Central: 0800-880-6632",
        "qual o horário de funcionamento dos parques e poliesportivos ?": "Parques da Cidade – Sexta, sábado, domingo e terça-feira – Das 5h às 22h, com entrada permitida até as 21h – Segunda-feira e quarta – Das 5h às 21h, com entrada permitida até as 20h30 Poliesportivos – Sexta, sábado, segunda e quarta – Das 6h às 21h – Domingos e terça-feira – Das 7h às 18h",
        "o que é a conectsports ?":"O aplicativo CONECT SPORTS é uma plataforma completa para a população e prefeitura que desejam se manter atualizados e conectados em relação à prática esportiva. Ele oferece informações sobre eventos esportivos, programas de treinamento, dicas de saúde e nutrição, além de permitir que os usuários se conectem com outros entusiastas de esportes e prefeitura.",
        "como posso ajudar": "Estou aqui para responder suas perguntas sobre o ConectSports.",
        "como você está?": "Estou bem, obrigado por perguntar! E você?",
        "qual é o seu nome?": "CONECT SPORTS é uma plataforma completa para a população e prefeitura.",
        "quem criou você": "Fui criado pelos alunos da matéria de métodos, modelos e técnicos de engenharia de software.",
        "você pode me ajudar a encontrar informações sobre esportes?": "Claro! Estou aqui para responder suas perguntas sobre esportes.",
        "qual é o significado da vida?": "Essa é uma pergunta difícil! Alguns dizem que é 42, mas talvez seja encontrar felicidade e significado em nossas vidas.",
        "você gosta de esportes?": "Eu não posso sentir emoções como os humanos, mas eu posso fornecer muitas informações sobre esportes!",
        "você é inteligente?": "Eu sou um assistente virtual projetado para ajudar com informações e tarefas. Minha inteligência vem do treinamento em uma vasta quantidade de dados.",
        "posso confiar em você?": "Você pode confiar em mim para fornecer informações precisas e úteis, mas lembre-se de sempre verificar as informações importantes por conta própria.",
        "você tem algum conselho para mim?": "Lembre-se de manter uma mente aberta, ser gentil com os outros e sempre se esforçar para aprender coisas novas!",
        "obrigado": "De nada! Estou sempre aqui para ajudar.",
        "tchau": "Até logo! Se precisar de mais alguma coisa, estarei por aqui.",
        "default": "Desculpe, não entendi sua pergunta. Pode reformular?"

    };

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = text;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(userText) {
        const text = userText.toLowerCase().trim();
        return botResponses[text] || botResponses['default'];
    }

    openChatButton.addEventListener('click', function() {
        chatPopup.style.display = 'block';
    });

    chatCloseButton.addEventListener('click', function() {
        chatPopup.style.display = 'none';
    });

    sendButton.addEventListener('click', function() {
        const userText = userInput.value.trim();
        if (userText !== '') {
            addMessage('user', userText);
            const botResponse = getBotResponse(userText);
            addMessage('bot', botResponse);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
