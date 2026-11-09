'use client';
import { useState } from 'react';
import { PHONE_PRETTY } from '@/lib/content';

export default function OrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('ok');
        setForm({ name: '', phone: '', comment: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-bold text-stone-900 text-lg mb-1">Заявка отправлена</p>
        <p className="text-stone-500 text-sm">Перезвоним в ближайшее рабочее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Ваше имя</label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Как к вам обращаться"
          className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-100 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Телефон *</label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          placeholder="+375 XX XXX-XX-XX"
          className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-100 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Комментарий</label>
        <textarea
          value={form.comment}
          onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
          placeholder="Какой котёл интересует, площадь дома и т.п."
          rows={3}
          className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-flame-500 focus:ring-2 focus:ring-flame-100 transition-all resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">Не получилось отправить. Позвоните нам напрямую: {PHONE_PRETTY}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading' || !form.phone.trim()}
        className="w-full bg-flame-600 hover:bg-flame-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {status === 'loading' ? 'Отправляем…' : 'Оставить заявку'}
      </button>
      <p className="text-xs text-stone-400 text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy-policy" className="underline hover:text-stone-600">политикой конфиденциальности</a>
      </p>
    </form>
  );
}
