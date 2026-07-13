'use client';

import React from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 bottom-0 z-40 w-64',
          'bg-slate-900 border-r border-slate-800',
          'transform transition-transform duration-200 ease-in-out',
          'flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-slate-100">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs section */}
        <div className="flex-1 overflow-hidden">
          <Tabs defaultValue="my-projects" className="h-full flex flex-col">
            <TabsList className="w-full rounded-none bg-transparent border-b border-slate-800 p-0">
              <TabsTrigger
                value="my-projects"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-slate-400"
              >
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-slate-400"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-auto">
              {/* My Projects tab */}
              <TabsContent value="my-projects" className="p-4">
                <div className="text-center text-slate-400">
                  <p>No projects yet.</p>
                  <p className="text-sm">Create your first project to get started.</p>
                </div>
              </TabsContent>

              {/* Shared tab */}
              <TabsContent value="shared" className="p-4">
                <div className="text-center text-slate-400">
                  <p>No shared projects.</p>
                  <p className="text-sm">Projects shared with you will appear here.</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer: New Project button */}
        <div className="border-t border-slate-800 p-4">
          <Button className="w-full" onClick={() => {}}>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
