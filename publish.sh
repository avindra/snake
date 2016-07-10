cd dist

if [[ -f app_new.js ]]; then
    echo "No new build detected"
    exit 1
fi

mv app_new.js app.js
git add app.js
git commit -m 'new build (auto)'
git push