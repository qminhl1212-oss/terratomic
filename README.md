# 🌎 Terratomic.io

[![Join Discord](https://img.shields.io/discord/1380341945603330148?label=Join%20Us%20on%20Discord&logo=discord&style=for-the-badge)](https://discord.gg/JNZbp4pg5y)

**Terratomic.io** is a large-scale Cold War strategy game featuring **nuclear warfare**, **naval and air combat**, and **economic expansion**. Players command nations through the global balance of power — managing **trade, production, alliances, and military escalation** in a tense race for dominance.

It is a fork of [OpenFront.io](https://github.com/openfrontio/OpenFrontIO), which itself was derived from [WarFront.io](https://github.com/WarFrontIO).

---

## 💬 Why This Fork

While OpenFront laid a strong foundation, Terratomic takes a different approach — placing community feedback and collaborative development at the core of its roadmap.

This project aims to evolve based on what players actually want, with transparent priorities and active community input shaping the game's future.

This is a game built _with_ its players, not just _for_ them.

---

## 🤝 Contributing

Whether you're here to squash bugs, prototype new mechanics, or improve the UI, here's how to get started:

```bash
git clone https://github.com/1brucben/Terratomic.git
cd Terratomic
npm install
npm run dev
```

> **Note for Windows users:** If you encounter map loading errors like "invalid data, buffer size incorrect", run `git add --renormalize .` and then `git checkout -- .` to fix binary file line-ending issues.

You're now ready to start developing locally. A formal contribution guide will be published soon.

Until then, open issues, submit pull requests, or join the discussion [on Discord](https://discord.gg/JNZbp4pg5y) — we're listening.

### Deploying a small multiplayer server on Render

The included `render.yaml` creates a free Docker web service. In Render, create a Blueprint from this repository and deploy the `terratomic-multiplayer` service. The Render profile runs one game worker, uses a 200 ms game tick, and limits scheduled public lobbies to 16 players and 80 bots to fit the free instance's resource limits. Private lobbies are still available.

Render free services can sleep after 15 minutes without inbound traffic, take about a minute to wake, and may restart at any time. Active multiplayer WebSocket traffic keeps the service awake, but games and local archives are in memory or on an ephemeral filesystem, so a restart ends active games and does not preserve local archive data. This setup is intended for hobby play and testing, not an always available public server.

---

## 🗂️ Project Structure

- `src/client` – Game frontend (components, graphics, styles, utilities)
- `src/core` – Shared game logic (execution, game state, pathfinding, validations)
- `src/server` – Backend services (session control, matchmaking, gatekeeping)
- `src/scripts` – Dev or build-time scripts
- `resources/` – Static assets (flags, fonts, icons, maps, sprites, images)
- `tests/` – Unit and integration tests for client, core logic, and utilities

---

## 🛠️ Licensing

Terratomic is a fork of [OpenFront.io](https://github.com/openfrontio/OpenFrontIO).

The original OpenFront project was first released under the **MIT License**, later re-licensed to **GPLv3**, and subsequently upgraded to **AGPLv3**. Terratomic incorporates changes from both the GPLv3 and AGPLv3 versions. Accordingly, **the entire codebase of this repository is distributed under the GNU Affero General Public License v3.0 (AGPLv3)**.

### 📜 Code License

**License:** [GNU Affero General Public License v3.0](LICENSE)  
Based on OpenFront (https://github.com/openfrontio/OpenFrontIO)  
© 2020–2025 OpenFront contributors  
Modifications © 2025 Terratomic contributors

You are free to use, modify, and redistribute this code under the terms of the AGPLv3. See the [LICENSE](LICENSE) file for the full text.

### 🎨 Asset License

All assets located in the `resources/` folder are licensed under  
**[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)**  
© 2020–2025 OpenFront contributors  
© 2025 Terratomic contributors

These assets are **not** relicensed under AGPLv3 and must remain under CC BY-SA 4.0 with proper attribution.  
If you redistribute or modify these assets, preserve this notice and the license file within the folder.

### 🔒 Proprietary Content

The `proprietary/` folder (if present) is governed by a separate proprietary license and a Contributor License Agreement (CLA). See [CLA.md](./CLA.md) for contributor terms.

---

© 2025 Terratomic Team
