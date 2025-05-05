# 📱 FuriaHub App

Aplicativo completo com **Frontend em React + Expo** e **Backend em Node.js/Express**, utilizando **SQLite** como banco de dados. Criado para gerenciar um fluxo de cadastro completo com validação de dados, integração com APIs externas e envio de documentos com análise por IA.

---

## 📚 Índice

- [🛠 Tecnologias Utilizadas](#🛠-tecnologias-utilizadas)
- [✨ Funcionalidades](#✨-funcionalidades)
- [🚀 Como Executar Localmente](#🚀-como-executar-localmente)
- [🔌 Integrações com APIs Externas](#🔌-integrações-com-apis-externas)
- [🗃 Estrutura do Banco de Dados](#🗃-estrutura-do-banco-de-dados)
- [🌍 Deploy](#🌍-deploy)
- [🤝 Contribuição](#🤝-contribuição)
- [📫 Suporte](#📫-suporte)

---

## 🛠 Tecnologias Utilizadas

### 🔷 Frontend

- React-native + Expo
- TypeScript
- Axios

### 🟦 Backend

- Node.js
- Express
- TypeScript
- SQLite (gerenciado via SQLite Studio)
- Multer (upload de arquivos)

---

## ✨ Funcionalidades

### ✅ Fluxo de Cadastro

- Tela de boas-vindas com opção de login ou cadastro.
- Cadastro com validação de CPF via API gratuita.
- CEP preenche endereço automaticamente (ViaCEP).

### 🧩 Telas Opcionais

- Interesses (`/interests`)
- Eventos (`/events`)
- Redes Sociais (`/social`)
- Links Pessoais (`/links`)

### 📤 Documentos com Validação por IA

- Upload de imagens/documentos com validação automatizada via OCR/IA gratuita (ex: OCR.space, Mindee).

### 📝 Consentimento

- Formulário obrigatório com aceite de termos.

---

## 🚀 Como Executar Localmente

### 1. Clone o repositório

git clone https://github.com/seu-usuario/furiahub-app.git
cd furiahub-app

## Backend

cd backend
npm install

### Crie um .env:

PORT=3000
IA_API_KEY=sua_api_key_aqui

npm run dev

🔌 Integrações com APIs Externas
Serviço	Finalidade	URL Base
ViaCEP	Consulta de endereço por CEP	https://viacep.com.br/ws/{cep}/json/
Validador de CPF	Verifica CPF válido	https://api-publica.cpfcnpj.com.br ou outro
OCR/IA (ex: Mindee)	Validação de documentos	https://api.ocr.space/parse/image ou outro

🗃 Estrutura do Banco de Dados
O banco SQLite inclui as seguintes tabelas:

users

interests

events

documents

socials

links

consents

### 📌 O banco pode ser visualizado e editado via SQLite Studio.

### Banco: SQLite (ideal localmente); pode ser substituído por PostgreSQL para produção

Email: fsabrantes96@gmail.com

Feito por Felipe.
