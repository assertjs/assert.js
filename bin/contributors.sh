#!/usr/bin/env bash

# Script for generating CONTRIBUTORS file

# $1 -> https://api.github.com/repos/assertjs/assert.js/contributors
# $2 -> filepath

curl -s $1 | jq -r '.[] | .login + " (" + .html_url + ")"' > $2