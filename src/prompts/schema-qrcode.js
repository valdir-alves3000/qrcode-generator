import chalk from "chalk";

export const schemaQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo (1 - NORMAl ou 2 - TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    requered: true,
  },
];
