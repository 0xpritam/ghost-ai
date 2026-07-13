import { Card } from '@/components/ui/card';

export default function EditorPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-100 mb-6">Editor</h1>
        
        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-100 mb-2">
              Welcome to the Editor
            </h2>
            <p className="text-slate-300">
              Click the sidebar toggle button in the top-left navbar to open and close the project sidebar.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-100 mb-3">Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Fixed navbar with sidebar toggle</li>
              <li>• Floating sidebar that slides in from the left</li>
              <li>• Two tabs: My Projects and Shared</li>
              <li>• New Project button ready for implementation</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-100 mb-3">Next Steps</h3>
            <p className="text-slate-300">
              The editor chrome components are now ready to be extended with workspace features.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
