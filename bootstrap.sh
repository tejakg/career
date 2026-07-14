#!/usr/bin/env bash

set -e

CAREER_DIR="$HOME/career"

cd "$CAREER_DIR"

echo "Using existing repository:"
echo "$CAREER_DIR"

mkdir -p Jobs
mkdir -p Jobs/Current
mkdir -p Jobs/Archive
mkdir -p prompts
mkdir -p scripts
mkdir -p output

create_if_missing () {
    if [ ! -f "$1" ]; then
        echo "Creating $1"
        cat > "$1"
    else
        echo "✓ $1 already exists"
    fi
}

create_if_missing README.md <<'EOF'
# Career Repository
EOF

create_if_missing Resume.md <<'EOF'
# Master Resume
EOF

create_if_missing Prompt.md <<'EOF'
# Resume Tailoring Prompt
EOF

create_if_missing CHANGELOG.md <<'EOF'
# Changelog
EOF

create_if_missing .gitignore <<'EOF'
.vscode/
*.pdf
.DS_Store
Thumbs.db
EOF

echo
echo "Repository structure verified."
