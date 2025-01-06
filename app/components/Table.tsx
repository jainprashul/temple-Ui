import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnDef, type Row } from '@tanstack/react-table'
import { Loader2 } from 'lucide-react'
import React from 'react'

type Props<T> = {
  columns: ColumnDef<T>[],
  selectedIndex?: number,
  loading?: boolean,
  pageConfig?: {
    enabled?: boolean,
    pageSize: number,
  },
  data: T[],
  children?: React.ReactNode
  onRowClick?: (row: Row<T>) => void
}

const Table = <T,>({
  columns,
  data,
  pageConfig = {
    enabled: true,
    pageSize: 20,
  },
  children,
  selectedIndex = -1,
  onRowClick,
  loading = false,

}: Props<T>) => {
  const [query, setQuery] = React.useState('')

  const table = useReactTable({
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageConfig.pageSize,
      },
    },
    state : {
      globalFilter: query,
    },
    columns,
    data,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(), //client side sorting needed if you want to use sorting too.
    getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
    globalFilterFn: 'auto',
    onGlobalFilterChange: setQuery,
    
  })

  const { rows } = table.getRowModel()


  return (
    <>
      <div className="flex justify-between">
        <div className='space-x-2'>
          {children}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <div className='overflow-x-auto'>
      <table className="table table-zebra">
        <thead>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => ( // map over the headerGroup headers array
                  <th key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            )
          })}
        </thead>
        <tbody className="">
          {loading && ( 
            <tr>
              <td colSpan={columns.length} className="h-32">
                <Loader2 className="w-8 h-8 animate-spin" /> Loading...
              </td>
            </tr>
          )
          }
          {
            rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center h-32">No data found</td>
              </tr>
            ) :
            rows.map((row) => {
              return (
                <tr key={row.id} 
                    className={`hover ${selectedIndex === row.index ? 'bg-primary/10' : ''}`}
                    onClick={() =>onRowClick?.(row)}
                 >
                  {
                    row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id} className="">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })
                  }

                </tr>
              )
            })
          }

        </tbody>
      </table>
      </div>
      <div className="flex items-center justify-between bg-base-200 p-2">
          <span>
            Page{' '}
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>{' '}
          </span>
          <div className="flex space-x-2">
          <button className='btn btn-square btn-sm' onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>{"<<"}</button>
          <button className='btn btn-square btn-sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{"<"}</button>
          <button className='btn btn-square btn-sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{">"}</button>
          <button className='btn btn-square btn-sm' onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>{">>"}</button>
          <select className="select select-ghost select-sm w-full max-w-xs"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}>
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          </div>
        </div>
    </>
  )
}

export default Table