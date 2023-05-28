import "./globals.css";

export const metadata = {
  title: "To-Do List",
  description: "Lista de tarefas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
