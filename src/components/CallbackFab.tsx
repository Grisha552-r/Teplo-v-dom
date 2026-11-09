'use client';
import { useState } from 'react';
import { PHONE_PRETTY } from '@/lib/content';

export default function CallbackFab() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, comment: 'Заявка на обратный звонок (плавающая кнопка)' }),
      });
      const data = await res.json();
      setStatus(data.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => { setStatus('idle'); setForm({ name: '', phone: '' }); }, 200);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Заказать обратный звонок"
        className="fixed right-5 bottom-20 sm:bottom-5 z-40 w-16 h-16 rounded-full bg-flame-600 text-white shadow-lg shadow-flame-600/40 flex items-center justify-center animate-pulse-ring hover:bg-flame-700 transition-colors"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={close} />
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm">
            <button onClick={close} aria-label="Закрыть" className="absolute right-4 top-4 text-stone-400 hover:text-stone-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === 'ok' ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-stone-900 text-lg mb-1">Заявка принята</p>
                <p className="text-stone-500 text-sm">Перезвоним в рабочее время — Пн–Сб, 9:00–18:00.</p>
              </div>
            ) : (
              <>
                <p className="font-bold text-xl text-stone-900 mb-1">Закажите звонок</p>
                <p className="text-stone-500 text-sm mb-5">Перезвоним и поможем подобрать котёл</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Ваше имя"
                    className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-100 transition-all"
                  />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+375 XX XXX-XX-XX"
                    className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-100 transition-all"
                  />
                  {status === 'error' && (
                    <p className="text-xs text-red-600">Не получилось отправить. Позвоните нам: {PHONE_PRETTY}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading' || !form.phone.trim()}
                    className="w-full bg-flame-600 hover:bg-flame-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    {status === 'loading' ? 'Отправляем…' : 'Жду звонка'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
