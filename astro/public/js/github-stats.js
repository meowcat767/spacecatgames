/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("github-stats");
    const owner = "neurontechofficial";
    const repo = "spacecatgames";

    container.innerHTML = "<p>Loading GitHub stats…</p>";

    try {
        /* ---------------- BASIC REPO INFO ---------------- */
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        const repoData = await repoRes.json();

        const lastUpdated = new Date(repoData.updated_at).toLocaleString();

        /* ---------------- BRANCH STATS ---------------- */
        const branchesRes = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/branches`
        );
        const branches = await branchesRes.json();

        const branchStats = [];

        for (const branch of branches) {
            const commitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch.name}&per_page=1`
            );

            const link = commitRes.headers.get("Link");
            let count = 0;

            if (link && link.includes('rel="last"')) {
                const match = link.match(/page=(\d+)>; rel="last"/);
                if (match) count = parseInt(match[1], 10);
            } else {
                const data = await commitRes.json();
                count = data.length;
            }

            branchStats.push({ name: branch.name, commits: count });
        }

        /* ---------------- COMMIT ACTIVITY ---------------- */
        const activityRes = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`
        );
        const activity = await activityRes.json();

        if (!Array.isArray(activity)) {
            throw new Error("Commit activity still computing");
        }

        const weeks = activity.map((w, i) => `W${i + 1}`);
        const commitsPerWeek = activity.map(w => w.total);

        /* ---------------- RENDER ---------------- */
        container.innerHTML = `
        <h3>Repository Stats</h3>
        <p><strong>Stars:</strong> ${repoData.stargazers_count}</p>
        <p><strong>Forks:</strong> ${repoData.forks_count}</p>
        <p><strong>Open Issues:</strong> ${repoData.open_issues_count}</p>
        <p><strong>Last Updated:</strong> ${lastUpdated}</p>

        <h3>Commit Activity</h3>
        <canvas id="commitChart" height="120"></canvas>

        <h3>Branches</h3>
        <ul>
        ${branchStats
            .map(b => `<li><strong>${b.name}:</strong> ${b.commits} commits</li>`)
            .join("")}
            </ul>

            <small>
            <a href="${repoData.html_url}" target="_blank">View on GitHub</a>
            </small>
            `;

            /* ---------------- DRAW GRAPH ---------------- */
            const ctx = document.getElementById("commitChart").getContext("2d");

            new Chart(ctx, {
                type: "line",
                data: {
                    labels: weeks,
                    datasets: [{
                        label: "Commits per week (last year)",
                      data: commitsPerWeek,
                      tension: 0.25,
                      borderWidth: 2,
                      fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: true }
                    },
                    scales: {
                        x: { display: false },
                        y: { beginAtZero: true }
                    }
                }
            });

    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Unable to load GitHub stats (GitHub still computing, please try again later.).</p>";
    }
});
