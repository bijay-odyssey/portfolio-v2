import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const GITHUB_USER = "bijay-odyssey";
const FALLBACK = { repos: 49, stars: 62, followers: 6, languages: ["Python", "Jupyter Notebook", "HTML", "Java", "PHP"] };

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("rate-limited");
        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const langCount = {};
        repos.forEach((r) => {
          if (r.fork || !r.language) return;
          langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const languages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        if (!cancelled) {
          setData({
            repos: user.public_repos,
            stars,
            followers: user.followers,
            languages: languages.length ? languages : FALLBACK.languages,
          });
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = data || FALLBACK;
  const isLive = Boolean(data);

  return (
    <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
      <div className="bg-ink p-8">
        <div className="flex items-center gap-2 text-muted mb-6 font-mono text-xs uppercase tracking-widest">
          <SiGithub size={13} /> Live snapshot
          <span className={`ml-auto w-1.5 h-1.5 rounded-full ${isLive ? "bg-accent" : "bg-muted"}`} />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <Stat value={stats.repos} label="Public repos" />
          <Stat value={stats.stars} label="Total stars" />
          <Stat value={stats.followers} label="Followers" />
        </div>
      </div>
      <div className="bg-ink p-8">
        <p className="text-muted mb-6 font-mono text-xs uppercase tracking-widest">Top languages</p>
        <div className="flex flex-wrap gap-2">
          {stats.languages.map((lang) => (
            <span key={lang} className="font-mono text-xs border border-line-strong rounded-full px-3 py-1.5">
              {lang}
            </span>
          ))}
        </div>
        {error && <p className="mt-4 text-xs text-muted/70">Showing cached figures — GitHub API rate limit reached.</p>}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="font-display text-3xl sm:text-4xl font-semibold text-accent">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </motion.div>
  );
}
