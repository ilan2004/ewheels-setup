import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-8 lg:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            <div className="mx-auto max-w-4xl space-y-8">
                <div className="animate-fade-in-up space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        E-Wheels <br className="hidden sm:block" />
                        <span className="text-primary">Management System</span>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        The custom operating system built exclusively for E-Wheels service centers.
                        Streamlining our specific workflows, inventory, and job cards.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="#setup">
                            <Download className="mr-2 h-5 w-5" />
                            Setup Install
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                        <Link href="#features">
                            Explore Features
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-16 w-full max-w-5xl overflow-hidden rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-sm lg:mt-24">
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/dashboard-preview.png"
                        alt="E-Wheels Dashboard Preview"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
