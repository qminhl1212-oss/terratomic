#!/bin/bash
set -e
# Render routes public traffic to the configured PORT. Keep the existing port
# for deployments that do not provide one.
sed -i "s/listen 80 default_server;/listen ${PORT:-80} default_server;/" /etc/nginx/conf.d/default.conf
# Start supervisord
if [ "$DOMAIN" = openfront.dev ] && [ "$SUBDOMAIN" != main ]; then
    exec timeout 18h /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
else
    exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
fi
