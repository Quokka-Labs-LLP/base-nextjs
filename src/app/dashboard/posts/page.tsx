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

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log(res)

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
      <h1>Posts</h1>
      <PaperWrapper>
        <TableWrapper>
          <TableHeadWrapper>
            <TableCellWrapper>Title</TableCellWrapper>
            <TableCellWrapper>Body</TableCellWrapper>
            <TableCellWrapper>Action</TableCellWrapper>
          </TableHeadWrapper>
          <TableBodyWrapper>
            {data.map((item: any) => {
              return (
                <TableRowWrapper key={item.id}>
                  <TableCellWrapper>{item.title}</TableCellWrapper>
                  <TableCellWrapper>{item.body}</TableCellWrapper>
                  <TableCellWrapper>
                    <ActionButton />
                  </TableCellWrapper>
                </TableRowWrapper>
              )
            })}
          </TableBodyWrapper>
        </TableWrapper>
        <PaginationWrapper rows={data} />
      </PaperWrapper>
    </div>
  )
}
