import './globals.css';
import { TRPCReactProvider } from '@/app/api/trpc/client';
import { TaskProvider } from './modules/tasks/provider/TaskProvider';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Task Manager</title>
      <body className='font-roboto'>
        <TRPCReactProvider>
          <TaskProvider>
            {children}
          </TaskProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}