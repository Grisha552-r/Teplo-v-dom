export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="shrink-0 rounded-xl bg-flame-600 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.52} height={size * 0.52} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C10.5 5 7 7.5 7 12.5C7 16.09 9.24 19 12 19C14.76 19 17 16.09 17 12.5C17 10.8 16.2 9.6 15.3 8.6C15.1 10 14.3 10.8 13.4 10.8C12.6 10.8 12 10.1 12 9.2C12 6.5 13 5.5 12 2Z"
          fill="white"
        />
        <path
          d="M12 12.2C11 13 10.3 14 10.3 15.2C10.3 16.6 11.3 17.6 12.5 17.4C13.6 17.2 14.3 16.2 14.1 15.1C13.9 13.9 12.9 12.8 12 12.2Z"
          fill="#ec3f0d"
        />
      </svg>
    </span>
  );
}

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark size={size} />
      <span className="font-bold text-lg leading-none hidden sm:inline">
        <span className="text-flame-600">Тепло</span>{' '}
        <span className="text-stone-900">в дом</span>
      </span>
    </span>
  );
}
