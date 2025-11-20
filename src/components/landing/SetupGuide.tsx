import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

export function SetupGuide() {
    return (
        <section id="setup" className="bg-muted/30 px-4 py-24 md:px-8">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Install E-Wheels Manager
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Download the official desktop application for E-Wheels workstations.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    {/* Workstation Installer */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Terminal className="h-6 w-6 text-primary" />
                                Workstation Installer
                            </CardTitle>
                            <CardDescription>
                                For all service center staff. Download the latest version.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                                <p className="text-muted-foreground"># Download the latest installer</p>
                                <p className="mt-2 text-foreground">Click the button below to get the Windows installer.</p>
                            </div>
                            <Button className="w-full" size="lg" asChild>
                                <Link
                                    href="https://github.com/ilan2004/ewheels-setup/releases/download/v1.1/EV.Wheels.Management.System-Setup.exe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Windows Installer (.exe)
                                </Link>
                            </Button>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Includes all dependencies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Auto-updates enabled</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Offline support</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
