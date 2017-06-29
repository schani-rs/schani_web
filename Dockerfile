from debian:latest

COPY target/release/schani_web /usr/local/bin

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/schani_web"]

