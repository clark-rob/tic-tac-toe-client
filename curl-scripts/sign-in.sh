# sh curl-scripts/json/sign-in.sh

curl 'https://tic-tac-toe-wdi.herokuapp.com/sign-in' \
  --include \ # gives more data once access is allowed
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo
