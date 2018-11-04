# sh curl-scripts/json/change-password.sh

# don't use a password you use for any real websites!
curl 'https://tic-tac-toe-wdi.herokuapp.com/change-password' \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "old" : "'"${OLD_PASSWORD}"'",
    "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
