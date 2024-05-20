import prompt from "prompt";
import { schemaMain } from "./prompts/schema-main.js";
import { createPassword } from "./services/password/create.js";
import { createQRCode } from "./services/qr-code/create.js";

async function main() {
  prompt.get(schemaMain, async (err, choose) => {
    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
