// main.ts
async function main(): Promise<void> {
  console.log("Hello world");
}

main().catch((err) => {
  console.error("Erreur :", err);
  process.exit(1);
});
