# Build stage
FROM ekidd/rust-musl-builder AS build

WORKDIR /app

COPY src/main.rs ./src/
COPY Cargo.toml ./

RUN cargo build --release

# Final stage
FROM gcr.io/distroless/cc

WORKDIR /bin

COPY --from=build /app/target/x86_64-unknown-linux-musl/release/nodevsrust ./
COPY payload.json ./

EXPOSE 10113

ENTRYPOINT ["/bin/nodevsrust"]