/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { useState, useCallback } from 'react';

export interface PlayEvent {
  title: string;
  url: string;
  img: string;
  timestamp: string;
}

const STORAGE_KEY = 'scg_play_history';
const MAX_ENTRIES = 2000;

function load(): PlayEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(events: PlayEvent[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events.slice(0, MAX_ENTRIES)));
  } catch {
    // storage full — ignore
  }
}

export function usePlayHistory() {
  const [history, setHistory] = useState<PlayEvent[]>(() => load());

  const recordPlay = useCallback((game: { title: string; url: string; img: string }) => {
    const event: PlayEvent = {
      title: game.title,
      url: game.url,
      img: game.img,
      timestamp: new Date().toISOString(),
    };
    setHistory((prev) => {
      const next = [event, ...prev].slice(0, MAX_ENTRIES);
      save(next);
      return next;
    });
  }, []);

  return { history, recordPlay };
}

/* ── Pure computation helpers (no hooks) ── */

export function getTotalPlays(history: PlayEvent[]): number {
  return history.length;
}

export function getUniqueTitles(history: PlayEvent[]): number {
  return new Set(history.map((e) => e.title)).size;
}

export function getFavoriteGame(history: PlayEvent[]): { title: string; count: number } | null {
  if (history.length === 0) return null;
  const counts: Record<string, number> = {};
  for (const e of history) counts[e.title] = (counts[e.title] || 0) + 1;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return { title: top[0], count: top[1] };
}

export function getTopGames(history: PlayEvent[], limit = 10): { title: string; img: string; count: number }[] {
  const map: Record<string, { img: string; count: number }> = {};
  for (const e of history) {
    if (!map[e.title]) map[e.title] = { img: e.img, count: 0 };
    map[e.title].count++;
  }
  return Object.entries(map)
    .map(([title, { img, count }]) => ({ title, img, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getCountByDay(history: PlayEvent[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const e of history) {
    const day = e.timestamp.slice(0, 10);
    counts[day] = (counts[day] || 0) + 1;
  }
  return counts;
}

export function getLongestStreak(countByDay: Record<string, number>): number {
  const today = new Date();
  let streak = 0;
  let max = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (countByDay[key]) {
      streak++;
      max = Math.max(max, streak);
    } else {
      streak = 0;
    }
  }
  return max;
}
