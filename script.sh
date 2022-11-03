#!/bin/bash
passwd -d root
su-c
butterfly.server.py --host="0.0.0.0" --shell="/game/./game.sh" --port=57575 --unsecure
npm install