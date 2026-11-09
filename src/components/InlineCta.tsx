import { PHONE, PHONE_PRETTY } from '@/lib/content';

export default function InlineCta({ text }: { text: string }) {
  return (
    <div className="bg-stone-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl">
      <p className="text-white font-medium text-sm">{text}</p>
      <a href={`tel:${PHONE}`} className="shrink-0 inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
        {PHONE_PRETTY}
      </a>
    </div>
  );
}
