'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NoteCard from '@/components/NoteCard';
import { Note } from '@/lib/types';

const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: 'Welcome to BloomNotes!',
    content: 'This note application combines minimalist aesthetic with full functionality. Create and manage your daily tasks effortlessly.',
    category: 'Personal',
    date: '2026-10-24',
  },
  {
    id: '2',
    title: 'Project Checklist',
    content: 'Ensure all NextJS App Router components are separated cleanly in their respective TSX files.',
    category: 'Work',
    date: '2026-10-24',
  },
];

export default function NotesPage() {
    const router = useRouter();

    const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState<'Personal' | 'Work' | 'Ideas'>('Personal');

    const handleLogout = () => {
        router.replace('/');
        router.refresh();
};

    const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote: Note = {
        id: Date.now().toString(),
        title,
        content,
        category,
        date: new Date().toISOString().split('T')[0],
    };

    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-5xl mx-auto">
      {/* Navigation Header */}
      <header className="pink-glass p-4 sm:p-6 rounded-3xl shadow-sm mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#5A2031]">BloomNotes</h1>
          <p className="text-xs text-[#8C6B75]">Your aesthetic creative space</p>
        </div>

        {/* Bonus 2: Logout button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-2xl bg-white border border-[#FFC8D7] text-[#9E2A4B] text-xs font-semibold hover:bg-[#FFE4E8] transition-all duration-200 shadow-sm cursor-pointer"
        >
          Logout 👋
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Create Note Section */}
        <div className="lg:col-span-1">
          <div className="pink-glass p-6 rounded-3xl shadow-sm sticky top-8">
            <h2 className="text-lg font-bold text-[#4A3E3E] mb-4">Create Note</h2>
            
            <form onSubmit={handleAddNote} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#B56B81] mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Note title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-[#FFC8D7] text-xs text-[#4A3E3E] focus:outline-none focus:ring-2 focus:ring-[#FF8FA3]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#B56B81] mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-[#FFC8D7] text-xs text-[#4A3E3E] focus:outline-none focus:ring-2 focus:ring-[#FF8FA3]"
                >
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Ideas">Ideas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#B56B81] mb-1">Content</label>
                <textarea
                  rows={4}
                  placeholder="Write your note details here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-[#FFC8D7] text-xs text-[#4A3E3E] focus:outline-none focus:ring-2 focus:ring-[#FF8FA3] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FF8FA3] text-white text-xs font-medium hover:bg-[#FF6B8B] transition-colors shadow-sm cursor-pointer"
              >
                Save Note 
              </button>
            </form>
          </div>
        </div>

        {/* Display Notes Section */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#4A3E3E]">Your Notes</h2>
            <span className="text-xs font-medium text-[#B56B81] bg-white/70 px-3 py-1 rounded-full border border-[#FFC8D7]">
              {notes.length} {notes.length === 1 ? 'Note' : 'Notes'}
            </span>
          </div>

          {notes.length === 0 ? (
            <div className="pink-glass p-12 rounded-3xl text-center text-[#A88892] text-xs">
              No notes found. Create your first note on the left!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {notes.map((note) => (
                <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}