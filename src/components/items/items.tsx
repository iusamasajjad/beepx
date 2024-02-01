"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import bitCoin from "./Bitcoin.png"
import Image from "next/image"
import pro1 from "./pro1.png"
import pro2 from "./pro-2.png"
import pro3 from "./pro-3.png"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Popup } from ".."

const data: Table[] = [
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: bitCoin,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: bitCoin,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: pro1,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: pro2,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: pro3,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: bitCoin,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: pro1,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
  {
    id: "m5gr84i9",
    name: "Justin Dorwart",
    image: pro2,
    rarity: "7586",
    buyNow: "17.50",
    lastSale: "7.89",
    topBid: "7.89",
    owner: "48c100",
    held: "5",
    time: "30",
  },
]

export type Table = {
  id: string
  name: string
  image: any
  rarity: string
  buyNow: string
  lastSale: string
  topBid: string
  owner: string
  held: string
  time: string
}

export const columns: ColumnDef<Table>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Image src={row.original.image} width={30} height={30} alt="image1" />
        <div className="capitalize">{row.getValue("name")}</div>
      </div>
    ),
  },
  {
    accessorKey: "rarity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rarity
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize pl-4">{row.getValue("rarity")}</div>
    ),
  },
  {
    accessorKey: "buyNow",
    header: "buy Now",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("buyNow")}</div>
    ),
  },
  {
    accessorKey: "lastSale",
    header: "LastSale",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastSale")}</div>
    ),
  },
  {
    accessorKey: "topBid",
    header: "topBid",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("topBid")}</div>
    ),
  },
  {
    accessorKey: "owner",
    header: "OWNER",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("owner")}</div>
    ),
  },
  {
    accessorKey: "held",
    header: "held",
    cell: ({ row }) => <div className="capitalize">{row.getValue("held")}</div>,
  },
  {
    accessorKey: "time",
    header: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00001 1.33337C4.32668 1.33337 1.33334 4.32671 1.33334 8.00004C1.33334 11.6734 4.32668 14.6667 8.00001 14.6667C11.6733 14.6667 14.6667 11.6734 14.6667 8.00004C14.6667 4.32671 11.6733 1.33337 8.00001 1.33337ZM10.9 10.38C10.8067 10.54 10.64 10.6267 10.4667 10.6267C10.38 10.6267 10.2933 10.6067 10.2133 10.5534L8.14668 9.32004C7.63334 9.01337 7.25334 8.34004 7.25334 7.74671V5.01337C7.25334 4.74004 7.48001 4.51337 7.75334 4.51337C8.02668 4.51337 8.25334 4.74004 8.25334 5.01337V7.74671C8.25334 7.98671 8.45334 8.34004 8.66001 8.46004L10.7267 9.69337C10.9667 9.83337 11.0467 10.14 10.9 10.38Z"
          fill="#B8B8B8"
        />
      </svg>
    ),
    cell: ({ row }) => <div className="">{row.getValue("time")}m ago</div>,
  },
]

