"use client";

import { useState, useEffect } from "react";

const platforms = [
  { id: "youtube", name: "YouTube", icon: "▶️", dau: 122, session: 40, adLoad: 12, cpm: 7.5, creatorSplit: 55 },
  { id: "tiktok", name: "TikTok", icon: "🎵", dau: 150, session: 95, adLoad: 8, cpm: 3.5, creatorSplit: 20 },
  { id: "instagram", name: "Instagram", icon: "📸", dau: 500, session: 29, adLoad: 14, cpm: 8.2, creatorSplit: 15 },
  { id: "facebook", name: "Facebook", icon: "🟦", dau: 2100, session: 31, adLoad: 16, cpm: 6.1, creatorSplit: 10 },
  { id: "twitter", name: "X / Twitter", icon: "🐦", dau: 238, session: 30, adLoad: 10, cpm: 2.1, creatorSplit: 25 },
  { id: "snapchat", name: "Snapchat", icon: "👻", dau: 414, session: 26, adLoad: 9, cpm: 2.95, creatorSplit: 35 },
];

const insights = [
  {
    emoji: "📉",
    title: "The Ad Load Ceiling",
    body: "Platforms cannot infinitely increase ad load without severely damaging user retention.",
  },
  {
    emoji: "⏱️",
    title: "Session Dominance",
    body: "TikTok offsets lower CPMs entirely through massive session lengths (95+ minutes).",
  },
];

export default function Page() {
  const [selectedId, setSelectedId] = useState("youtube");
  const [simDau, setSimDau] = useState(122);
  const [simSession, setSimSession] = useState(40);
  const [simAdLoad, setSimAdLoad] = useState(12);
  const [simCpm, setSimCpm] = useState(7.5);

  const activePlatform = platforms.find((p) => p.id === selectedId) || platforms[0];

  useEffect(() => {
    setSimDau(activePlatform.dau);
    setSimSession(activePlatform.session);
    setSimAdLoad(activePlatform.adLoad);
    setSimCpm(activePlatform.cpm);
  }, [selectedId]);

  const totalHours = (simDau * 1000000 * simSession) / 60;
  const totalImpressions = totalHours * simAdLoad;
  const dailyRevenue = (totalImpressions / 1000) * simCpm;
  const creatorRevenue = dailyRevenue * (activePlatform.creatorSplit / 100);
  const platformNet = dailyRevenue - creatorRevenue;

  const cpmData = platforms.map((p) => ({ name: p.name, value: p.cpm }));
  const maxCpm = Math.max(...cpmData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white p-8">
      <header className="mb-8 text-center border-b border-slate-700 pb-6">
        <h1 className="text-4xl font-bold text-blue-500">Attention Economy Revenue Simulator</h1>
        <p className="text-slate-400 mt-2">REAL RAILS INTELLIGENCE LIBRARY • POC-45</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-xl min-h-140">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Revenue Engine Simulator: {activePlatform.name}
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-400">Daily Active Users (M)</label>
                  <span className="text-lg font-bold text-red-400">{simDau}M</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="3000"
                  value={simDau}
                  onChange={(e) => setSimDau(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none accent-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-400">Session Length (min)</label>
                  <span className="text-lg font-bold text-red-400">{simSession} min</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="180"
                  value={simSession}
                  onChange={(e) => setSimSession(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none accent-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-400">Ad Load (Ads/hr)</label>
                  <span className="text-lg font-bold text-red-400">{simAdLoad}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={simAdLoad}
                  onChange={(e) => setSimAdLoad(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none accent-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-400">Average CPM ($)</label>
                  <span className="text-lg font-bold text-red-400">${simCpm.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="20"
                  step="0.5"
                  value={simCpm}
                  onChange={(e) => setSimCpm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none accent-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400">Total Hours</p>
                <p className="text-xl font-bold text-cyan-400">{(totalHours / 1e6).toFixed(1)}M</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400">Ad Impressions</p>
                <p className="text-xl font-bold text-purple-400">{(totalImpressions / 1e9).toFixed(2)}B</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400">Daily Revenue</p>
                <p className="text-xl font-bold text-green-400">${(dailyRevenue / 1e6).toFixed(1)}M</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400">Annual Run Rate</p>
                <p className="text-xl font-bold text-yellow-400">${((dailyRevenue * 365) / 1e9).toFixed(2)}B</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-blue-400">Revenue Split</h3>
            <div className="flex h-6 bg-slate-700 rounded overflow-hidden mb-4">
              <div
                className="bg-red-500 h-full transition-all duration-500"
                style={{ width: `${100 - activePlatform.creatorSplit}%` }}
              />
              <div
                className="bg-green-500 h-full transition-all duration-500"
                style={{ width: `${activePlatform.creatorSplit}%` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-800 p-3 rounded">
                <p className="text-slate-400">Platform ({100 - activePlatform.creatorSplit}%)</p>
                <p className="font-bold text-red-400">${(platformNet / 1e6).toFixed(1)}M</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <p className="text-slate-400">Creator ({activePlatform.creatorSplit}%)</p>
                <p className="font-bold text-green-400">${(creatorRevenue / 1e6).toFixed(1)}M</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-xl min-h-130">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Platform Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedId === p.id ? "border-red-500 bg-slate-800" : "border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{p.icon}</span>
                    <h3 className="font-semibold text-blue-400">{p.name}</h3>
                  </div>
                  <div className="text-xs text-slate-400">
                    <p>DAU: {p.dau}M | CPM: ${p.cpm}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-xl min-h-105">
            <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">CPM by Ad Vertical</h3>
            <div className="space-y-4">
              {cpmData.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{item.name}</span>
                    <span className="text-blue-400 font-bold">${item.value}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${(item.value / maxCpm) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-xl min-h-80">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Why This Matters</h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded border border-slate-700">
                  <div className="flex gap-3">
                    <span className="text-2xl">{insight.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-blue-400">{insight.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed mt-1">{insight.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
