#!/usr/bin/env bash
#
# This script assumes a linux/OSX environment

DES=$1/assets

printf "*** Packaging assets in $DES... "

if [ -n "${TRAVIS_TAG}" ]; then
  pushd .. > /dev/null
  git clone --depth 1 https://github.com/uBlockOrigin/uAssets.git
  popd > /dev/null
fi

rm -rf $DES
mkdir $DES
cp ./assets/assets.json $DES/

if [ -f ./tmp/requests.json.gz ]; then
    gunzip -c ./tmp/requests.json.gz > $DES/requests.json
fi

mkdir $DES/thirdparties
cp -R ../uAssets/thirdparties/easylist-downloads.adblockplus.org $DES/thirdparties/
cp -R ../uAssets/thirdparties/mirror1.malwaredomains.com         $DES/thirdparties/
cp -R ../uAssets/thirdparties/pgl.yoyo.org                       $DES/thirdparties/
cp -R ../uAssets/thirdparties/publicsuffix.org                   $DES/thirdparties/
cp -R ../uAssets/thirdparties/www.malwaredomainlist.com          $DES/thirdparties/

cp -R ./thirdparties/www.eff.org                                 $DES/thirdparties/ # ADN

mkdir $DES/ublock
cp -R ../uAssets/filters/*                                       $DES/ublock/
# Optional filter lists: do not include in package
rm    $DES/ublock/annoyances.txt 2> /dev/null

cp -R ./filters/adnauseam.txt                                    $DES/ublock/ # ADN

echo "done."
