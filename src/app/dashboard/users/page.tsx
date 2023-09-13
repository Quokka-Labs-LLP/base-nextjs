import DialogV1 from '@/components/Dialog/DialogV1'
import {
  PaginationWrapper,
  PaperWrapper,
  TableBodyWrapper,
  TableCellWrapper,
  TableHeadWrapper,
  TableRowWrapper,
  TableWrapper,
} from '@/components/Table'

import ActionButton from './action'
import { Search, SearchWithBtn } from './Search'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <h1>Users</h1>
      <Search label='Search' size='small' variant='standard' />
      <SearchWithBtn label='Search with button' size='small' variant='standard' />
      <PaperWrapper>
        <TableWrapper>
          <TableHeadWrapper>
            <TableCellWrapper>Name</TableCellWrapper>
            <TableCellWrapper>Email</TableCellWrapper>
            <TableCellWrapper>Address</TableCellWrapper>
            <TableCellWrapper>Phone</TableCellWrapper>
            <TableCellWrapper>Company</TableCellWrapper>
            <TableCellWrapper>Action</TableCellWrapper>
          </TableHeadWrapper>
          <TableBodyWrapper>
            {data.map((item: any) => {
              return (
                <TableRowWrapper key={item.id}>
                  <TableCellWrapper>{item.name}</TableCellWrapper>
                  <TableCellWrapper>{item.email}</TableCellWrapper>
                  <TableCellWrapper>{item.address.city}</TableCellWrapper>
                  <TableCellWrapper>{item.phone}</TableCellWrapper>
                  <TableCellWrapper>{item.company.name}</TableCellWrapper>
                  <TableCellWrapper>
                    <ActionButton />
                  </TableCellWrapper>
                </TableRowWrapper>
              )
            })}
          </TableBodyWrapper>
        </TableWrapper>
        <PaginationWrapper rows={data} />
        <DialogV1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus vitae nostrum
          deserunt fuga id asperiores est ipsam facilis. Ut velit veritatis vel sapiente tempora
          nisi dolore nulla quas facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Minima, repellat nihil voluptates repellendus magnam dicta porro recusandae cupiditate,
          cumque odio hic quo, eius veritatis culpa! Dolore quisquam eos ipsum aspernatur! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem suscipit similique labore
          distinctio impedit itaque harum debitis, incidunt dolorem quibusdam ratione quidem
          veritatis at possimus perspiciatis minima nobis pariatur laborum.
        </DialogV1>
      </PaperWrapper>
    </div>
  )
}
