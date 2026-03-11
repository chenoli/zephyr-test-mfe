import cn from '../libs/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'icon';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none cursor-pointer',
        variant === 'primary' && 'bg-gray-900 text-white px-4 py-2 hover:bg-gray-700',
        variant === 'ghost' && 'text-gray-600 px-4 py-2 hover:bg-gray-100',
        variant === 'icon' && 'p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        className
      )}
      {...props}
    />
  );
}
