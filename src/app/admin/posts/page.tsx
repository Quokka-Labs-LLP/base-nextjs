import { apiGetTasks } from '@/lib/api-request'

import {
  PaginationWrapper,
  PaperWrapper,
  TableBodyWrapper,
  TableCellWrapper,
  TableHeadWrapper,
  TableRowWrapper,
  TableWrapper,
} from '@/components/Table'
import { getData } from '@/app/api/post/route'

import ActionButton from './action'

export default async function Page() {
  const data: any[] = []

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
            {data?.map((item: any) => {
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
