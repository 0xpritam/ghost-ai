import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base px-6 py-16 text-copy-primary">
      <Card className="w-full max-w-3xl border-surface-border bg-surface shadow-2xl shadow-black/30">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-semibold text-copy-primary">
            Ghost AI design system
          </CardTitle>
          <CardDescription className="max-w-2xl text-copy-secondary">
            The shared primitives are wired to the dark theme tokens and ready for the workspace UI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary action</Button>
            <Button variant="outline">Secondary action</Button>
            <Dialog>
              <DialogTrigger render={<Button variant="secondary" />}>Open dialog</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Design system preview</DialogTitle>
                  <DialogDescription>
                    This dialog uses the same dark surface language as the rest of the app.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <Input placeholder="Search the design system" />
              <Textarea placeholder="Describe a new workspace surface" />
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <ScrollArea className="h-28 rounded-xl border border-surface-border bg-elevated p-3 text-sm text-copy-secondary">
                <p>
                  Scroll area, cards, and inputs all inherit the dark theme variables without introducing the default light styling.
                </p>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}
