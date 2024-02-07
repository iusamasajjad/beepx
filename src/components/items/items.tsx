"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import bitCoin from "./Bitcoin.png"
import Image from "next/image"
import pro1 from "./pro1.png"
import pro2 from "./pro-2.png"
import pro3 from "./pro-3.png"
import search from "./search.png"
import profile2 from "./Bitcoin2.png"
import { ScrollArea } from "@/components/ui/scroll-area"
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
    id: "m5gr84i8",
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
    name: "Justin",
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
    id: "m5gr84i7",
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
    id: "m5gr84i6",
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
    id: "m5gr84i5",
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
    id: "m5gr84i4",
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
    id: "m5gr84i3",
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
    id: "m5gr84i2",
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

// Define a Row type
export type Row = Table & {
  isSelected: boolean
}
export const Items = () => {
  const columns: ColumnDef<Table>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) => {
            table.toggleAllPageRowsSelected(!!value)
            handleSelectAllChange(value)
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected() || getIsSelected(row.original.id)}
          onCheckedChange={(value: any) => {
            row.toggleSelected(!!value)
            handleCheckboxChange(row.original.id, value)
          }}
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
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="flex items-center gap-1"
        >
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
            RARITY
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize pl-4"
        >
          {row.getValue("rarity")}
        </div>
      ),
    },
    {
      accessorKey: "buyNow",
      header: "BUYNOW",
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize"
        >
          {row.getValue("buyNow")}
        </div>
      ),
    },
    {
      accessorKey: "lastSale",
      header: "LASTSALE",
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize"
        >
          {row.getValue("lastSale")}
        </div>
      ),
    },
    {
      accessorKey: "topBid",
      header: "TOPBID",
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize"
        >
          {row.getValue("topBid")}
        </div>
      ),
    },
    {
      accessorKey: "owner",
      header: "OWNER",
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize"
        >
          {row.getValue("owner")}
        </div>
      ),
    },
    {
      accessorKey: "held",
      header: "Held",
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className="capitalize"
        >
          {row.getValue("held")}
        </div>
      ),
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
      cell: ({ row }) => (
        <div
          onClick={() => {
            handleCheckboxChange(
              row.original.id,
              !selectedRows[row.original.id]
            )
          }}
          className=""
        >
          {row.getValue("time")}m ago
        </div>
      ),
    },
    {
      accessorKey: "time",
      header: "",
      cell: () => (
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.9333 6.81665H9.74167H5.06667C4.26667 6.81665 3.86667 7.78332 4.43334 8.34998L8.75 12.6667C9.44167 13.3583 10.5667 13.3583 11.2583 12.6667L12.9 11.025L15.575 8.34998C16.1333 7.78332 15.7333 6.81665 14.9333 6.81665Z"
              fill="white"
            />
          </svg>
        </div>
      ),
    },
  ]
  // State to manage selected rows
  const [selectedRows, setSelectedRows] = React.useState<
    Record<string, boolean>
  >({})
  // Function to toggle selected row
  const toggleSelected = (id: string, value: boolean) => {
    setSelectedRows({ ...selectedRows, [id]: value })
  }

  // Function to check if a row is selected
  const getIsSelected = (id: string) => {
    return !!selectedRows[id]
  }

  // Function to handle checkbox change
  const handleCheckboxChange = (id: string, value: boolean) => {
    toggleSelected(id, value)
  }
  const selectedRowCount = Object.values(selectedRows).filter(Boolean).length

  // Function to handle "Select All" checkbox change
  const handleSelectAllChange = (value: boolean) => {
    const newSelectedRows: Record<string, boolean> = {}
    data.forEach((row) => {
      newSelectedRows[row.id] = value
    })
    setSelectedRows(newSelectedRows)
  }
  const [tableRowView, setTableRowView] = React.useState(true)
  const [tableColumnView, setTableColumnView] = React.useState(false)
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
            className={`flex gap-1 py-2 pt-8 text-xs items-center ${
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
            className={`flex gap-1 py-2 text-xs pt-8 items-center ${
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
            className={`flex gap-1 text-xs py-2 pt-8 items-center ${
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
          <div className="flex text-xs py-2 pt-8 text-muted-foreground">
            {selectedRowCount} /{table.getFilteredRowModel().rows.length}{" "}
            SELECTED
          </div>
          <div className="flex relative items-center px-6 py-2 pt-8">
            <input
              placeholder="Item ID"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="bg-black w-20 outline-none"
            />
            <Image
              className="absolute bottom-[12px] left-0"
              src={search}
              width={20}
              height={20}
              alt="search"
            />
          </div>
          <div className="pt-6 flex items-center gap-3">
            <svg
              className="cursor-pointer"
              onClick={() => {
                setTableRowView(false)
                setTableColumnView(true)
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                fill={` ${tableColumnView ? "#EFD22E" : "#333333"}`}
              />
              <path
                d="M18.67 2H16.77C14.59 2 13.44 3.15 13.44 5.33V7.23C13.44 9.41 14.59 10.56 16.77 10.56H18.67C20.85 10.56 22 9.41 22 7.23V5.33C22 3.15 20.85 2 18.67 2Z"
                fill={` ${tableColumnView ? "#EFD22E" : "#333333"}`}
              />
              <path
                d="M18.67 13.4301H16.77C14.59 13.4301 13.44 14.5801 13.44 16.7601V18.6601C13.44 20.8401 14.59 21.9901 16.77 21.9901H18.67C20.85 21.9901 22 20.8401 22 18.6601V16.7601C22 14.5801 20.85 13.4301 18.67 13.4301Z"
                fill={` ${tableColumnView ? "#EFD22E" : "#333333"}`}
              />
              <path
                d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
                fill={` ${tableColumnView ? "#EFD22E" : "#333333"}`}
              />
            </svg>
            <svg
              className="cursor-pointer"
              onClick={() => {
                setTableRowView(true)
                setTableColumnView(false)
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
                fill={` ${tableRowView ? "#EFD22E" : "#333333"}`}
              />
              <path
                d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
                fill={` ${tableRowView ? "#EFD22E" : "#333333"}`}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.94 5.41994L13.77 2.42994C12.78 1.85994 11.23 1.85994 10.24 2.42994L5.01999 5.43994C2.94999 6.83994 2.82999 7.04994 2.82999 9.27994V14.7099C2.82999 16.9399 2.94999 17.1599 5.05999 18.5799L10.23 21.5699C10.73 21.8599 11.37 21.9999 12 21.9999C12.63 21.9999 13.27 21.8599 13.76 21.5699L18.98 18.5599C21.05 17.1599 21.17 16.9499 21.17 14.7199V9.27994C21.17 7.04994 21.05 6.83994 18.94 5.41994ZM12 15.2499C10.21 15.2499 8.74999 13.7899 8.74999 11.9999C8.74999 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        {tableRowView && (
          <ScrollArea className="h-[65vh] overflow-y-scroll">
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
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
              {holders && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </Table>
          </ScrollArea>
        )}
      </div>
      {tableColumnView && (
        <ScrollArea className="rounded-md h-[65vh] overflow-y-scroll border">
          <div className="flex mx-1 flex-wrap w-full">
            {data.map((item, index) => (
              <div
                onClick={() => {
                  handleCheckboxChange(item.id, !selectedRows[item.id])
                }}
                className={`mx-2 px-3 w-[30%] my-2 py-3 hover:bg-[#efd22e33] ${
                  selectedRows[item.id] ? "bg-[#efd22e33]" : ""
                }`}
                key={index}
              >
                <div className="relative w-fit">
                  <Image src={profile2} alt="" />
                  <Checkbox
                    className="absolute right-2 bg-black top-3"
                    checked={getIsSelected(item.id)}
                    onCheckedChange={(value: any) =>
                      handleCheckboxChange(item.id, value)
                    }
                    aria-label={`Select row ${item.id}`}
                  />
                </div>
                <div>{item.name}</div>
                <div className="flex my-2 items-center justify-between">
                  <div>
                    <p className="uppercase text-xs text-gray-400">buynow</p>
                    <p className="text-xs">{item.buyNow}</p>
                  </div>
                  <div>
                    <p className="uppercase text-xs text-gray-400">lastsale</p>
                    <p className="text-xs">{item.lastSale}</p>
                  </div>
                </div>
                <div className="flex my-2 items-center justify-between">
                  <div>
                    <p className="uppercase text-xs text-gray-400">topbid</p>
                    <p className="text-xs">{item.topBid}</p>
                  </div>
                  <div>
                    <p className="uppercase text-xs text-gray-400">owner</p>
                    <p className="text-xs">{item.owner}</p>
                  </div>
                </div>
                <div className="flex my-2 items-center justify-between">
                  <div>
                    <p className="uppercase text-xs text-gray-400">#held</p>
                    <p className="text-xs">{item.held}</p>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M7.99992 2.08337C4.32659 2.08337 1.33325 5.07671 1.33325 8.75004C1.33325 12.4234 4.32659 15.4167 7.99992 15.4167C11.6733 15.4167 14.6666 12.4234 14.6666 8.75004C14.6666 5.07671 11.6733 2.08337 7.99992 2.08337ZM10.8999 11.13C10.8066 11.29 10.6399 11.3767 10.4666 11.3767C10.3799 11.3767 10.2933 11.3567 10.2133 11.3034L8.14658 10.07C7.63325 9.76337 7.25325 9.09004 7.25325 8.49671V5.76337C7.25325 5.49004 7.47992 5.26337 7.75325 5.26337C8.02659 5.26337 8.25325 5.49004 8.25325 5.76337V8.49671C8.25325 8.73671 8.45325 9.09004 8.65992 9.21004L10.7266 10.4434C10.9666 10.5834 11.0466 10.89 10.8999 11.13Z"
                          fill="#B8B8B8"
                        />
                      </svg>
                    </div>
                    <p className="text-xs">{item.time}m ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
      {itemsTable && (
        <div className="flex items-center space-x-2 py-4">
          <Popup total={selectedRowCount} />
        </div>
      )}
    </div>
  )
}
