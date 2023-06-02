FROM brendanburns/wasm-dev-base:0.0.7

RUN apt update && apt install -y -qq lsb-release wget gnupg lld-15 && \
    curl -fsSL https://crystal-lang.org/install.sh | bash && \
    update-alternatives --install /usr/bin/wasm-ld wasm-ld /usr/bin/wasm-ld-15 80
