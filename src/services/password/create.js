import chalk from "chalk";
import { handle } from "./handle.js";

export async function createPassword() {
  const password = await handle();

  console.log(chalk.green(password));
}
