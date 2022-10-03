#!/bin/bash
certbot --nginx -d www.pshenka.space -m justlyahuska@gmail.com --agree-tos
nginx -g "daemon off;"