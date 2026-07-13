'use client';

import React from 'react';
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40',
        'h-14 flex items-center px-4',
        'bg-slate-950 border-b border-slate-800'
      )}
    >
      {/* Left section: Sidebar toggle */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Center section: Reserved for future use */}
      <div className="flex-1" />

      {/* Right section: Reserved for future use */}
      <div className="flex items-center gap-2" />
    </nav>
  );
}
