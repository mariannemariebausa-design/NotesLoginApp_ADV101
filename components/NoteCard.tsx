'use client';

import React from 'react';
import { Note } from '@/lib/types';

interface NoteCardProps {
    note: Note;
    onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
    const categoryColors = {
        Personal: 'bg-[#FFE5EC] text-[#9E2A4B] border-[#FFB3C1]',
        Work: 'bg-[#FFF0D6] text-[#8A5A00] border-[#FFE0B2]',
        Ideas: 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]',
    };

    return (
    <div className="pink-glass p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-[#FFD0DC]">
        <div>
        <div className="flex justify-between items-start gap-2 mb-3">
            <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[note.category]}`}
            >
            {note.category}
            </span>
            <span className="text-[11px] text-[#A88892] font-mono">{note.date}</span>
        </div>
        <h3 className="text-base font-bold text-[#4A3E3E] mb-2 leading-snug">{note.title}</h3>
        <p className="text-xs text-[#6E5A60] whitespace-pre-line leading-relaxed">{note.content}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#FFE0E8] flex justify-end">
        <button
            onClick={() => onDelete(note.id)}
            className="text-xs text-[#B56B81] hover:text-[#9E2A4B] font-medium transition-colors px-2 py-1 rounded-lg hover:bg-[#FFE4E8]"
        >
            Remove
        </button>
        </div>
    </div>
    );
}