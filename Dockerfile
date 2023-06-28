# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
FROM plone/frontend-builder:${VOLTO_VERSION} as builder

ARG PB_ADDONS="@plonegovbr/volto-brasil-site,@plonegovbr/volto-brasil-theme"
ARG PB_WORKSPACES="src/addons/volto-brasil-site,src/addons/volto-brasil-theme"
ARG PB_THEME="@kitconcept/volto-light-theme"

COPY ./dockerfiles/helper.py /setupAddon
COPY --chown=node:node ./dockerfiles/mrs.developer.json /app/mrs.developer.json
COPY --chown=node:node ./ /app/src/addons/volto-brasil-site/

RUN <<EOT
    set -e
    npx -p mrs-developer missdev --config=jsconfig.json --output=addons --fetch-https
    /setupAddon
    yarn install --network-timeout 1000000
    yarn build
    rm -rf cache omelette .yarn/cache
EOT

FROM plone/frontend-prod-config:${VOLTO_VERSION}

LABEL maintainer="PloneGov-Br <portalbrasil@plone.org.br>" \
      org.label-schema.name="volto-brasil-site" \
      org.label-schema.description="Site do PortalBrasil" \
      org.label-schema.vendor="PloneGov-Br"

COPY --from=builder /app/ /app/
