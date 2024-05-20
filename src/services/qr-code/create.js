import prompt from "prompt";
import { schemaQRCode } from "../../prompts/schema-qrcode.js";
import { handle } from "./handle.js";

export async function createQRCode() {
  prompt.get(schemaQRCode, handle);

  prompt.start();
}
