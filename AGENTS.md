# Repository workflow

Use `main` as the working branch and push completed changes directly to `origin/main`, as requested by the repository owner. Use another branch or a pull request only when the user explicitly requests it. Fetch and preserve existing remote changes before pushing; do not force-push to resolve divergence.

Cloud tasks already run in isolated environments. Use the existing checkout; do not create a worktree unless the user explicitly requests one.
