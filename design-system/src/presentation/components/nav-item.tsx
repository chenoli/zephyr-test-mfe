import { type ReactNode } from 'react';

import cn from '../libs/utils/cn';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

export function NavItem({ icon, label, active = false, collapsed = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={cn(
        'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-colors text-left cursor-pointer',
        active
          ? 'bg-white text-gray-900 font-medium shadow-sm'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
        collapsed && 'justify-center'
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span className="text-sm truncate">{label}</span>}
    </button>
  );
}
