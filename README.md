# Table of Contents

# 1. Introduction

This is a learning project to create a explorer for a private blockchain.

The webapp is coded in `typescript` using `Next.js` framework, `ethers` to fetch blockchain data, `bootstrap` for CSS contents.
Thanks to [th0th](https://github.com/th0th/nextjs-typescript-yarn-workspaces) for the Next.js boilerplate.

![Alphabet explorer]()

## 2.1 Development

1. Install dependencies

    ```shell script
    $ yarn
    ```

2. Start the web-app next.js application

    ```shell script
    $ yarn workspace @project/web-app dev
    ```

    Then the application should be accessible on [http://localhost:3000](http://localhost:3000).
    Remember to start alphabet private chain in port 8543 first.
    You can edit the webapp RPC port in `packages\web-app\pages\index.tsx` on line 10
