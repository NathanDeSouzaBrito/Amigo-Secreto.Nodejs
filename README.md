# Amigo Secreto

Um sistema simples de **Amigo Secreto** desenvolvido para fins de entrevista técnica.  
O projeto permite cadastrar pessoas (nome e e-mail), realizar sorteios, e enviar e-mails automáticos informando quem cada participante deve presentear.

---

##  Tecnologias Utilizadas
- **Backend:** Node.js + Express
- **Frontend:** Vue.js (JavaScript)
- **Banco de Dados:** MongoDB (Mongoose ODM)
- **Envio de E-mails:** Nodemailer + [Ethereal](https://ethereal.email) (SMTP fake para testes)


---

##  Funcionalidades
- **CRUD completo** de pessoas (`nome`, `email`)
- **Sorteio automático** de amigo secreto
- **Envio de e-mails** para cada participante
- **Proteção contra auto-sorteio** (ninguém tira a si mesmo)
- **Fallback inteligente** em caso de falha nos sorteios
- **Pré-visualização dos e-mails** no [Ethereal](https://ethereal.email)

---

##  Pré-requisitos
- Node.js (>= 18)
- MongoDB rodando localmente (`mongodb://localhost:27017/amigos-segreto`)

---

##  Instalação
```bash
# Clonar o repositório
git clone https://github.com/NathanDeSouzaBrito/Amigo-Secreto.Nodejs
cd amigo-secreto


# Rodar backend
cd backEnd
npm install
npm run dev

# Rodar frontend
cd frontEnd
npm install
npm run dev
```
# Visualizando os e-mails

O envio é feito via Ethereal.
Após cada envio, será exibida uma URL de pré-visualização no terminal. Basta abrir no navegador para ver a mensagem recebida.
