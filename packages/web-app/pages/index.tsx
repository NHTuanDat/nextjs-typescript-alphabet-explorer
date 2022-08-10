import { Table, TableBody } from "@project/components"
import classNames from "classnames"
import styles from "./Index.module.css"
import * as ethers from "ethers"
import { useEffect, useState } from "react"

export default function Index() {
    const [gasPrice, setGasPrice] = useState<string | undefined>(undefined)
    const providers = {
        localhost: "http://127.0.0.1:8543",
    }
    const provider = new ethers.providers.JsonRpcProvider(providers["localhost"])

    useEffect(() => {
        const fetchGasPrice = async () => {
            setGasPrice(ethers.utils.formatUnits(await provider.getGasPrice(), "gwei"))
        }

        fetchGasPrice()
    })

    return (
        <div className={classNames([styles.container])}>
            <div className={classNames([styles.row])}>
                <div className={classNames([styles["col-lg-12"], styles["text-center"]])}>
                    <h1>Alphabet Explorer</h1>
                    <p>
                        <small>{gasPrice && "⛽" + gasPrice + " Gwei"}</small>
                    </p>
                    <h2>Latest 20 blocks</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Block</th>
                                <th scope="col">Hash</th>
                                <th scope="col">Timestamp</th>
                                <th scope="col">Miner</th>
                                <th scope="col">Transactions</th>
                                <th scope="col">Gas Used</th>
                            </tr>
                        </thead>
                        <TableBody n={20} provider={provider} />
                    </Table>
                </div>
            </div>
        </div>
    )
}
