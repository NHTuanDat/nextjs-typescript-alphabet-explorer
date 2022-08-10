import classNames from "classnames"
import React, { useEffect, useState } from "react"
// import styles from "./TableBody.module.css"
import * as ethers from "ethers"
import { TableRow } from "@project/components"
import { convertTimestamp } from "@project/utils"

export type TableBodyProps = {
    className?: string,
    n: number,
    provider: ethers.ethers.providers.JsonRpcProvider
}

export interface IRows {
    block: number
    hash: string
    timestamp: string
    miner: string
    numOfTransactions: number
    gasUsed: string
}

export function TableBody({ className, n, provider }: TableBodyProps) {
    const [rows, setRows] = useState<Array<IRows | undefined>>(Array<undefined>)

    useEffect(() => {
        const fetchNLatestBlock = async (n: number) => {
            const blockNumber = await provider.getBlockNumber()
            const rowsData = Array<IRows | undefined>(n)
            for (var i = 0; i < n; i++) {
                const { number, hash, timestamp, miner, gasUsed, transactions } = await provider.getBlock(
                    blockNumber - i
                )
                const modifiedData = {
                    block: number,
                    hash: hash.slice(0, 8) + "...",
                    miner: miner.slice(0, 5) + "..." + miner.slice(miner.length - 3, miner.length),
                    timestamp: convertTimestamp(timestamp),
                    numOfTransactions: transactions.length,
                    gasUsed: ethers.utils.formatUnits(gasUsed, "wei"),
                }
                rowsData[i] = modifiedData
                setRows(rowsData)
            }
        }
        fetchNLatestBlock(n)
    }, [])

    return (
        <tbody className={classNames([className])}>
            {rows && rows.map((row, id) => <TableRow key={id} row={row!} />)}
        </tbody>
    )
}
