#!/usr/bin/env bash
set -e

cp ~/privateinfo/days/2018-06-05.md today.md
cat today.md | node test.js > today_parsed.md
# cat today.md | node test.js
