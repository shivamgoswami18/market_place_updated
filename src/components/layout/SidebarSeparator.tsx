interface SidebarSeparatorProps {
  className?: string;
}

export default function SidebarSeparator({
  className = "",
}: SidebarSeparatorProps) {
  return (
    <div className={className}>
      <hr className="border-graySoft opacity-20 w-[150%] mx-[-20%]" />
    </div>
  );
}
