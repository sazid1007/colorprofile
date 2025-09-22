export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with 🤖 + 💻 by{" "}
            <a
              href="https://bento.me/sazid"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline transition-colors"
            >
              SAZID
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
