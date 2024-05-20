export async function permittedCharacters() {
  let permitted = [];
  const { UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS, SPECIAL_CHARACTERS } =
    process.env;

  if (UPPERCASE_LETTERS === "true")
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (LOWERCASE_LETTERS === "true")
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");

  if (NUMBERS === "true") permitted.push(..."0123456789");

  if (SPECIAL_CHARACTERS === "true") permitted.push(..."!@#$%&*(/)-_");

  return permitted;
}
