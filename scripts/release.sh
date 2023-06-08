#!/bin/bash

set -e
ref=$1

gh auth status

echo
echo "---- Releasing from $ref ----"
echo

git log "$ref" -n1
sha=$(git log "$ref" -n1 --format=format:%h)

tag="$(date %Y-%m-%d)-$sha"
echo "$tag"
