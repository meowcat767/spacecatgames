---
title: Tooling Update - Add Game 1.2.4
date: 2026-04-29
author: meowcat767
version: 18.3.38
---

# Tooling Update - Add Game 1.2.4

The add game tool (scripts/add-game.js) has had a minor update. 

### Changelog

We now validate the game's name against the game list with
```javascript
 const exists = data.games.some(game =>
        game.title.toLowerCase() === title.trim().toLowerCase() ||
        game.url === url.trim()
    );
```
With this, you can no longer add a game that already exists/has the same title. 

URL validation is now implemented. Returning no game file causes an exception.

```javascript
if (!url.trim()) {
    console.error('Error: URL is required');
    rl.close();
    process.exit(1);
}

if (!isValidGameUrl(url)) {
    console.error('Error: URL must start with /, https://, or http://');
    rl.close();
    process.exit(1);
}
```

Thats it for now!

Thanks for contributing to Space Cat Games!