export const Items = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [bids, setBids] = React.useState(false)
  const [holders, setHolders] = React.useState(false)
  const [itemsTable, setItemsTable] = React.useState(true)
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              setItemsTable(true)
              setBids(false)
              setHolders(false)
            }}
            className={`flex gap-1 py-2 pt-8 items-center ${
              itemsTable && "border-b border-yellow-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.1417 4.07498L11.2583 1.89998C10.5416 1.58331 9.45832 1.58331 8.74165 1.89998L3.85832 4.07498C2.62498 4.62498 2.44165 5.37498 2.44165 5.77498C2.44165 6.17498 2.62498 6.92498 3.85832 7.47498L8.74165 9.64998C9.09998 9.80831 9.54998 9.89164 9.99998 9.89164C10.45 9.89164 10.9 9.80831 11.2583 9.64998L16.1417 7.47498C17.375 6.92498 17.5583 6.17498 17.5583 5.77498C17.5583 5.37498 17.3833 4.62498 16.1417 4.07498Z"
                fill={` ${itemsTable ? "#EFD22E" : "white"}`}
              />
              <path
                d="M10 14.2C9.68335 14.2 9.36668 14.1333 9.07502 14.0083L3.45835 11.5083C2.60002 11.125 1.93335 10.1 1.93335 9.15829C1.93335 8.81663 2.20835 8.54163 2.55002 8.54163C2.89168 8.54163 3.16668 8.81663 3.16668 9.15829C3.16668 9.60829 3.54168 10.1916 3.95835 10.375L9.57502 12.875C9.84168 12.9916 10.15 12.9916 10.4167 12.875L16.0333 10.375C16.45 10.1916 16.825 9.61663 16.825 9.15829C16.825 8.81663 17.1 8.54163 17.4417 8.54163C17.7833 8.54163 18.0583 8.81663 18.0583 9.15829C18.0583 10.0916 17.3917 11.125 16.5333 11.5083L10.9167 14.0083C10.6334 14.1333 10.3167 14.2 10 14.2Z"
                fill={` ${itemsTable ? "#EFD22E" : "white"}`}
              />
              <path
                d="M10 18.3334C9.68335 18.3334 9.36668 18.2667 9.07502 18.1417L3.45835 15.6417C2.53335 15.2334 1.93335 14.3084 1.93335 13.2917C1.93335 12.95 2.20835 12.675 2.55002 12.675C2.89168 12.675 3.16668 12.95 3.16668 13.2917C3.16668 13.8167 3.47502 14.2917 3.95835 14.5084L9.57502 17.0084C9.84168 17.125 10.15 17.125 10.4167 17.0084L16.0333 14.5084C16.5083 14.3 16.825 13.8167 16.825 13.2917C16.825 12.95 17.1 12.675 17.4417 12.675C17.7833 12.675 18.0583 12.95 18.0583 13.2917C18.0583 14.3084 17.4583 15.225 16.5333 15.6417L10.9167 18.1417C10.6334 18.2667 10.3167 18.3334 10 18.3334Z"
                fill={` ${itemsTable ? "#EFD22E" : "white"}`}
              />
            </svg>
            <p className={` ${itemsTable && "text-yellow-300"}`}>ITEMS</p>
          </button>
          <button
            onClick={() => {
              setItemsTable(false)
              setBids(true)
              setHolders(false)
            }}
            className={`flex gap-1 py-2 pt-8 items-center ${
              bids && "border-b border-yellow-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.1167 15.8666C16.9917 15.9916 16.8333 16.0499 16.675 16.0499C16.5167 16.0499 16.3583 15.9916 16.2333 15.8666L12.1083 11.7416L12.55 11.2999L12.9917 10.8583L17.1167 14.9833C17.3583 15.2249 17.3583 15.6249 17.1167 15.8666Z"
                fill={` ${bids ? "#EFD22E" : "white"}`}
              />
              <path
                d="M5.39165 7.73333L10.225 12.5667C10.55 12.8917 10.55 13.4167 10.225 13.7417L9.47499 14.5C8.79999 15.1667 7.73332 15.1667 7.06665 14.5L3.44999 10.8833C2.79165 10.225 2.79165 9.14999 3.44999 8.48333L4.20832 7.72499C4.53332 7.40833 5.06665 7.40833 5.39165 7.73333Z"
                fill={` ${bids ? "#EFD22E" : "white"}`}
              />
              <path
                d="M15.4917 8.49165L12.3167 11.6583C11.9833 11.9916 11.45 11.9916 11.1167 11.6583L6.29999 6.84165C5.96665 6.50832 5.96665 5.97498 6.29999 5.64165L9.47499 2.46665C10.1333 1.80832 11.2083 1.80832 11.875 2.46665L15.4917 6.08332C16.15 6.74998 16.15 7.81665 15.4917 8.49165Z"
                fill={` ${bids ? "#EFD22E" : "white"}`}
              />
              <path
                d="M6.66666 18.125H1.66666C1.32499 18.125 1.04166 17.8417 1.04166 17.5C1.04166 17.1583 1.32499 16.875 1.66666 16.875H6.66666C7.00832 16.875 7.29166 17.1583 7.29166 17.5C7.29166 17.8417 7.00832 18.125 6.66666 18.125Z"
                fill={` ${bids ? "#EFD22E" : "white"}`}
              />
            </svg>
            <p className={` ${bids && "text-yellow-300"}`}>BIDS</p>
          </button>
          <button
            onClick={() => {
              setItemsTable(false)
              setBids(false)
              setHolders(true)
            }}
            className={`flex gap-1 py-2 pt-8 items-center ${
              holders && "border-b border-yellow-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.49999 1.66663C5.31666 1.66663 3.54166 3.44163 3.54166 5.62496C3.54166 7.76663 5.21666 9.49996 7.39999 9.57496C7.46666 9.56663 7.53332 9.56663 7.58332 9.57496C7.59999 9.57496 7.60832 9.57496 7.62499 9.57496C7.63332 9.57496 7.63332 9.57496 7.64166 9.57496C9.77499 9.49996 11.45 7.76663 11.4583 5.62496C11.4583 3.44163 9.68332 1.66663 7.49999 1.66663Z"
                fill={` ${holders ? "#EFD22E" : "white"}`}
              />
              <path
                d="M11.7333 11.7917C9.40833 10.2417 5.61666 10.2417 3.275 11.7917C2.21666 12.5 1.63333 13.4583 1.63333 14.4833C1.63333 15.5083 2.21666 16.4583 3.26666 17.1583C4.43333 17.9417 5.96666 18.3333 7.5 18.3333C9.03333 18.3333 10.5667 17.9417 11.7333 17.1583C12.7833 16.45 13.3667 15.5 13.3667 14.4667C13.3583 13.4417 12.7833 12.4917 11.7333 11.7917Z"
                fill={` ${holders ? "#EFD22E" : "white"}`}
              />
              <path
                d="M16.6583 6.11671C16.7917 7.73338 15.6417 9.15004 14.05 9.34171C14.0417 9.34171 14.0417 9.34171 14.0333 9.34171H14.0083C13.9583 9.34171 13.9083 9.34171 13.8667 9.35838C13.0583 9.40004 12.3167 9.14171 11.7583 8.66671C12.6167 7.90004 13.1083 6.75004 13.0083 5.50004C12.95 4.82504 12.7167 4.20838 12.3667 3.68338C12.6833 3.52504 13.05 3.42504 13.425 3.39171C15.0583 3.25004 16.5167 4.46671 16.6583 6.11671Z"
                fill={` ${holders ? "#EFD22E" : "white"}`}
              />
              <path
                d="M18.325 13.825C18.2583 14.6334 17.7417 15.3334 16.875 15.8084C16.0417 16.2667 14.9917 16.4834 13.95 16.4584C14.55 15.9167 14.9 15.2417 14.9667 14.525C15.05 13.4917 14.5583 12.5 13.575 11.7084C13.0167 11.2667 12.3667 10.9167 11.6583 10.6584C13.5 10.125 15.8167 10.4834 17.2417 11.6334C18.0083 12.25 18.4 13.025 18.325 13.825Z"
                fill={` ${holders ? "#EFD22E" : "white"}`}
              />
            </svg>
            <p className={` ${holders && "text-yellow-300"}`}>HOLDERS</p>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 text-sm py-2 pt-8 text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} /
            {table.getFilteredRowModel().rows.length} SELECTED
          </div>
          <div className="flex items-center py-2 pt-8 py-4">
            <Input
              placeholder="Item Id"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          {itemsTable && (
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
          {bids && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
          {holders && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </Table>
      </div>
      {itemsTable && (
        <div className="flex items-center space-x-2 py-4">
          <Popup total={table.getFilteredSelectedRowModel().rows.length} />
        </div>
      )}
    </div>
  )
}
