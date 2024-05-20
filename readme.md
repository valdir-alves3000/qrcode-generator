# Gerador de QR Code e Criador de Senhas

Este projeto oferece uma interface de linha de comando (CLI) simples para gerar QR codes e criar senhas aleatórias. Ele utiliza o Node.js juntamente com alguns pacotes populares como `prompt`, `chalk` e `qrcode-terminal`.

## Recursos

- **Gerador de QR Code**: Gere QR codes a partir de links com opções para exibição normal e no terminal.
- **Criador de Senhas**: Crie senhas aleatórias com base em conjuntos de caracteres configuráveis.

## Instalação

Para começar, clone o repositório e instale as dependências:

```bash
git clone https://github.com/valdir-alves3000/qrcode-generator.git
cd qrcode-generator
npm install
```

## Configuração

Configure as variáveis de ambiente em um arquivo `.env` para configurar a geração de senhas:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## Uso

Execute o script principal para iniciar a CLI:

```bash
npm run start
```

Você será solicitado a selecionar uma opção:

1. Gerar um QR Code
2. Criar uma Senha

### Gerador de QR Code

Você será solicitado a inserir o link para o QR code e selecionar o tipo de exibição (normal ou no terminal).

### Criador de Senhas

Uma senha aleatória será gerada com base na configuração no arquivo `.env`.

## Dependências

- `chalk`: Para estilizar a saída no console.
- `qrcode-terminal`: Para gerar QR codes no terminal.
- `prompt`: Para obter entrada do usuário.
