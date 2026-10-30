export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center font-sans">
      <h1 className="text-3xl font-semibold tracking-tight">MyPal Hospitality</h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Open this link on your iPhone to continue in the MyPal Hospitality app.
      </p>
      <a
        href="/.well-known/apple-app-site-association"
        className="mt-2 flex h-12 items-center justify-center rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        View apple-app-site-association
      </a>
    </main>
  );
}
