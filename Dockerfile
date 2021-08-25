FROM node:16-buster

ENV PATH /app/node_modules/.bin:$PATH

ENV workdir=/app
RUN useradd -m nodejs && \
    mkdir $workdir && \
    chown -R nodejs:nodejs $workdir
USER nodejs
WORKDIR $workdir

# COPY --chown=nodejs package.json package-lock.json $workdir
# RUN npm install
# COPY --chown=nodejs . /app
# RUN npm run build

# CMD ["npm", "run", "start"]
