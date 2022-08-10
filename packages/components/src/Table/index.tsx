import classNames from "classnames"
import React from "react"
import styles from "./Table.module.css"

export type TableProps = {
    children: React.ReactNode
    className?: string
}

export function Table({ children, className }: TableProps) {
    return <table className={classNames([styles.table, className])}>{children}</table>
}
