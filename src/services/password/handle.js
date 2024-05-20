import { permittedCharacters } from "./utils/permitted-characters.js";

export async function handle() {
  let password = "";
  const { PASSWORD_LENGTH } = process.env;
  const characters = await permittedCharacters();

  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    const index = Math.floor(Math.random() * characters.length);

    password += characters[index];
  }

  return password;
}
