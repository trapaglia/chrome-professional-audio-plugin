import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir = path.join(__dirname, "src");
const publicDir = path.join(__dirname, "public");
const distDir = path.join(__dirname, "dist");

// 💥 1. Borrar carpeta dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// 💻 2. Compilar TypeScript
console.log("🌀 Compilando TypeScript...");
execSync("npx tsc", { stdio: "inherit" });

// 💋 3. Copiar archivos desde public/
console.log("📁 Copiando archivos de public/");
copyRecursive(publicDir, distDir);

// 🧠 4. Copiar archivos JS desde src/ (los no migrados)
console.log("📁 Copiando JS no migrado desde src/");
copyJS(srcDir, distDir);

function copyRecursive(from, to) {
  if (!fs.existsSync(from)) return;

  for (const file of fs.readdirSync(from)) {
    const srcPath = path.join(from, file);
    const destPath = path.join(to, file);

    if (fs.statSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyJS(from, to) {
  if (!fs.existsSync(from)) return;

  for (const file of fs.readdirSync(from)) {
    const srcPath = path.join(from, file);
    const destPath = path.join(to, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyJS(srcPath, to); // recursivo
    } else if (file.endsWith(".js")) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
