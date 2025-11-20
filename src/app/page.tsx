import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { SetupGuide } from "@/components/landing/SetupGuide";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Separator />
      <Features />
      <SetupGuide />

      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ev-wheels. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </main>
  );
}
