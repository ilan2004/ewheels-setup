import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Car, ClipboardList, LayoutDashboard, Settings, Users } from "lucide-react";

const features = [
    {
        title: "Job Card Management",
        description: "Track every service ticket from intake to delivery. Record detailed vehicle and battery diagnostics.",
        icon: ClipboardList,
    },
    {
        title: "Inventory Control",
        description: "Real-time tracking of batteries, vehicles, and spare parts. Never run out of essential stock.",
        icon: Battery,
    },
    {
        title: "Role-Based Dashboards",
        description: "Specialized views for Front Desk, Technicians, and Managers to streamline daily operations.",
        icon: LayoutDashboard,
    },
    {
        title: "Vehicle & Battery Records",
        description: "Maintain comprehensive history of every vehicle and battery that enters your workshop.",
        icon: Car,
    },
    {
        title: "Customer Management",
        description: "CRM features to keep track of customer details, service history, and communications.",
        icon: Users,
    },
    {
        title: "Desktop & Web",
        description: "Access via modern web browser or install the dedicated Electron desktop app for offline capabilities.",
        icon: Settings,
    },
];

export function Features() {
    return (
        <section id="features" className="container mx-auto px-4 py-24 md:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Tailored for E-Wheels Operations
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Custom features designed to support our specific service standards and requirements.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <Card key={feature.title} className="bg-card/50 backdrop-blur-sm transition-colors hover:bg-card/80">
                        <CardHeader>
                            <feature.icon className="h-10 w-10 text-primary mb-4" />
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                {feature.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
