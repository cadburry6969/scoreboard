fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Cadburry#7547'
description 'Standalone Scoreboard'

shared_script 'config.lua'
client_script 'client.lua'
server_script 'server.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/script.js',
    'html/style.css'
}

dependencies {
    '/onesync',
}