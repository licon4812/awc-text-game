#!/bin/bash
cd /game || exit
npm run start
echo Would you like to play again - Y/N ?
read -r input
if [[ $input == "Y" || $input == "y" ]]; then
        $SHELL
else
        exit
fi
