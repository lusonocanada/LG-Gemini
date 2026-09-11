interface LGChromaticBarProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function LGChromaticBar({
  className = '',
  orientation = 'horizontal',
  size = 'md'
}: LGChromaticBarProps) {
  // LG Bubble Palette: Deep Blue, Sky Blue, Cyan, Yellow, Orange, Red, Wine
  const colors = ['#1B4E9B', '#008CD2', '#00A3E0', '#FFC20E', '#F58220', '#E53924', '#8A1538'];

  if (orientation === 'vertical') {
    const widthClass = size === 'xs' ? 'w-0.5' : size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : 'w-2';
    return (
      <div className={`flex flex-col shrink-0 overflow-hidden rounded-full ${widthClass} ${className}`}>
        {colors.map((c, i) => (
          <span key={i} className="flex-1 min-h-[6px]" style={{ backgroundColor: c }} />
        ))}
      </div>
    );
  }

  const heightClass = size === 'xs' ? 'h-0.5' : size === 'sm' ? 'h-1' : size === 'md' ? 'h-1.5' : 'h-2';
  return (
    <div className={`flex shrink-0 overflow-hidden rounded-full ${heightClass} ${className}`}>
      {colors.map((c, i) => (
        <span key={i} className="flex-1 min-w-[8px]" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}
