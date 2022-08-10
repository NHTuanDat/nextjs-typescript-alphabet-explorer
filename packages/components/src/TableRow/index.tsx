import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { IRows } from "@project/components"
// import styles from "./TableBody.module.css"

export type TableRowProps = {
    className?: string
    row: IRows
}

export function TableRow({ className, row }: TableRowProps) {
    const { block, gasUsed, miner, hash, timestamp, numOfTransactions } = row
    return (
        <tr>
            <td>{block}</td>
            <td>{hash}</td>
            <td>{timestamp}</td>
            <td>{miner}</td>
            <td>{numOfTransactions}</td>
            <td>{gasUsed}</td>
        </tr>
    )
}
