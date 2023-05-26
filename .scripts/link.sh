# creates a symlink for the output folder of this package (dist)

PACKAGE=$(npm show . name)
EXISTING=$(npm ls -g $PACKAGE --parseable)
LOCATION=$1

[ ! -d "dist" ] && echo "✗ Could not find dist/ - did you run build or watch before linking?" && exit 0

clear
echo "== Linking $PACKAGE =="
echo

if [[ ${#EXISTING} -gt 0 ]]
then
  echo "Found an existing link for this package when running \"npm ls -g\""
  echo "$EXISTING"
  echo "Would you like to remove it?"
  select result in yes "no (cancel)"
  do
    case $result in
        yes)
          sudo npm rm --global --s "$PACKAGE" && echo "* Removed existing link for $PACKAGE." && break;;
        "no (cancel)")
          exit 0;;
        *)
          echo "✗ Invalid option $REPLY";;
      esac
  done
  echo
fi

# link dist folder
cd dist
npm -s link
cd ..

if [ -n "$1" ]; then
  # link to folder from args
  echo "Linking $PACKAGE -> $LOCATION."
  cd $LOCATION
  npm -s link $PACKAGE
  echo "✔ $PACKAGE is now linked in $LOCATION."
  exit 1
else
  echo "✔ You're all linked up! Run the following command in your container app: npm link $PACKAGE."
  exit 1
fi