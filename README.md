What?
=====

Minimal nodejs express webapp whose elapsed time is random within a certain threshold

It listens to env.PORT (default 3456)
It answers /health right away with a 204
It answers any other request with a 200 and a text payload taking a random time between env.MIN and env.MAX by (default to 2 and 10)

Why?
====

PoC for creating high availability deployments simulating latency

Usage
=====

Build container
`docker build -t random_elapsed_time:latest`

Run container (show
`docker run -p3456:3456 run random_elapsed_time:latest` # Uses all defaults
`docker run -p8888:3000 --env PORT=3000 --env MIN=1 --env MAX=20 run random_elapsed_time:latest`
